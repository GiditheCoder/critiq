import React from 'react'
import davidoImg from '../images/davidoImg.png'

const TopVote = () => {
  return (
    <div className="bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Top Vote</h1>
        <div className="flex items-center gap-2">
          <span className="text-white">Afrobeats</span>
          <svg 
            className="w-4 h-4 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </div>
      </div>

      {/* Featured Artist Card */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Background Image */}
        <div 
          className="h-128 w-full bg-cover bg-center relative"
          style={{ 
            backgroundImage: `url(${davidoImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              {/* Artist Name - Large Bold Text */}
              <h2 className="text-6xl md:text-8xl font-black text-white mb-2 tracking-wider drop-shadow-2xl">
                WITH YOU
              </h2>
              
              {/* Song Info */}
              <p className="text-xl md:text-2xl text-white font-semibold drop-shadow-lg">
                DAVIDO EMARLEY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopVote