"use client";

import { useEffect, useState } from "react";

import { getFirestore, collection, getDocs } from "firebase/firestore";

import NewsPost from "@/components/NewsPost/NewsPost";
import firebaseApp from "@/firebase/app";

export default function News() {
  const [newsPosts, setNewsPosts] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const firestore = getFirestore(firebaseApp);
      const collectionRef = collection(firestore, "news_posts");
      const snapshot = await getDocs(collectionRef);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNewsPosts(data);
    }
    fetchLocations();
  }, [])

    return (
        <section className="w-3/5 p-4">

            <div className="flex flex-col gap-12">
                {
                    newsPosts.map((post, index) => (
                        <NewsPost
                            data={post}
                            key={index}
                        />
                    )
                )}
            </div>
        </section>
    );
}