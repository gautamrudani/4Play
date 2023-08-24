import React from 'react';

import styles from  '../footer/playersongdetails.module.scss';
import Image from '../../assets/images/Image.jpg';
import Heart from '../../assets/images/Nav Bar/Icon/Heart.svg';


const PlayerSongDetails = () =>{
    return (
            <div className={styles.playersongsetails}>
                    <div className={styles.songData}>
                        <div className={styles.songImg}>
                            <img src={Image} alt="" /> 
                        </div>
                        <div className={styles.sdetails}>
                            <p className={styles.sname}>Dreaming on you</p>
                            <p className={styles.sartist}>Alan Walker</p>
                            <p className={styles.sartist}>From top Hip-Hop mix</p>
                        </div>
                    </div>
                    <div className={styles.wish}>
                            <img src={Heart} alt="" /> 
                    </div>
            </div>
    ) ;
}

export default PlayerSongDetails