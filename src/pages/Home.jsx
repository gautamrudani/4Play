import React from 'react';

import styles from './home.module.scss';
import { Sidebar, Footer, MainContiner } from '../component';
import { SongData } from '../data.js';


const Home = () =>{

    let PlaySong = SongData[0];
    

    return (
            <div className={styles.homeContainer}>
                <div className={styles.container}>
                    <Sidebar />
                    <MainContiner /> 
                </div>
                <div className={styles.footerMainContainer}>  
                    <Footer PlaySong={PlaySong}/>
                </div>
            </div>
    ) ;
}

export default Home