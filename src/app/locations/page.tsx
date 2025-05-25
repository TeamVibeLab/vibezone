"use client";

import { useEffect, useState } from "react";

import { getFirestore, collection, getDocs } from "firebase/firestore";

import { Category, CategoryNames } from "@/constants/locations"
import LocationPreview from "@/components/LocationPreview/LocationPreview";
import firebaseApp from "@/firebase/app";

export default function Locations() {
    const categories = Object.values(Category).filter(value => typeof value === 'number');

    const [enabledCategories, setEnabledCategories] = useState(() =>
        Object.fromEntries(categories.map(category => [category, false]))
    );
    const allCategoriesDisabled = Object.values(enabledCategories).every(category => category == false);

    const [locations, setLocations] = useState([])
    useEffect(() => {
        const fetchLocations = async () => {
            const firestore = getFirestore(firebaseApp);
            const collectionRef = collection(firestore, "locations");
            const snapshot = await getDocs(collectionRef);
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setLocations(data);
        }
        fetchLocations();
    }, []);

    const displayedLocations = locations.filter(location =>
        location.categories.some((category: number) => allCategoriesDisabled || enabledCategories[category])
    );

    return (
        <div className="w-4/5
        text-bright-foreground">
            <section>
                <p className="text-5xl font-bold text-center">Категорії</p>
                <div className="w-full my-4
                flex flex-row justify-content items-center gap-x-2">
                {
                    categories.map(category => (
                        <button
                        className={`w-96 h-16 p-4
                        text-bright-foreground text-xl text-center
                        flex justify-center items-center
                        rounded-4xl ${!enabledCategories[category] ? "bg-button" : "bg-button-highlight"} ${!enabledCategories[category] ? "hover:bg-button-highlight" : "hover:bg-button"}`}
                        key={category}
                        onClick={() => {
                            setEnabledCategories(prev => ({
                                ...prev,
                                [category]: !prev[category],
                            }));
                        }}
                        >
                            {CategoryNames[category]}
                        </button>
                    ))
                }
                </div>
            </section>
            <section className="grid grid-cols-5 gap-4 justify-center items-center">
                {
                    displayedLocations.map((post, index) => (
                        <LocationPreview
                            data={post}
                            key={index}
                        />
                    )
                )}
            </section>
        </div>
    )
}