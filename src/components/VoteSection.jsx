import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import asa2Icon from '../images/asa2Icon.png';

const VoteSection = () => {
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
    <div className="bg-[#0b0b12] text-white p-6 rounded-md">
      {loading ? (
        <>
          <Skeleton height={40} width={300} baseColor="#A259FF" highlightColor="#E2CCFF" style={{ opacity: 0.2 }} />
          <Skeleton height={40} width={400} baseColor="#A259FF" highlightColor="#E2CCFF" className="mt-2" style={{ opacity: 0.2 }} />
          <Skeleton height={24} width={500} baseColor="#A259FF" highlightColor="#E2CCFF" className="mt-4" style={{ opacity: 0.2 }} />
          <Skeleton height={400} width={'100%'} baseColor="#A259FF" highlightColor="#E2CCFF" className="mt-6" style={{ opacity: 0.2 }} />
        </>
      ) : (
        <>
          <h2 className={`text-[32px] font-bold transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            Ongoing Vote
          </h2>
          <h1 className={`text-[32px] font-bold mt-1 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            Top Choice Music Awards
          </h1>
          <p className={`text-[20px] mt-2 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            Vote your favourite <span className="font-medium">R&B music choice</span>. Make your fav win.
          </p>

          <div className="mt-4 relative rounded-md overflow-hidden transition-opacity duration-700" style={{ opacity: loaded ? 1 : 0 }}>
            <img
              src={asa2Icon}
              alt="Artist Performing"
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-x-0 bottom-64 mx-auto bg-[#A259FF] text-4xl text-white w-2xl font-bold px-24 py-6 rounded-full text-center">
              Vote
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default VoteSection;
