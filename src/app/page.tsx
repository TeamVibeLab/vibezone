"use client";

import { useEffect, useState, useRef } from "react";

import Image from "next/image";

import { getFirestore, collection, getDocs } from "firebase/firestore";

import firebaseApp from "@/firebase/app";

export default function Home() {
  const [locations, setLocations] = useState([]);

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
  }, [])

  const containerRef = useRef<HTMLUListElement>(null);

  const addScrollPosition = (scrollAmount: number) => {
    if (containerRef.current)
    {
      containerRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="w-4/5">
      <section className="p-15 m-5
      flex flex-col gap-y-25
      rounded-4xl bg-bright-foreground">
        <a 
        href="/locations"
        className="w-auto h-auto p-8 mx-auto
        rounded-4xl bg-button hover:bg-button-highlight
        text-2xl text-bright-foreground
        flex justify-between items-center gap-x-4">
          Знайти цікаві місця
          <span className="items-baseline inline-flex">
          <Image
              src={`/images/icon-button-arrow.png`}
              alt="Іконка кнопки, щоб перейти на сторінку локацій"
              width={128}
              height={128}
              className="w-8 object-center invert"
          /></span>
        </a>
        <div className="lg:w-1/2 max-lg:w-full
        text-4xl font-bold text-dark-foreground">
        Твій студентський путівник у Львові! Знаходь найкращі місця для відпочинку, натхнення та розваг
        </div>
      </section>

      <section className="flex flex-col items-center
        lg:w-2/3 md:w-3/4 max-md:w-full mx-auto m-5 p-5
        rounded-4xl bg-bright-foreground
        text-dark-foreground">
        <p className="text-4xl">Топ місць цього тижня!</p>
        <ul className="w-full px-4
        flex gap-6
        snap-x snap-mandatory overflow-x-auto no-scrollbar scroll-smooth"
        ref={containerRef}>
          {
          locations.map((location, index) => (
          <a key={index} className="w-[340px] h-128
          shrink-0
          relative
          snap-center"
          href="/location">
            <Image
                src={`/images/example_location_image.jpg`}
                alt="Фотографія локації"
                width={5233}
                height={3758}
                className="border-6 rounded-4xl border-dark-foreground
                w-full h-full
                object-bottom object-cover"
                key={index}
            />
            <p className="absolute bottom-5 right-5
            select-none
            text-2xl text-center font-bold text-bright-foreground bold-shadow-dark-foreground">{location.address}</p>
            <p className="absolute bottom-5 left-5
            select-none
            text-3xl text-center font-bold text-bright-foreground bold-shadow-dark-foreground">{location.name}</p>
            <p className="absolute bottom-15 left-5
            select-none
            text-xl text-center font-bold text-bright-foreground bold-shadow-dark-foreground">{location.price}</p>
          </a>
          ))}
        </ul>
        <div className="flex gap-x-6 m-4">
          <button className="rounded-2xl bg-button hover:bg-button-highlight
          w-auto h-auto py-3 px-5 mx-auto
          text-2xl text-bright-foreground"
          onClick={()=>addScrollPosition(-350)}>
            &#8592;
          </button>
          <button className="rounded-2xl bg-button hover:bg-button-highlight
          w-auto h-auto py-3 px-5 mx-auto
          text-2xl text-bright-foreground"
          onClick={()=>addScrollPosition(350)}>
            &#8594;
          </button>
        </div>
      </section>
    </div>
  );
}
