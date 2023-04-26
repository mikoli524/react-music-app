import React from 'react'
import { GetNameAndIntro } from '../../../Hooks/GetNameAndIntro'
import { useNavigate } from 'react-router-dom';

import './css/PlayListCard.css'

function PlayListCard({rawName, coverImgUrl, id}) {
  const {name, intro} = GetNameAndIntro(rawName);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("list id is " + id);
    navigate(`/playlist/${id}`);
  };

  return (
    <div className='playlist-card' onClick={handleClick}>
      <div className='playlist-content'>
        <div className='playlist-cover'>
          <img src={coverImgUrl} alt='name' />
        </div>
        <div className='playlist-text'>
          <div className='playlist-name'>
            <span>{name}</span>
          </div>
          <div className='playlist-intro'>
            <span>{intro}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayListCard
