import React from 'react';  

import Navitem from './Navitem';

import '../sidebar/sidebar.scss';
import LOGO  from '../../assets/images/LOGO.png';
import Home  from '../../assets/images/Nav Bar/Icon/Home.svg';
// import { ReactComponent as Logo }  from '../../assets/images/Nav Bar/Icon/Home.svg';
import Playlist  from '../../assets/images/Nav Bar/Icon/Playlist.svg';
import Schedule  from '../../assets/images/Nav Bar/Icon/Schedule.svg';
import Heart  from '../../assets/images/Nav Bar/Icon/Heart.svg';
import Profile  from '../../assets/images/Nav Bar/Icon/Profile.svg';


const Sidebar = () =>{
    return (
          <div className="mainDiv">
                <div className="logo">
                    <img src={LOGO} alt="" />
                </div>
                <div className="Navbar">
                    <Navitem label="Home" link="#" icon={Home} />
                    <Navitem label="My Schedule" link="#" icon={Schedule} />
                    <Navitem label="Like" link="#" icon={Heart} />
                    <Navitem label="My Playlist" link="#" icon={Playlist} />
                    <Navitem label="My Playlist 1" link="#"  />
                    <Navitem label="My Playlist 2" link="#"  />
                    <Navitem label="My Playlist 3" link="#"  />
                    <Navitem label="My Playlist 4" link="#"  />
                </div>
                <div className="profileNav Navbar">
                    <Navitem label="Profile" link="#"  icon={Profile} />
                </div>
          </div>
    ) ;
}

export default Sidebar