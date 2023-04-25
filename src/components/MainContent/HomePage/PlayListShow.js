import React from 'react'
import PlayListCard from './PlayListCard';
import GetPlayLists from '../../../Hooks/playlist/GetPlayLists';

import './css/PlayListShow.css'

function PlayListShow({ title }) {
  const lists = GetPlayLists(title);

  return (
    <section className='playlist-show'>
      <div className='playlist-title'>
        <h2>{!title && <span>歌单分类</span>}{title && <span>{title}</span>}</h2>
      </div>
      <div className='playlist-row'>
        {lists.map((list) => (
          <PlayListCard rawName={list.name} coverImgUrl={list.coverImgUrl} key={list.id} />
        ))}
      </div>
    </section>
  );
}

export default PlayListShow