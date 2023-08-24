import React from 'react';
import cx from "classnames";

import styles from '../maincontainer/songitem.module.scss';
 

const SongItem = (props) =>{
  const {id, name, artist, artwork, songurl} = props;
  console.log(id);
    return (
                <div  className={cx(styles.songitemcontainer, {[styles.oddBG]: id % 2 !== 0}, {[styles.evenBG]: id % 2 === 0})}>
                    <div className={styles.songImage}>
                      <img src={artwork} alt="" />
                    </div>
                    <div className={styles.songName}>{name}</div>
                    <div className={styles.songartist}>{artist}</div>
                    <div className={styles.songduration}>Duration</div>
                </div>
       
    ) ;
}

export default SongItem