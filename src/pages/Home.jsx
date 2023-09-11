import React, { useEffect, useRef, useState } from "react";

import styles from './home.module.scss';
import { Sidebar, Footer, MainContiner } from '../component';
import { SongData } from '../data.js';


const Home = () =>{
 
    // const songIndex = useRef(0); 

    // let songIndex = 0;
    const songRef = useRef(null); 
    const [isToggled, setIsToggled] = useState(false);
    const [songIndex, setSongIndex] = useState(0);
    let PlaySong = SongData[songIndex];

    let songWishlist = [];

    const getsongWishlist = (id) =>{
        PlaySong.isInWishlist = !PlaySong.isInWishlist;
        console.log(PlaySong.isInWishlist);
    }
    
    // Function to toggle the wishlist status
    // const getsongWishlist = (songId) => {
    //     const updatedSongs = SongData.map((song) =>
    //     song.id === songId ? { ...song, isInWishlist: !song.isInWishlist } : song
    //     );
    //     return updatedSongs;
    // };

  
    const getSongIndex = (e) =>{
        console.log(e)
        setSongIndex(e-1);
        // setIsToggled(true);
        if (isToggled) {
            songRef.current.pause();
            setIsToggled(true);
        }
    }

    useEffect(() => {
       
      }, [isToggled]);
    
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
      }

    return (
            <div className={styles.homeContainer}>
                <div className={styles.container}>
                    <Sidebar />
                    <MainContiner getsongWishlist={getsongWishlist} songIndex={songIndex}  getSongIndex={getSongIndex} PlaySong={PlaySong} handleClick={handleClick} isToggled={isToggled}  songRef={songRef}/> 
                </div>
                <div className={styles.footerMainContainer} >  
                    <Footer getsongWishlist={getsongWishlist} songIndex={songIndex}  getSongIndex={getSongIndex} PlaySong={PlaySong} handleClick={handleClick} isToggled={isToggled} songRef={songRef}/>
                </div>
            </div>
    ) ;
}

export default Home