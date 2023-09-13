import React from "react";

import styles from "../footer/footer.module.scss";
import PlayerSongDetails from "./PlayerSongDetails";
import PlayerControl from "./PlayerControl";
import PlayerVolume from "./PlayerVolume";

const Footer = ({
  PlaySong,
  handleClick,
  isToggled,
  songRef,
  songIndex,
  getSongIndex,
  volumeControl,
  getsongWishlist,
}) => {
  let { id, title, artist, artwork, url, isInWishlist } = PlaySong;
  return (
    <div className={styles.footerarea}>
      <PlayerSongDetails PlaySong={PlaySong}  getsongWishlist={getsongWishlist} />
      <PlayerControl
        songIndex={songIndex}
        id={id}
        getSongIndex={getSongIndex}
        songurl={url}
        handleClick={handleClick}
        isToggled={isToggled}
        songRef={songRef}
       
      />
      <PlayerVolume volumeControl={volumeControl} songRef={songRef} />
    </div>
  );
};

export default Footer;
