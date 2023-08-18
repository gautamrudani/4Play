import React from 'react';

import Sidebar from '../component/sidebar/Sidebar';
import MainContiner from '../component/maincontainer/MainContiner';
import Footer from '../component/footer/Footer';
import styles from './home.module.scss';



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