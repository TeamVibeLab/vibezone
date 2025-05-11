"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const rows = [];
  for (let i = 0; i < 16; i++) {
      rows.push(
        <div key={i} className="w-85 h-128
        shrink-0
        relative
        snap-center">
          <Image
              src={`/images/example_location_image.jpg`}
              alt="Фотографія локації"
              width={5233}
              height={3758}
              className="border-6 rounded-4xl border-dark-foreground
              w-full h-full
              object-bottom object-cover"
              key={i}
          />
          <p className="absolute bottom-5 right-5
          select-none
          text-4xl text-center font-bold text-bright-foreground">Test</p>
        </div>
        /*<Image
              src={`/images/example_location_image.jpg`}
              alt="Фотографія локації"
              width={5233}
              height={3758}
              className="border-6 rounded-4xl border-dark-foreground
              w-85 h-128 
              object-bottom object-cover
              snap-center"
              key={i}
          />*/
    );
  }

  return (
    <div className="w-4/5">
      <section className="p-15 m-5
      flex flex-col gap-y-25
      rounded-4xl bg-bright-foreground">
        <button 
        onClick={(e) => {router.push("/locations")}}
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
        </button>
        <div className="lg:w-1/2 max-lg:w-full
        text-4xl font-bold text-dark-foreground">
        Твій студентський путівник у Львові! Знаходь найкращі місця для відпочинку, натхнення та розваг
        </div>
      </section>

      <section className="flex flex-col items-center
        w-1/2 mx-auto m-5
        rounded-4xl bg-bright-foreground
        text-dark-foreground">
        <p className="text-4xl">Топ місць цього тижня!</p>
        <ul className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-4">
          {rows}
        </ul>
      </section>
    </div>
  );
}
