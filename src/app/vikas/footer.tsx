// footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#121b32] text-white py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto border-4 border-white rounded-3xl p-8 flex flex-col lg:flex-row justify-between gap-6">
        {/* Left side */}
        <div>
          <h2 className="text-2xl font-bold mb-4">VibeZone</h2>
          <div className="flex gap-4">
            <a href="#"><img src="/icons/tiktok.svg" alt="TikTok" className="w-8 h-8" /></a>
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="w-8 h-8" /></a>
            <a href="#"><img src="/icons/telegram.svg" alt="Telegram" className="w-8 h-8" /></a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Головна</p>
          <p>Локації</p>
          <p>Оголошення</p>
          <p>Про нас</p>
          <p>Контакти</p>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Соціальні мережі</p>
          <p>TikTok</p>
          <p>Instagram</p>
          <p>Telegram</p>
        </div>

        {/* Contacts */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Контакти</p>
          <p>Email:</p>
          <p>Телефон:</p>
        </div>
       
      </div>
      <p className="text-center text-sm mt-4 opacity-70">
        © 2025 VibeZone. Створено з турботою про вас ;)
      </p>
    </footer>
  );
}
