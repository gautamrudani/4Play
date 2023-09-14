import React, { useState } from "react";

import styles from "../maincontainer/searchbar.module.scss";
import Search from "../../assets/images/search.svg";
import Refresh from "../../assets/images/Refresh.svg";

const SearchBar = ({queryvalue,getqueryvalue, resetsearch}) => {

  return (
    <div className={styles.searchbar}>
      <div className={styles.searchInput}>
        <img src={Search} alt="" />
        <input type="text" value={queryvalue} onChange={getqueryvalue} placeholder="Find your music" />
      </div>
      <div className={styles.refreshbox}>
        <button onClick={resetsearch}>
          <img src={Refresh} alt="" /> Refresh
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
