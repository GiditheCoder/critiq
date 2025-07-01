import React, { useRef } from 'react';
import faveImg from '../images/fave.png';
import folaImg from '../images/fola.png';
import ruger from '../images/ruger.png';
import asaIcon from '../images/asa.png';
import chikeImg from '../images/chike.png';
import olamideIcon from '../images/olamide.png';
import backIcon from '../images/backIcon.png';
import forwardIcon from '../images/forwadIcon.png';

const FeaturedArtiste = () => {
 
  const artists = [
    { name: 'Fave', image: faveImg },
    { name: 'Fola', image: folaImg },
    { name: 'Ruger', image: ruger },
    { name: 'Asa', image: asaIcon },
    { name: 'Chike', image: chikeImg },
    { name: 'Olamide', image: olamideIcon },
  ];


  return (
    <div className=" bg-[#0F0F1A] py-6 px-4 w-full">

      <h2 className="text-white text-[32px] font-bold mb-4 px-10">Featured Artists</h2>

      <div className="relative flex items-center">
        <div
     
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth ml-10 mr-10"
        >
          {artists.map((artist, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-[250px] h-[250px]  object-cover"
              />
              <p className="text-white mt-2 text-[24px] text-left font-bold">{artist.name}</p>
            </div>
          ))}
        </div>

        


      </div>
    </div>
  );
};

export default FeaturedArtiste;
