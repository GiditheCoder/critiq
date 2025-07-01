import React from 'react';
import critiqHome from '../images/critiq-homepage.jpg';
import { useNavigate } from 'react-router-dom'
import topChart from '../images/topchart.png';
import musicNote from '../images/musicnote.png';
import notificationIcon from '../images/notificationIcon.png';
import playIcon from '../images/playIcon.png';
import searchIcon from '../images/searchIcon.png';
import swipeIcon from '../images/swipeicon.png';




const Hero = () => {

  const navigate = useNavigate();

  const handleSignRoute = ()=>{
      navigate('/signup')
  }


  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.2)), url(${critiqHome})`,
      }}
      onClick={handleSignRoute}
    >
      <div className="px-36 text-white ">
        <h1 className=" w-full text-[96px] font-bold mb-4 ">
          Power in your hands
        </h1>
        <p className="text-[32px]  mb-6 font-light">
          You decide the spotlight. <br />
          Stream. Vote
        </p>

        {/* button */}
        <button className="bg-[#A259FF] hover:bg-[#E2CCFF] text-white  text-[20px]  hover:text-[#A259FF] font-semibold py-3 px-18 rounded-full transition duration-300">
          Get Started
        </button>

      </div>
    </div>
  );
};

export default Hero;

