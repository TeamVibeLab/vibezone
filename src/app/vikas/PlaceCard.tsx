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
    <div className="w-full max-w-xs rounded-xl overflow-hidden shadow-md">
      <img src={place.imageUrl} alt={place.name} className="w-full h-72 object-cover" />
      <div className="bg-violet-100 p-4 text-sm">
        <h4 className="text-gray-800 font-semibold text-lg">{place.name}</h4>
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
