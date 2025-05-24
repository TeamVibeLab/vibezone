'use client'

import { useEffect, useState } from "react";

import Image from "next/image";
import { useSearchParams } from "next/navigation"

import { getFirestore, doc, getDoc } from "firebase/firestore";

import firebaseApp from "@/firebase/app";

export default function Page() {
    const [postData, setPostData] = useState([]);

    const searchParams = useSearchParams();
    const search = searchParams.get("id");
    console.log(search);

    useEffect(() => {
        const fetchData = async () => {
            const firestore = getFirestore(firebaseApp);
            const docRef = doc(firestore, "news_posts", search);
            const snapshot = await getDoc(docRef);
            const data = { ...snapshot.data() };
            setPostData(data);
        }
        fetchData();
    }, [])
    console.log(postData);

    return (
        <div className="w-4/5
        rounded-lg bg-bright-foreground
        text-dark-foreground">
            <Image
                src={`/images/${postData.image_src}`}
                alt="Фотографія локації"
                width={5233}
                height={3758}
                className="object-cover
                w-full h-64
                rounded-t-lg
                border-b-4 border-dark-foreground"
            />
            <h1 className="px-6
            text-6xl font-bold">
                {postData.title}
            </h1>
            <p className="px-12
            text-base">
                {postData.date?.toDate().toDateString()}
            </p>
            <p className="px-6
            text-2xl">
                {postData.content}
            </p>
        </div>
    );
}