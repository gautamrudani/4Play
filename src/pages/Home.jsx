import React from 'react';

import styles from './home.module.scss';
import { Sidebar, Footer, MainContiner } from '../component';


const Home = () =>{
    return (
            <div>
                <div className={styles.container}>
                    <Sidebar />
                    <MainContiner />
                </div>  
                    <Footer />
            </div>
    ) ;
}

export default Home