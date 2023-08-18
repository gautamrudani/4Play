import React from "react";

const Navitem = (props) => {
    const {icon, link, label} = props;
  return (
    <>
      <div className="nav-item">
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
