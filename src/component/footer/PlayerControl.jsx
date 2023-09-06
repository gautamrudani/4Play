import React, { useEffect, useRef, useState } from "react";

import styles from  '../footer/playercontrol.module.scss';
import Shuffle from '../../assets/images/control Icon/Shuffle.svg'
import Next from '../../assets/images/control Icon/Next.svg'
import Play from '../../assets/images/control Icon/Play.svg'
import Previous from '../../assets/images/control Icon/Previous.svg'
import Repeat from '../../assets/images/control Icon/Repeat.svg'

const PlayerControl = ({songurl}) =>{
  const songRef = useRef(null); 
  const [isToggled, setIsToggled] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // const song = songRef.current;
  useEffect(() => {
    const song = songRef.current;
    song.src = songurl;

    song.addEventListener("timeupdate", () => {
      setCurrentTime(song.currentTime);
    });

    song.addEventListener("loadedmetadata", () => {
      setDuration(song.duration);
    });

    return () => {
      song.removeEventListener("timeupdate", () => {});
      song.removeEventListener("loadedmetadata", () => {});
    };
  }, [songurl]);

  const handleClick = () => {
    const song = songRef.current;
    // const totalPlayTime = song.duration;
    // const totalDuration = document.getElementById("totalDuration");
    // const playing = document.getElementById("playing");
    
    // totalDuration.textContent = formatTime(totalPlayTime);
    // playing.max = formatTime(totalPlayTime);

    setIsToggled(!isToggled);
    if (!isToggled) {
      song.play();
    } else {
      song.pause();
    }
  }

  const playtime = (e) =>{
    const song = songRef.current;
    const newTime = e.target.value;
    song.currentTime = newTime;
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
    return (
            <div className={styles.playercontrol}>
              <div className={styles.controls}>
                <img src={Shuffle} alt="" />
                <img src={Previous} alt="" />
                <img src={Play}  alt="" onClick={handleClick} />
                <img src={Next} alt="" />
                <img src={Repeat} alt="" />
              </div>
              <div className={styles.playbar}>
                  <audio src={songurl} ref={songRef} />
                  <output id="playedValue">{formatTime(currentTime)}</output>
                  <input id="playing" type="range" onChange={playtime} value={currentTime} min="0" max={duration} step="0.1" />
                  <output id="totalDuration">{formatTime(duration)}</output>
              </div>
            </div>
    ) ;
}

export default PlayerControl