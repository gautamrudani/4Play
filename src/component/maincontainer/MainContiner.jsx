import React from "react";

import styles from "../maincontainer/maincontainer.module.scss";
import SearchBar from "../maincontainer/SearchBar";
import Player from "../maincontainer/Player";
import SongList from "../maincontainer/SongList";
import { Route, Routes } from "react-router-dom";
import Like from "./Like";

const MainContiner = ({
  PlaySong,
  isToggled,
  handleClick,
  songIndex,
  getSongIndex,
  getsongWishlist,
  queryvalue,
  getqueryvalue,
  songs,
  resetsearch
}) => {
  // let PlaySong = SongData[0];
  // console.log(PlaySong);
  return (
    <div className={styles.maincontainer}>
      <SearchBar  queryvalue={queryvalue}
          getqueryvalue={getqueryvalue} resetsearch={resetsearch} />
      <Player
        PlaySong={PlaySong}
        handleClick={handleClick}
        isToggled={isToggled}
        getsongWishlist={getsongWishlist}
      />
       <Routes>
          <Route
            path="/"
            element={
              <SongList songIndex={songIndex} getSongIndex={getSongIndex}  songs={songs}/>
            }
          />
          <Route path="/like" element={<Like  songs={songs} songIndex={songIndex} getSongIndex={getSongIndex}   />} />
        </Routes>
    </div>
  );
};

export default MainContiner;
