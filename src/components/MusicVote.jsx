 import React from 'react';
import playIcon from '../images/playIcon.png';
import pauseIcon from '../images/pauseIcon.png';
import loveIcon from '../images/loveIcon.png';
import bookmarkIcon from '../images/bookmarkIcon.png';
import shareIcon from '../images/shareIcon.png';
import voteIcon from '../images/voteIcon.png';
import simiImg from '../images/simiMusic.png';
import asakeMusic from '../images/asakeMusic.png';
import brentMusicIcon from '../images/brentMusic.png';
import tiwaImg from '../images/tiwamusic.png';
import zaImg from '../images/zaMusic.png';
import topVote from '../images/topVoteIcon.png';
import { useNavigate } from 'react-router-dom';

const songs = [
  {
    votes: 46,
    img: simiImg,
    title: 'Lovin',
    duration: '2:55',
    artist: 'Simi',
  },
  {
    votes: 4,
    img: zaImg,
    title: 'ZA',
    duration: '2:58',
    artist: 'AEO',
  },
  {
    votes: 1,
    img: brentMusicIcon,
    title: 'Piece of my Heart',
    duration: '3:07',
    artist: 'Wizkid ft Brent Faiyaz',
  },
  {
    votes: 17,
    img: asakeMusic,
    title: 'Lonely at the Top',
    duration: '2:25',
    artist: 'Asake',
  },
  {
    votes: 9,
    img: tiwaImg,
    title: 'Ife wa Gbona',
    duration: '3:11',
    artist: 'Tiwa Savage ft Leo Wonder',
  },
];


const MusicVote = () => {

  const navigate = useNavigate()

  const handleRoute = () =>{
     navigate('/musicvotescreen');
  }

  return (
    <div className='bg-[#0B0A1F] p-6'>
      <h2 className="text-white text-[32px] font-bold mb-6 px-4">Music Vote</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-white table-auto">
          <thead>
            <tr className="text-left text-sm text-gray-400 border-b border-[#1E1C3A]">
              <th className="px-4 py-2"> </th>
              <th className="py-2">
                <img src={topVote} alt="Top Vote" className="w-4 h-4" />
              </th>
              <th className="py-2">Title</th>
              <th className="py-2">Duration</th>
              <th className="py-2">Artist</th>
              <th className="py-2">Vote/Share</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={index} className="border-b border-[#1E1C3A] hover:bg-[#1C1B3A] transition duration-200">
                {/* Song Image */}
                <td className="px-4 py-4">
                  <img
                    src={song.img}
                    alt={song.title}
                    className="w-15 h-15  object-cover"
                  />
                </td>

                {/* Votes only (no icon here) */}
                <td className="py-4 text-sm">
                  <span>{song.votes < 10 ? `0${song.votes}` : song.votes}</span>
                </td>

                {/* Title with play icon */}
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <img src={playIcon} alt="Play" className="w-4 h-4" />
                    <span>{song.title}</span>
                  </div>
                </td>

                {/* Duration */}
                <td className="py-4 text-sm">{song.duration}</td>

                {/* Artist */}
                <td className="py-4 text-sm">{song.artist}</td>

                {/* Action Icons */}
                <td className="py-4 text-sm">
                  <div className="flex items-center gap-4">
                    <img src={voteIcon} alt="Vote" className="w-4 h-4 cursor-pointer" />
                    <img src={shareIcon} alt="Share" className="w-4 h-4 cursor-pointer" />
                    <img src={loveIcon} alt="Love" className="w-4 h-4 cursor-pointer" />
                    <img src={bookmarkIcon} alt="Bookmark" className="w-4 h-4 cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-center mt-6">
          <button className="text-[#A259FF] text-sm hover:underline" onClick={handleRoute}>See More</button>
        </div>
      </div>
    </div>
  );
};

export default MusicVote;
