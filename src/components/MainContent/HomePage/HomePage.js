import PlayListShow from './PlayListShow';
import GetPlayListTags from '../../../Hooks/playlist/GetPlayListTags';

import './css/HomePage.css'

function HomePage() {
  const tags = GetPlayListTags();

  return (
    <div className='home-page'>
      {tags.map((tag) => (
        <PlayListShow title={tag.name} key={tag.id} />
      ))}
        <div className='homepage-footer'></div>
    </div>
  );
}

export default HomePage
