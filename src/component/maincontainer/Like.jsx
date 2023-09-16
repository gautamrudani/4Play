import React from 'react';
import SongList from './SongList';


const Like = ({songs}) => {
  let wishsong = true;
  return (
    <div>
      <SongList songs={songs}  wishsong={wishsong}/>
    </div>
  );
}

export default Like;