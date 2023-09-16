import React from "react";
import styles from '../sidebar/sidebar.module.scss';
import { Link } from 'react-router-dom';

const Navitem = (props) => {
    const {icon, link, label} = props;
  return (
      <div className={styles.nav_item}>
        <Link to={link}>
           {icon != null && <img src={icon} alt="" /> }
          <span>
           {label}
          </span>
        </Link>
      </div>
  );
};

export default Navitem;
