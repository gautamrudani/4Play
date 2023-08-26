
import React from 'react';

import styles from  '../footer/playervolume.module.scss';
import Volume from '../../assets/images/control Icon/Full Volume.svg'

const PlayerVolume = () =>{
    return (
            <div className={styles.playervolume}>
                <div className={styles.controls}>
                    <img src={Volume} alt="" />
                  <input id="playing" type="range" min="0" max="3.14" step="0.1" />
              </div>
            </div>
    ) ;
}

export default PlayerVolume