import React from 'react';
import homeIcon from '../images/homeIcon.png';
import profileIcon from '../images/profileIcon.png';
import loveIcon from '../images/loveIcon.png';
import headsetIcon from '../images/headsetIcon.png';
import artisteIcon from '../images/artisteIcon.png';
import downloadIcon from '../images/downloadIcon.png';
import topVote from '../images/topVoteIcon.png';
import musicIcon from '../images/musicIcon.png';
import settingsIcon from '../images/settingsIcon.png';
import voteIcon from '../images/voteIcon.png';

const Modal = ({ className = '' }) => {
  return (
    <div className={`h-screen w-20 bg-[#151530] flex flex-col justify-between py-9 items-center fixed top-18 left-0 z-50 ${className}`}>
      <div className="flex flex-col space-y-4">
        <div className="w-22 h-12 flex items-center justify-center rounded-md hover:bg-[#2B2B52] transition duration-200 cursor-pointer">
          <img src={homeIcon} alt="Home" className="w-6 h-6" />
        </div>
        <div className="w-22 h-12 flex items-center justify-center rounded-md hover:bg-[#2B2B52] transition duration-200 cursor-pointer">
          <img src={profileIcon} alt="Profile" className="w-6 h-6" />
        </div>
        <div className="w-22 h-12 flex items-center justify-center rounded-md hover:bg-[#2B2B52] transition duration-200 cursor-pointer">
          <img src={loveIcon} alt="Love" className="w-6 h-6" />
        </div>
        <div className="w-22 h-12 flex items-center justify-center rounded-md hover:bg-[#2B2B52] transition duration-200 cursor-pointer">
          <img src={headsetIcon} alt="Headset" className="w-6 h-6" />
        </div>
        <div className="w-22 h-12 flex items-center justify-center rounded-md hover:bg-[#2B2B52] transition duration-200 cursor-pointer">
          <img src={artisteIcon} alt="Artiste" className="w-6 h-6" />
        </div>
        <div className="w-22 h-12 flex items-center justify-center rounded-md hover:bg-[#2B2B52] transition duration-200 cursor-pointer">
          <img src={downloadIcon} alt="Download" className="w-6 h-6" />
        </div>
        <div className="w-22 h-12 flex items-center justify-center rounded-md hover:bg-[#2B2B52] transition duration-200 cursor-pointer">
          <img src={topVote} alt="Top Vote" className="w-6 h-6" />
        </div>
        <div className="w-22 h-12 flex items-center justify-center rounded-md hover:bg-[#2B2B52] transition duration-200 cursor-pointer">
          <img src={voteIcon} alt="Vote" className="w-6 h-6" />
        </div>
        <div className="w-22 h-12 flex items-center justify-center rounded-md hover:bg-[#2B2B52] transition duration-200 cursor-pointer">
          <img src={musicIcon} alt="Music" className="w-6 h-6" />
        </div>
        <div className="w-22 h-12 flex items-center justify-center rounded-md hover:bg-[#2B2B52] transition duration-200 cursor-pointer">
          <img src={settingsIcon} alt="Settings" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Modal;


// push the current changes to github
// make it responsive