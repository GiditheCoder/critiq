import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white bg-[#0b0b12] p-6 rounded-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        {loading ? (
          <>
            <Skeleton height={30} width={120} baseColor="#A259FF" highlightColor="#E2CCFF" style={{ opacity: 0.2 }} />
            <Skeleton height={24} width={100} baseColor="#A259FF" highlightColor="#E2CCFF" style={{ opacity: 0.2 }} />
          </>
        ) : (
          <>
            <h2 className={`text-[32px] font-bold transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>Genre</h2>
            <button className={`text-[24px] text-gray-300 hover:underline transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              See More
            </button>
          </>
        )}
      </div>

      {/* Genre Grid */}
      <div className="grid grid-cols-3 gap-4">
        {loading
          ? Array(6)
              .fill()
              .map((_, i) => (
                <Skeleton
                  key={i}
                  height={160}
                  baseColor="#A259FF"
                  highlightColor="#E2CCFF"
                  style={{ borderRadius: '0.5rem', opacity: 0.2 }}
                />
              ))
          : genres.map((genre, index) => (
              <div
                key={index}
                className={`relative rounded-md overflow-hidden h-40 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
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
