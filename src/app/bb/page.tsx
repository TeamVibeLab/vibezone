"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

type PlaceDetailsProps = {};

const PlaceDetails: React.FC<PlaceDetailsProps> = () => {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleBackClick = () => {
    router.push("http://192.168.0.103:3001/vikas");
  };

  return (
    <div className="min-h-screen w-full bg-[url('/images/image.png')] bg-cover bg-center bg-no-repeat bg-fixed text-white">
      {/* Основний контейнер */}
      <div className="relative bg-white/20 backdrop-blur-lg text-white rounded-2xl p-4 sm:p-6 shadow-lg w-full max-w-6xl mx-auto mt-6">
        {/* Верхній ряд */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleBackClick}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 text-gray-900bg-gradient-to-r from-blue-300 to-purple-300 text-gray-800 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-puple-300 hover:text-gray-900 font-semibold hover:opacity-90 transition"
            type="button"
          >
            ← Назад
          </button>

          <a
            href="https://www.google.com/maps/place/%D0%86%D1%82%D0%B0%D0%BB%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%B5+%D0%BF%D0%BE%D0%B4%D0%B2%D1%96%D1%80'%D1%8F/@49.8423151,24.0330272,17z/data=!3m1!4b1!4m6!3m5!1s0x473add6cfe330bab:0x73a56de803231767!8m2!3d49.8423151!4d24.0330272!16s%2Fg%2F11b5wfmkv9?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 text-gray-900bg-gradient-to-r from-blue-300 to-purple-300 text-gray-800 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-puple-300 hover:text-gray-900 font-semibold hover:opacity-90 transition"
          >
            📍 Показати на мапі
          </a>
        </div>

        {/* Інформація */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="relative w-full sm:w-1/2 h-64 sm:h-72 rounded-lg overflow-hidden">
            <Image
              src="/images/place.jpg"
              alt="Фото місця"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full sm:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold">Італійський дворик</h2>
              <p className="text-sm mt-1">пл. Ринок, 6, Львів</p>

              <h3 className="mt-6 text-lg font-medium">Що цікавого?</h3>
              <p className="text-sm mt-2">
           Італійський дворик — розташований у Палаці Корнякта, будинку № 6 на площі Ринок у 
           Львові — пам'ятка ренесансної архітектури, яку також називають Королівською кам'яницею. 
           Створювали цю красу італійські архітектори Петро Барбона та Павло Римлянин
            на замовлення великого мецената Констянтина Корнякта.
              </p>
            </div>
          </div>
        </div>

        {/* Кнопки */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 text-gray-900bg-gradient-to-r from-blue-300 to-purple-300 text-gray-800 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-puple-300 hover:text-gray-900 font-semibold hover:opacity-90 transition">
            Зберегти
          </button>

          <a
            href="https://www.instagram.com/italiyskydvoryk/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 text-gray-900bg-gradient-to-r from-blue-300 to-purple-300 text-gray-800 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-puple-300 hover:text-gray-900 font-semibold hover:opacity-90 transition text-sm font-semibold flex items-center justify-center gap-1 "
          >
            Відвідати сайт <span className="text-lg">➝</span>
          </a>
        </div>
      </div>
    



{/* Блоки відгуків користувачів */}
<div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
  {/* Відгук 1 */}
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-white shadow-md">
    <div className="flex justify-between items-center mb-2">
      <h4 className="text-lg font-semibold">Андрій</h4>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < 4 ? 'text-yellow-400' : 'text-gray-500'
            }`}
            fill={i < 4 ? '#facc15' : 'none'}
          />
        ))}
      </div>
    </div>
    <p className="text-sm">
  «Італійський дворик» — це справжній куточок Італії у Львові. 
  Атмосфера дуже затишна, а обслуговування уважне і приємне. 
  Смачна паста та справжня італійська кава зробили мій вечір незабутнім.
    </p>
  </div>

  {/* Відгук 2 */}
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-white shadow-md">
    <div className="flex justify-between items-center mb-2">
      <h4 className="text-lg font-semibold">Марія</h4>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < 5 ? 'text-yellow-400' : 'text-gray-500'
            }`}
            fill={i < 5 ? '#facc15' : 'none'}
          />
        ))}
      </div>
    </div>
    <p className="text-sm">
      Мені дуже сподобався «Італійський дворик» — тут відчувається автентичний дух Італії.
       Меню різноманітне, а порції щедрі і свіжі.
        Обов’язково повернуся сюди з друзями, щоб насолодитись атмосферою ще раз.
    </p>
  </div>

  {/* Відгук 3 */}
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-white shadow-md">
    <div className="flex justify-between items-center mb-2">
      <h4 className="text-lg font-semibold">Олег</h4>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < 3 ? 'text-yellow-400' : 'text-gray-500'
            }`}
            fill={i < 3 ? '#facc15' : 'none'}
          />
        ))}
      </div>
    </div>
    <p className="text-sm">
      Відвідав «Італійський дворик» і залишився в захваті від інтер’єру та смачної кухні.
       Піца була ідеальною, а десерти просто танули в роті.
        Рекомендую всім, хто хоче поринути в італійський настрій посеред Львова.
    </p>
  </div>
</div>





      {/* Відгуки */}
      <div className="mt-10 rounded-2xl p-6 bg-white/20 backdrop-blur-lg space-y-6 relative max-w-6xl mx-auto text-white">
        <h3 className="text-xl md:text-2xl font-semibold text-center">Залишити відгук</h3>

        {/* Зірки */}
        <div className="absolute top-20 right-6 flex gap-2">
          {[...Array(5)].map((_, i) => {
            const starIndex = i + 1;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setRating(starIndex)}
                onMouseEnter={() => setHover(starIndex)}
                onMouseLeave={() => setHover(0)}
                aria-label={`Рейтинг ${starIndex}`}
              >
                <Star
                  className={`w-6 h-6 ${
                    starIndex <= (hover || rating) ? "text-yellow-400" : "text-gray-500"
                  } transition-colors`}
                  fill={starIndex <= (hover || rating) ? "#facc15" : "none"}
                />
              </button>
            );
          })}
        </div>

        {/* Поля вводу */}
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <input
            type="text"
            placeholder="Ваше ім’я..."
            className="w-full rounded-xl px-4 py-2 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Ваш email..."
            className="w-full rounded-xl px-4 py-2 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <textarea
          placeholder="Ваш відгук..."
          rows={4}
          className="w-full rounded-xl px-4 py-2 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 mt-4 max-w-3xl mx-auto block"
        ></textarea>

        <button className="mt-2 px-6 py-2 bg-gradient-to-r from-blue-300 to-purple-300 text-gray-900bg-gradient-to-r from-blue-300 to-purple-300 text-gray-800 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-puple-300 hover:text-gray-900 font-semibold  rounded-full hover:opacity-90 transition block mx-auto">
  Відправити →
</button>

      </div>
    </div>
  );
};

export default PlaceDetails;


