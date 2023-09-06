import React from 'react';

import styles from  '../footer/footer.module.scss';
import PlayerSongDetails from './PlayerSongDetails'; 
import PlayerControl from './PlayerControl';
import PlayerVolume from './PlayerVolume'; 

const Footer = ({ PlaySong }) =>{
  let { title, artist, artwork, url } = PlaySong;
    
    return (
            <div className={styles.footerarea}>
                <PlayerSongDetails PlaySong={PlaySong}/>
                <PlayerControl songurl={url} />
                <PlayerVolume />
            </div>
    ) ;
}

export default Footer