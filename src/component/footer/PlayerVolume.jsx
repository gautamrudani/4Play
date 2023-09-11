
import React from 'react';

import styles from  '../footer/playervolume.module.scss';
import Volume from '../../assets/images/control Icon/Full Volume.svg'

const PlayerVolume = ({songRef,volumeControl}) =>{
    return (
            <div className={styles.playervolume}>
                <div className={styles.controls}>
                    <img src={Volume} alt="" />
                  <input id="songVolume" onChange={volumeControl} type="range" min="0" max="1" step="0.01" />
              </div>
            </div>
    ) ;
}

export default PlayerVolume