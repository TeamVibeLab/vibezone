import Image from "next/image";

export default function Home() {
  return (
    <div className="w-4/5">
      <section className="p-15
      flex flex-col gap-y-25
      rounded-4xl bg-bright-foreground">
        <button className="w-auto h-auto p-8 mx-auto
        rounded-4xl bg-button hover:bg-button-highlight
        text-2xl text-white
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
        text-4xl
        font-bold text-dark-foreground">
        Твій студентський путівник у Львові! Знаходь найкращі місця для відпочинку, натхнення та розваг
        </div>
      </section>
    </div>
  );
}
