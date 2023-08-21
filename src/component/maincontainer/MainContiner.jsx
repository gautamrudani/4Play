import React from 'react';

import styles from '../maincontainer/maincontainer.module.scss';
import SearchBar from  '../maincontainer/SearchBar';
import Player from  '../maincontainer/Player';
import SongList from  '../maincontainer/SongList';

const MainContiner = () =>{
    return (
     
            <div className={styles.maincontainer}>
                <SearchBar />
                <Player />
                <SongList />
            </div>
       
    ) ;
}

export default MainContiner