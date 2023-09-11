import React, { useEffect, useRef, useState } from "react";

import styles from "../maincontainer/player.module.scss";
// import SongImage from "../../assets/images/Image.jpg";
import HeartIcon from "../../assets/images/Nav Bar/Icon/Heart.svg";
import HeartFill from "../../assets/images/control Icon/Heart_fill.svg";
import Wave from "../../assets/images/Rectangle 81.png";

const Player = ({ PlaySong, handleClick, isToggled, songRef, getsongWishlist}) => {
  let { id, title, artist, artwork, url, isInWishlist } = PlaySong;
  // const [isToggled, setIsToggled] = useState(false);
  // const songRef = useRef(null); 

  // console.log(isToggled);

  // const handleClick = () => {
    
  //   const song = songRef.current;
  //   // console.log(isToggled);
    
  //   setIsToggled(!isToggled);

  //   // console.log(isToggled);
  //   if (!isToggled) {
  //     // console.log(isToggled);
  //     song.play();
  //   } else {
  //     song.pause();
  //   }
  // };
  // console.log(isToggled);
  return (
    <div className={styles.playercontainer}>
      <div className={styles.songimage}>
        <img src={artwork} alt="" />
      </div>
      <div className={styles.songdetails}>
        <div className={styles.songcontainer}>
          <div className={styles.songname}>
            <h5>{title}</h5>
          </div>
          <div className={styles.playbtn}>
            <img src={isInWishlist ? HeartFill : HeartIcon} alt="" onClick={()=>getsongWishlist(id)} />
            <button id="playingsong" onClick={handleClick}>
              {isToggled ? "Stop" : "Play"}
            </button>
            <audio id="songLink" ref={songRef} src={url} preload="auto" />
          </div>
        </div>
        <div className={styles.songmetadata}>
          <p>{artist}</p>
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
