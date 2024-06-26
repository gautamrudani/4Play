import React from 'react';

import styles from  '../footer/playersongdetails.module.scss';
import Image from '../../assets/images/Image.jpg';
import Heart from '../../assets/images/Nav Bar/Icon/Heart.svg';
import FillHeart from '../../assets/images/control Icon/Heart_fill.svg';


const PlayerSongDetails = ({ PlaySong,getsongWishlist }) =>{
  let { id,title, artist, artwork, url , isInWishlist} = PlaySong;

    return (
            <div className={styles.playersongsetails}>
                    <div className={styles.songData}>
                        <div className={styles.songImg}>
                            <img src={artwork} alt="" /> 
                        </div>
                        <div className={styles.sdetails}>
                            <p className={styles.sname}>{title}</p>
                            <p className={styles.sartist}>{artist}</p>
                            <p className={styles.sartist}>From top Hip-Hop mix</p>
                        </div>
                    </div>
                    <div className={styles.wish}>
                            <img src={isInWishlist? FillHeart: Heart} alt="" onClick={()=>getsongWishlist(id)} /> 
                    </div>
            </div>
    ) ;
}

export default PlayerSongDetails