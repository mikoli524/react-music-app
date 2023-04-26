import React from 'react'
import { useParams } from 'react-router-dom'

const PlayListPage = () => {
  const { id } = useParams();
  // const cover;
  // const title;
  // const intro;
  // const num;

  return (
    <div className='playlist-page'>
      {/* <div className='playlist-content'>
        <img src={cover} alt={title} className='playlist-cover' />
        <div className='content-text'>
          <div className='title'>{title}</div>
          <div className='intro'>{intro}</div>
          <div className='creator'>
            <img src='' alt='创建者头像' />
            <span className='songs-num'>{num}首歌曲</span>
          </div>
        </div>
      </div>
      <div className='list-footer'></div>
      <div className='songs'>

      </div> */}
      这是歌单页面{id}
    </div>
  )
}

export default PlayListPage
