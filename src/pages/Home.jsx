import React, { useEffect, useRef, useState } from "react";

import styles from "./home.module.scss";
import { Sidebar, Footer, MainContiner } from "../component";
import { SongData } from "../data.js";

const Home = () => {
  // let songIndex = 0;
  const songRef = useRef(null);
  const [isToggled, setIsToggled] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  let PlaySong = SongData[songIndex];
  const totalSong = SongData.length;

  // let songWishlist = [];

  const getsongWishlist = (id) => {
    PlaySong.isInWishlist = !PlaySong.isInWishlist;
    console.log(PlaySong.isInWishlist);
  };

  const getSongIndex = (e) => {
    console.log(SongData.length);
    if (e > 0 && e <= totalSong) {
      setSongIndex(e - 1);
      if (isToggled) {
        songRef.current.pause();
        setIsToggled(false);
      }
    } else if(e < 0){
      e = totalSong;
      setSongIndex(e - 1);
    } else if(e > totalSong){
      e = 0;
      setSongIndex(0);
    }
  };

  useEffect(() => {}, [isToggled]);

  const handleClick = () => {
    // console.log(SongData[0].url);
    // const song = SongData[0].url;
    const song = songRef.current;
    // console.log('home toggle');
    // console.log(isToggled);
    setIsToggled(!isToggled);
    if (!isToggled) {
      song.play();
    } else {
      song.pause();
    }
  };

  const volumeControl = (e) => {
    console.log(e.target.value);
    let songV = e.target.value;
    songRef.current.volume = songV;
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.container}>
        <Sidebar />
        <MainContiner
          getsongWishlist={getsongWishlist}
          songIndex={songIndex}
          getSongIndex={getSongIndex}
          PlaySong={PlaySong}
          handleClick={handleClick}
          isToggled={isToggled}
          songRef={songRef}
        />
      </div>
      <div className={styles.footerMainContainer}>
        <Footer
          volumeControl={volumeControl}
          getsongWishlist={getsongWishlist}
          songIndex={songIndex}
          getSongIndex={getSongIndex}
          PlaySong={PlaySong}
          handleClick={handleClick}
          isToggled={isToggled}
          songRef={songRef}
        />
      </div>
    </div>
  );
};

export default Home;
