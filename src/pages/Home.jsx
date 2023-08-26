import React from 'react';

import styles from './home.module.scss';
import { Sidebar, Footer, MainContiner } from '../component';


const Home = () =>{
    return (
            <div className={styles.homeContainer}>
                <div className={styles.container}>
                    <Sidebar />
                    <MainContiner />
                </div>
                <div className={styles.footerMainContainer}>  
                    <Footer />
                </div>
            </div>
    ) ;
}

export default Home