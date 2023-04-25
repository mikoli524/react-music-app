import React from 'react'
import { GetNameAndIntro } from '../../../Hooks/GetNameAndIntro'

import './css/PlayListCard.css'

function PlayListCard({rawName, coverImgUrl, id}) {
  const {name, intro} = GetNameAndIntro(rawName);

  return (
    <div className='playlist-card'>
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
