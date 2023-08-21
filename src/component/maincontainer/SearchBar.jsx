import React from 'react';

import styles from '../maincontainer/searchbar.module.scss';

const SearchBar = () =>{
    return (
     
            <div className={styles.searchbar}>
                    <div className={styles}></div>
                    <input type="text" placeholder='Find your music' />
                    <button>Refresh</button> 
            </div>
       
    ) ;
}

export default SearchBar