import React from "react";

import styles from "../maincontainer/maincontainer.module.scss";
import SearchBar from "../maincontainer/SearchBar";
import Player from "../maincontainer/Player";
import SongList from "../maincontainer/SongList";
// import { SongData } from '../../data.js';

const MainContiner = ({
  PlaySong,
  isToggled,
  handleClick,
  songIndex,
  getSongIndex,
}) => {
  // let PlaySong = SongData[0];
  // console.log(PlaySong);
  return (
    <div className={styles.maincontainer}>
      <SearchBar />
      <Player
        PlaySong={PlaySong}
        handleClick={handleClick}
        isToggled={isToggled}
      />
      <SongList songIndex={songIndex} getSongIndex={getSongIndex} />
    </div>
  );
};

export default MainContiner;
