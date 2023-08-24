import React from 'react';

import styles from  '../footer/footer.module.scss';
import PlayerSongDetails from './PlayerSongDetails'; 
import PlayerControl from './PlayerControl';
import PlayerVolume from './PlayerVolume'; 

const Footer = () =>{
    return (
            <div className={styles.footerarea}>
                <PlayerSongDetails />
                <PlayerControl />
                <PlayerVolume />
            </div>
    ) ;
}

export default Footer