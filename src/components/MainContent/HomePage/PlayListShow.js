import React from 'react'
import PlayListCard from './PlayListCard';

import './css/PlayListShow.css'

function PlayListShow() {
  return (
    <section className='playlist-show'>
        <div className='playlist-title'>
            <h2>猜你喜欢</h2>
        </div>

        <div className='playlist-row'>
          <PlayListCard />
          <PlayListCard />
          <PlayListCard />
          <PlayListCard />
          <PlayListCard />
          <PlayListCard />
          <PlayListCard />
          <PlayListCard />
          <PlayListCard />
        </div>
    </section>
  );
}

export default PlayListShow