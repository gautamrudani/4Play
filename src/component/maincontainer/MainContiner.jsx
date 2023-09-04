import React from 'react';

import styles from '../maincontainer/maincontainer.module.scss';
import SearchBar from  '../maincontainer/SearchBar';
import Player from  '../maincontainer/Player';
import SongList from  '../maincontainer/SongList';
import { SongData } from '../../data.js';


const MainContiner = () =>{
    let PlaySong = SongData[0];
    // console.log(PlaySong);
    return (
     
            <div className={styles.maincontainer}>
                <SearchBar />
                <Player PlaySong={PlaySong} />
                <SongList />
            </div>
       
    ) ;
}

export default MainContiner