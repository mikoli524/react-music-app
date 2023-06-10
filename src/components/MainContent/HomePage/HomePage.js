import './css/HomePage.css'
import PlayListShow from "./PlayListShow";
import GetPlayListTags from "../../../Hooks/playlist/GetPlayListTags";
import React from "react";

function HomePage() {
  const tags = GetPlayListTags();

  return (
    <div className='home-page'>
        {tags.map((tag) => (
            <PlayListShow title={tag.name} key={tag.id} />))}
    </div>
  );
}

export default HomePage
