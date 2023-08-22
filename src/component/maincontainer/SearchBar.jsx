import React from 'react';

import styles from '../maincontainer/searchbar.module.scss';
import Search from '../../assets/images/search.svg';
import Refresh from '../../assets/images/Refresh.svg';

const SearchBar = () =>{
    return (
     
            <div className={styles.searchbar}>
                    <div className={styles.searchInput}>
                        <img src={Search} alt="" />
                        <input type="text" placeholder='Find your music' />
                    </div>
                    <div className={styles.refreshbox}>
                        <button><img src={Search} alt="" /> Refresh</button> 
                    </div>
            </div>
       
    ) ;
}

export default SearchBar