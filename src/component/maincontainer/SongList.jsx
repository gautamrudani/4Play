import React from 'react';

import styles from '../maincontainer/songlist..module.scss';
import { SongData } from '../../data.js'
import SongItem from './SongItem';

// console.log(SongData);

const SongList = ({songIndex, getSongIndex}) =>{
    
    let songs =  SongData.map((song, id) => (
        <SongItem getSongIndex={getSongIndex} key={song.id} id={song.id} name = {song.title} artist = {song.artist} artwork = {song.artwork} songurl={song.url} />
        ))

    return (
     
            <div className={styles.SongListcontainer}>
                <div className={styles.songitemcontainer}>
                    <div className={styles.songImage}>blank</div>
                    <div className={styles.songName}>Songs</div>
                    <div className={styles.songartist}>Artist</div>
                    <div className={styles.songduration}>Duration</div>
                </div>
                <div className={styles.songItems}>
                    {songs}
                </div>
            </div>
       
    ) ;
}

export default SongList