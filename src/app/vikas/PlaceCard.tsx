import React from 'react';

export type Place = {
  name: string;
  address: string;
  price: string;
  category: string;
  imageUrl: string;
  link: string;
};

interface PlaceCardProps {
  place: Place;
}

export default function PlaceCard({ place }: PlaceCardProps) {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-md">
      <img src={place.imageUrl} alt={place.name} className="w-full h-100 object-cover" />
      <div className="bg-violet-100 p-8 text-l">
        <h2 className="text-gray-800 font-semibold text-l">{place.name}</h2>
        <p className="text-gray-600">{place.address}</p>
        <p className="text-gray-800">{place.price}</p>
        <p className="text-gray-500 italic">{place.category}</p>
        <a
  href={place.link}
  className="mt-4 text-blue-500 underline hover:text-blue-700"
>
  Переглянути →
</a>

      </div>
    </div>
  )
}
