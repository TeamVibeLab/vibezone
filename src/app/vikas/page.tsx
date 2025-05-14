//import React from 'react';
"use client";

import PlaceCard from './PlaceCard'
import { Place } from './PlaceCard';
import { AnimatePresence, motion } from 'framer-motion';

import React, { useState } from 'react';

//import Footer from './footer';

export default function VikasPage() {

  const places: Place[] = [
   
    {
      name: 'House Pizza',
      address: 'вул. Городоцька, 159',
      price: 'від 80 грн',
      category: 'Кафе',
      imageUrl: 'pl1.png',
    },
    {
      name: '“Містечко”',
      address: 'вул. Вітовського, 1 / вул. Левицького, 2',
      price: 'від 30 грн',
      category: 'Кафе',
      imageUrl: 'pl2.png',
    },
    {
      name: 'Горіховий гай',
      address: 'вул. Володимира Великого, 14А',
      price: 'Безкоштовно',
      category: 'Культурні місця',
      imageUrl: 'pl10.jpg',
    },
    {
      name: 'МолоДвіж',
      address: 'Скорика, 31 (Чайковського, 31)',
      price: 'Безкоштовно',
      category: 'Коворкінг',
      imageUrl: 'pl8.jpg',
    },
    {
      name: 'New York Street Pizza',
      address: 'вул. Червоної Калини, 36 / вул. Володимира Великого, 51',
      price: 'від 75 грн',
      category: 'Кафе',
      imageUrl: 'pl9.jpg',
    },
    {
      name: 'Грузинська випічка',
      address: 'вул. Бандери, 45 / вул. Личаківська, 44',
      price: 'від 30 грн',
      category: 'Кафе',
      imageUrl: 'pl3.jpg',
    },
    {
      name: 'Шевченківський гай (музей)',
      address: 'Личаківська (Чернеча гора, 1)',
      price: 'Безкоштовно',
      category: 'Культурні місця',
      imageUrl: 'pl12.jpg',
    },
    {
      name: 'Пузата Хата',
      address: 'проспект Шевченка, 10 / вул. Січових Стрільців, 12',
      price: 'від 20 грн',
      category: 'Кафе',
      imageUrl: 'pl4.jpg',
    },
    {
      name: 'UStart Coworking',
      address: 'вул. Шевченка, 111А',
      price: 'Від 150 грн',
      category: 'Коворкінг',
      imageUrl: 'pl13.png',
    },
    {
      name: 'Їдальня УКУ',
      address: 'вул. Козельницька, 2А',
      price: 'від 15 грн',
      category: 'Бюджетне харчування',
      imageUrl: 'pl5.jpg',
    },
    {
      name: 'Добрий друг',
      address: 'вул. Староєврейська, 12 / вул. Січових Стрільців, 3',
      price: 'від 30 грн',
      category: 'Кафе',
      imageUrl: 'pl6.jpg',
    },
    {
      name: 'Young Dovzhenko',
      address: 'проспект Червоної Калини, 81 (2 поверх)',
      price: 'Безкоштовно',
      category: 'Коворкінг',
      imageUrl: 'pl14.jpg',
    },
    {
      name: 'Італійський дворик',
      address: 'пл. Ринок, 6',
      price: '20 грн',
      category: 'Культурні місця',
      imageUrl: 'pl15.jpg',
    },
    {
      name: 'Пиріжкова',
      address: '  вул. Словацького, 4',
      price: 'від 20 грн',
      category: 'Бюджетне харчування',
      imageUrl: 'pl7.jpg',
    },
    {
      name: 'Твій ланч',
      address: 'вул. Менцинського, 3',
      price: 'від 170 грн/1 комплексний обід',
      category: 'Кафе',
      imageUrl: 'p1.jpg',
    },
    {
      name: 'Perfetto',
      address: 'вул. Сар’яна, 6',
      price: 'від 95 грн',
      category: 'Кафе',
      imageUrl: 'pl17.jpg',
    },
    {
      name: 'Палац Потоцьких',
      address: ' М. Коперника, 15',
      price: 'від 80 грн',
      category: 'Культурні місця',
      imageUrl: 'pl16.jpg',
    },
    {
      name: 'Будинок вчених',
      address: 'Листопадового Чину, 6',
      price: '50 грн',
      category: 'Культурні місця',
      imageUrl: 'p2.jpg',
    },
    {
      name: 'Коворкінг Простір',
      address: 'вул. Незалежності, 15',
      price: '200 грн/день',
      category: 'Коворкінг',
      imageUrl: 'place1.jpeg',
    },
    {
      name: 'Затишне Кафе',
      address: 'вул. Лесі Українки, 3',
      price: 'від 50 грн',
      category: 'Кафе',
      imageUrl: 'place2.jpg',
    },
    {
      name: 'Центральна бібліотека',
      address: 'пл. Ринок, 10',
      price: 'Безкоштовно',
      category: 'Бібліотека',
      imageUrl: 'place1.jpeg',
    },
    {
      name: 'Центральна бібліотека',
      address: 'пл. Ринок, 10',
      price: 'Безкоштовно',
      category: 'Бібліотека',
      imageUrl: 'place2.jpg',
    },
    {
      name: 'Студентський парк',
      address: 'академіка Сахарова, 7',
      price: 'Безкоштовно',
      category: 'Культурні місця',
      imageUrl: 'p4.jpg',
    },
    {
      name: 'IQ Pizza',
      address: 'вул. Княги Ольги, 69а | вул. Пасічна, 55',
      price: 'від 150 грн',
      category: 'Кафе',
      imageUrl: 'p5.jpg',
    },
    {
      name: 'Коворкінг Простір',
      address: 'вул. Незалежності, 15',
      price: '200 грн/день',
      category: 'Коворкінг',
      imageUrl: 'place1.jpeg',
    },
    {
      name: 'Sette Coffee',
      address: 'вул. Степана Бандери, 7',
      price: 'від 30 грн',
      category: 'Кафе',
      imageUrl: 'p3.jpg',
    },
    {
      name: 'Оглядова вежа на Львівській ратуші',
      address: 'пл. Ринок, 1',
      price: '100 грн',
      category: 'Культурні місця',
      imageUrl: 'pl11.jpg',
    }
  ];

  const itemsPerPage = 9;
const [currentPage, setCurrentPage] = useState(1);
const totalPages = Math.ceil(places.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentPlaces = places.slice(startIndex, endIndex);
 
  return (
    <div
    className="min-h-screen bg-top bg-cover bg-no-repeat"
    style={{ 
      backgroundImage: "url('/fon1.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
     }}
  >
  <div className="container mx-auto px-4 py-8 font-sans" >
      <header className="flex justify-between items-center py-4">
        <img src="/logo1.png" alt="Logotype" className="h-10 w-auto rotate-27" />
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-900 font-semibold hover:text-blue-500">Головна</a></li>
            <li><a href="#" className="text-gray-900 font-semibold hover:text-blue-500">Локації</a></li>
            {/* Додамо інші посилання пізніше */}
          </ul>
         
        </nav>
      </header>
      
      
      <main className="mt-12">
        <h1 className="text-3xl font-bold text-center text-neutral-800 mb-5">Місця які варто відвідати!</h1>

        <div className="h-px bg-white my-4" />
        

        <div className="mb-6 overflow-x-auto pb-2">
          <div className="flex space-x-4">
            <button className="bg-gray-100 text-gray-700 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none hover:bg-gray-200">Коворкінги</button>
            <button className="bg-gray-100 text-gray-700 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none hover:bg-gray-200">Бібліотеки</button>
            <button className="bg-gray-100 text-gray-700 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none hover:bg-gray-200">Бюджетне харчування</button>
            <button className="bg-gray-100 text-gray-700 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none hover:bg-gray-200">Кафе</button>
            <button className="bg-gray-100 text-gray-700 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none hover:bg-gray-200">Розваги</button>
            <button className="bg-gray-100 text-gray-700 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none hover:bg-gray-200">Спорт</button>
            <button className="bg-gray-100 text-gray-700 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none hover:bg-gray-200">Культурні місця</button>
          </div>
        </div>

        <div className="h-px bg-white my-4" />

        <AnimatePresence mode="wait">
  <motion.div
    key={currentPage} // ключ для анімації
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



