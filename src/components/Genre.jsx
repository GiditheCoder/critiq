import React from 'react';
import randbIcon from '../images/randbIcon.png';
import reggaeIcon from '../images/reggaeIcon.png';
import popIcon from '../images/popIcon.png';
import classicalIcon from '../images/classicalIcon.png';
import afrobeatIcon from '../images/afrobeatIcon.png';
import rockIcon from '../images/rockIcon.png';

const genres = [
  { name: 'Rock', image: rockIcon },
  { name: 'R&B', image: randbIcon },
  { name: 'Pop', image: popIcon },
  { name: 'Reggae', image: reggaeIcon },
  { name: 'Classical', image: classicalIcon },
  { name: 'Afrobeat', image: afrobeatIcon },
];

const Genre = () => {
  return (
    <div className="text-white bg-[#0b0b12] p-6 rounded-md  mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[32px] font-bold">Genre</h2>
        <button className="text-[24px] text-gray-300 hover:underline">See More</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {genres.map((genre, index) => (
          <div
            key={index}
            className="relative rounded-md overflow-hidden h-40"
          >
            <img
              src={genre.image}
              alt={genre.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-lg font-bold">{genre.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genre;
