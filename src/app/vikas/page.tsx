//import React from 'react';
"use client";


import PlaceCard from './PlaceCard'
import { Place } from './PlaceCard';
import { AnimatePresence, motion } from 'framer-motion';

import React, { useState } from 'react';
export default function VikasPage() {

  const places: Place[] = [
   
    {
      name: 'House Pizza',
      address: 'вул. Городоцька, 159',
      price: 'від 80 грн',
      category: 'Кафе',
      imageUrl: 'pl1.png',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Італійський дворик',
      address: 'пл. Ринок, 6',
      price: '20 грн',
      category: 'Культурні місця',
      imageUrl: 'pl15.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Горіховий гай',
      address: 'вул. Володимира Великого, 14А',
      price: 'Безкоштовно',
      category: 'Культурні місця',
      imageUrl: 'pl10.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'МолоДвіж',
      address: 'Скорика, 31 (Чайковського, 31)',
      price: 'Безкоштовно',
      category: 'Коворкінг',
      imageUrl: 'pl8.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'New York Street Pizza',
      address: 'вул. Червоної Калини, 36 / вул. Володимира Великого, 51',
      price: 'від 75 грн',
      category: 'Кафе',
      imageUrl: 'pl9.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Грузинська випічка',
      address: 'вул. Бандери, 45 / вул. Личаківська, 44',
      price: 'від 30 грн',
      category: 'Кафе',
      imageUrl: 'pl3.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Шевченківський гай (музей)',
      address: 'Личаківська (Чернеча гора, 1)',
      price: 'Безкоштовно',
      category: 'Культурні місця',
      imageUrl: 'pl12.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Пузата Хата',
      address: 'проспект Шевченка, 10 / вул. Січових Стрільців, 12',
      price: 'від 20 грн',
      category: 'Кафе',
      imageUrl: 'pl4.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'UStart Coworking',
      address: 'вул. Шевченка, 111А',
      price: 'Від 150 грн',
      category: 'Коворкінг',
      imageUrl: 'pl13.png',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Їдальня УКУ',
      address: 'вул. Козельницька, 2А',
      price: 'від 15 грн',
      category: 'Бюджетне харчування',
      imageUrl: 'pl5.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Добрий друг',
      address: 'вул. Староєврейська, 12 / вул. Січових Стрільців, 3',
      price: 'від 30 грн',
      category: 'Кафе',
      imageUrl: 'pl6.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Young Dovzhenko',
      address: 'проспект Червоної Калини, 81 (2 поверх)',
      price: 'Безкоштовно',
      category: 'Коворкінг',
      imageUrl: 'pl14.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Містечко',
      address: 'вул. Вітовського, 1 / вул. Левицького, 2',
      price: 'від 30 грн',
      category: 'Кафе',
      imageUrl: 'pl2.png',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Пиріжкова',
      address: '  вул. Словацького, 4',
      price: 'від 20 грн',
      category: 'Бюджетне харчування',
      imageUrl: 'pl7.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Твій ланч',
      address: 'вул. Менцинського, 3',
      price: 'від 170 грн/1 комплексний обід',
      category: 'Кафе',
      imageUrl: 'p1.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Perfetto',
      address: 'вул. Сар’яна, 6',
      price: 'від 95 грн',
      category: 'Кафе',
      imageUrl: 'pl17.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Палац Потоцьких',
      address: ' М. Коперника, 15',
      price: 'від 80 грн',
      category: 'Культурні місця',
      imageUrl: 'pl16.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Будинок вчених',
      address: 'Листопадового Чину, 6',
      price: '50 грн',
      category: 'Культурні місця',
      imageUrl: 'p2.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: '“Кумпель”',
      address: 'площа Митна, 6',
      price: 'від 40 грн',
      category: 'Кафе',
      imageUrl: 'p9.jpeg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'П`яна вишня',
      address: 'Кам`яниця Гаслярівська, площа Ринок, 11',
      price: 'від 150 грн',
      category: 'Розваги',
      imageUrl: 'p10.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Epic Chicken Cafe',
      address: 'вул. Галицька, 15',
      price: 'від 50 грн',
      category: 'Кафе',
      imageUrl: 'p8.jpeg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Вуйко Сем',
      address: ' вул. Братів Рогатинців, 23',
      price: 'від 100 грн',
      category: 'Кафе',
      imageUrl: 'p7.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Студентський парк',
      address: 'академіка Сахарова, 7',
      price: 'Безкоштовно',
      category: 'Культурні місця',
      imageUrl: 'p4.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'IQ Pizza',
      address: 'вул. Княги Ольги, 69а | вул. Пасічна, 55',
      price: 'від 150 грн',
      category: 'Кафе',
      imageUrl: 'p5.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: ' “Вітальня”',
      address: 'вул. Академіка Богомольця, 6/1',
      price: 'від 35 грн',
      category: 'Кафе',
      imageUrl: 'p6.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Sette Coffee',
      address: 'вул. Степана Бандери, 7',
      price: 'від 30 грн',
      category: 'Кафе',
      imageUrl: 'p3.jpg',
      link : 'http://192.168.0.106:3000/bb'
    },
    {
      name: 'Оглядова вежа на Львівській ратуші',
      address: 'пл. Ринок, 1',
      price: '100 грн',
      category: 'Культурні місця',
      imageUrl: 'pl11.jpg',
      link : 'http://192.168.0.106:3000/bb'
    }
  ];


  const handleRandomPlace = () => {
    const filtered = selectedCategory
      ? places.filter(place => place.category === selectedCategory)
      : places;
  
    if (filtered.length === 0) {
      alert("Немає місць у цій категорії!");
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * filtered.length);
    const randomPlace = filtered[randomIndex];
  
    window.location.href = randomPlace.link;
  };
  


  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


const categories = [
  'Коворкінг',
  'Бібліотеки',
  'Бюджетне харчування',
  'Кафе',
  'Розваги',
  'Спорт',
  'Культурні місця',
];

const filteredPlaces = selectedCategory
  ? places.filter(place => place.category === selectedCategory)
  : places;

const totalPages = Math.ceil(filteredPlaces.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentPlaces = filteredPlaces.slice(startIndex, endIndex);

 
  return (
    <div
    className="min-h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat text-2xl"
    style={{ 
      backgroundImage: "url('/fon1.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
     }}
  >
  <div className="container mx-auto px-4 py-8 font-sans" >
      <header className="flex justify-between items-center py-4">
        <img src="/logo1.png" alt="Logotype" className="h-16 w-auto rotate-27 translate-y-23" />
        
         
        
      </header>
      
    
      
      <main className="mt-7">
  <div className="flex justify-between items-center flex-wrap gap-10 mb-10">
    <h1 className="text-4xl font-bold text-gray-300 ml-130">Місця які варто відвідати!</h1>
    <button
      onClick={handleRandomPlace}
      className="px-10 py-3 text-xl rounded-full border focus:outline-none transition cursor-pointer bg-gradient-to-r from-blue-200 to-purple-200 text-gray-800 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-puple-300 hover:text-gray-900"
    >
      🎲 Обрати випадкове місце
    </button>
    </div>

        <div className="h-px bg-white my-4" />
        

        <div className="mb-1 overflow-x-auto pb-2">

        
      

<div className="mb-1 overflow-x-auto pb-2">
  <div className="flex space-x-8">
  <button
  onClick={() => {
    setSelectedCategory(null);
    setCurrentPage(1);
  }}
  className={`px-10 py-3 text-xl rounded-full border focus:outline-none transition cursor-pointer ${
    selectedCategory === null
      ? 'bg-gradient-to-r from-blue-400 to-purple-400 text-gray-900'
      : 'bg-gradient-to-r from-blue-300 to-purple-300 text-gray-800 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-puple-300 hover:text-gray-900'
  }`}
>
  Усі категорії
</button>


    {categories.map((category) => (
      <button
        key={category}
        onClick={() => {
          setSelectedCategory(category);
          setCurrentPage(1);
        }}
        className={`px-6 py-4 text-xl rounded-full border focus:outline-none transition cursor-pointer ${
          selectedCategory === category
            ? 'bg-gradient-to-r from-blue-400 to-purple-400 text-gray-900'
            : 'bg-gradient-to-r from-blue-300 to-purple-300 text-gray-800 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-puple-300 hover:text-gray-900'
        }`}
      >
        {category}
      </button>
    ))}
  </div>
</div>

        </div>

        <div className="h-px bg-white my-4" />

        <AnimatePresence mode="wait">
  <motion.div
    key={`${selectedCategory || 'all'}-${currentPage}`} // ключ для анімації
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }}
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
  >
    {currentPlaces.map((place: Place, index: number) => (
      <PlaceCard key={index} place={place} />
    ))}
  </motion.div>
</AnimatePresence>




      <div className="flex justify-center mt-8 items-center space-x-6 text-white text-lg font-medium">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className={`text-2xl hover:text-blue-300 transition ${
      currentPage === 1 ? 'opacity-30 cursor-not-allowed' : ''
    }`}
  >
    &#x276E; {/* Юнікод стрілка «<» */}
  </button>

  <span>
    {currentPage} / {totalPages}
  </span>

  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className={`text-2xl hover:text-blue-300 transition ${
      currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : ''
    }`}
  >
    &#x276F; {/* Юнікод стрілка «>» */}
  </button>
</div>



        </main>
    </div>
    
    </div>
  );

}



