import React from "react";
import styles from '../sidebar/sidebar.module.scss';

const Navitem = (props) => {
    const {icon, link, label} = props;
  return (
    <>
      <div className={styles.nav_item}>
        <a href={link}>
           {icon != null && <img src={icon} alt="" /> }
          <span>
           {label}
          </span>
        </a>
      </div>
    </>
  );
};

export default Navitem;
