import React from 'react';

import styles from  '../footer/playercontrol.module.scss';
import Shuffle from '../../assets/images/control Icon/Shuffle.svg'
import Next from '../../assets/images/control Icon/Next.svg'
import Play from '../../assets/images/control Icon/Play.svg'
import Previous from '../../assets/images/control Icon/Previous.svg'
import Repeat from '../../assets/images/control Icon/Repeat.svg'

const PlayerControl = () =>{
  
    return (
            <div className={styles.playercontrol}>
              <div className={styles.controls}>
                <img src={Shuffle} alt="" />
                <img src={Previous} alt="" />
                <img src={Play} alt="" />
                <img src={Next} alt="" />
                <img src={Repeat} alt="" />
              </div>
              <div className={styles.playbar}>
                  <output id="playedValue">2.15</output>
                  <input id="playing" type="range" min="0" max="3.14" step="0.1" />
                  <output id="remainingValue">2.50</output>
              </div>
            </div>
    ) ;
}

export default PlayerControl