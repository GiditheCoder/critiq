import React from 'react';
import asa2Icon from '../images/asa2Icon.png';

const VoteSection = () => {
  return (
    <div className="bg-[#0b0b12] text-white p-6 rounded-md  ">
      <h2 className="text-[32px] font-bold">Ongoing Vote</h2>
      <h1 className="text-[32px] font-bold mt-1">Top Choice Music Awards</h1>
      <p className="text-[20px] text-white mt-2">
        Vote your favourite <span className="text-white font-medium">R&B music choice</span>. Make your fav win.
      </p>

      <div className="mt-4 relative rounded-md overflow-hidden">
        <img
          src={asa2Icon}
          alt="Artist Performing"
          className="w-full h-full object-cover"
        />
        <button className="absolute inset-x-0 bottom-64 mx-auto bg-[#A259FF] text-4xl text-white w-2xl font-bold px-24 py-6 rounded-full  text-center">
          Vote
        </button>
      </div>
    </div>
  );
};

export default VoteSection;
