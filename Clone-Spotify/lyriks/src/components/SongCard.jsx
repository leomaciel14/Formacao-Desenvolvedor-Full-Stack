import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  const handlePauseClick = () => {
    dispatch(playPause(false));
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
    if (audioRef.current) {
      audioRef.current.src = song.attributes.previews[0].url;
      audioRef.current.play();
    }
  };

  const getImageUrl = (baseUrl, width, height) => {
    return baseUrl.replace('{w}', width).replace('{h}', height);
  };

  const imageUrl = getImageUrl(song.attributes.artwork.url, 500, 500);

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={imageUrl} className="w-full h-full rounded-lg" />
      </div>
      
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white truncate'>
          <Link to={`/songs/${song?.key}`}>
            {song.attributes.name}
          </Link>
        </p>
        <p className='text-sm truncate text-gray-300 mt-1'>
          <Link to={song.artists ? `/artists/${song?.artist[0]?.adamid}` : '/top-artists'}>
            {song.attributes.artistName}
          </Link>
        </p>
      </div>

      {/* Elemento de áudio oculto */}
      <audio ref={audioRef} style={{ display: 'none' }} />
    </div>
  );
};

export default SongCard;
