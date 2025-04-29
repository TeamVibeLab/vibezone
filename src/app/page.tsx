export default function Home() {
  return (
    <div>
      <section className="flex flex-col gap-x-2
      rounded-4xl bg-bright-foreground p-6">
        <button className="rounded-full bg-button text-white hover:bg-button-highlight">Знайти цікаві місця</button>
        <div className="text-dark-foreground">
        Твій студентський путівник у Львові! Знаходь найкращі місця для відпочинку, натхнення та розваг
        </div>
      </section>
    </div>
  );
}
