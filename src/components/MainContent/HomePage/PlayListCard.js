import React from 'react'
import './css/PlayListCard.css'

function PlayListCard() {
  return (
    <div className='playlist-card'>
      <div className='playlist-cover'>
        <h1>这里放专辑封面</h1>
      </div>
      <div className='playlist-text'>
        <div className='playlist-name'>
          歌单名称
        </div>
        <div className='playlist-intro'>
          歌单介绍
        </div>
      </div>
    </div>
  )
}

export default PlayListCard