import React from "react";

import styles from "../maincontainer/player.module.scss";
import SongImage from "../../assets/images/Image.jpg";
import HeartIcon from "../../assets/images/Nav Bar/Icon/Heart.svg";
import Wave from '../../assets/images/Rectangle 81.png';

const Player = () => {
  return (
    <div className={styles.playercontainer}>
      <div className={styles.songimage}>
        <img src={SongImage} alt="" />
      </div>
      <div className={styles.songdetails}>
        <div className={styles.songcontainer}>
          <div className={styles.songname}>
            <h5>song name</h5>
          </div>
          <div className={styles.playbtn}>
            <img src={HeartIcon} alt="" />
            <button>Play</button>
          </div>
        </div>
        <div className={styles.songmetadata}>
          <p>Artist Name</p>
          <p>Playlist Name</p>
        </div>
        <div className={styles.songwave}>
          <img src={Wave} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Player;
