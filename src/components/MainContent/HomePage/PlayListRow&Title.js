import React from 'react'
import PlayListCard from './PlayListCard';

function PlayListShow() {
  return (
    <section className='playlist-show'>
        <div className='playlist-type'>
            <h2>猜你喜欢</h2>
        </div>

        <div className='playlist-row'>
          <PlayListCard />
          <PlayListCard />
          <PlayListCard />
          <PlayListCard />
        </div>
    </section>
  );
}

export default PlayListShow