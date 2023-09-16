import React, { useEffect, useRef, useState } from "react";

import styles from "./home.module.scss";
import { Sidebar, Footer, MainContiner } from "../component";
import { SongData } from "../data.js";


const Home = () => {
  // let songIndex = 0;
  const songRef = useRef(null);
  const [isToggled, setIsToggled] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const [songs, setSongs] = useState(SongData);
  const [queryvalue, setQueryValue] = useState("");

  let PlaySong = SongData[songIndex];

  const totalSong = SongData.length;

  const getqueryvalue = (e) => {
    const query = e.target.value;
    // e.preventDefault();
    setQueryValue(query);
    console.log(query);

    const resultSong = SongData.filter((song) =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );

    console.log(resultSong.length);
    // if (resultSong.length !== 0) {
    setSongs(resultSong);
    console.log("song are there");
    // } else {
    console.log("song are 0");
    // setSongIndex(0);
    // }
    // setResultSong((songs) => {})
  };

  const resetsearch = () => {
    console.log("reset pressed");
    setQueryValue("");
    // const resultSong = songs.filter((song)=> song.title.toLowerCase().includes(''))
    setSongs(SongData);
  };

  const getsongWishlist = (songid) => {
    const updatedSongs = [...songs]; // Clone the songs array
    // console.log(updatedSongs);
    const songToUpdate = updatedSongs.find((song) => song.id === songid);
    // console.log(songToUpdate);
    if (songToUpdate) {
      songToUpdate.isInWishlist = !songToUpdate.isInWishlist;
      //  console.log();
      console.log(updatedSongs);
      setSongs(updatedSongs); // Update the state with the updated songs array
    }
  };

  const getSongIndex = (e) => {
    console.log(SongData.length);
    if (e > 0 && e <= totalSong) {
      setSongIndex(e - 1);
      if (isToggled) {
        songRef.current.pause();
        setIsToggled(false);
      }
    } else if (e < 0) {
      e = totalSong;
      setSongIndex(e - 1);
    } else if (e > totalSong) {
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
          resetsearch={resetsearch}
          queryvalue={queryvalue}
          getqueryvalue={getqueryvalue}
          getsongWishlist={getsongWishlist}
          songIndex={songIndex}
          getSongIndex={getSongIndex}
          PlaySong={PlaySong}
          handleClick={handleClick}
          isToggled={isToggled}
          songRef={songRef}
          songs={songs}
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
