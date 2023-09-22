import React from 'react';
import SongList from './SongList';


const Like = ({songs, getSongIndex ,songIndex}) => {
  let wishsong = true;
  return (
    <div>
      <SongList songs={songs} getSongIndex={getSongIndex} songIndex={songIndex} wishsong={wishsong}/>
    </div>
  );
}

export default Like;