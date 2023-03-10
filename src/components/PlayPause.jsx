import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => {
  return (
    isPlaying && activeSong?.title === song.title ? (
      <FaPauseCircle
        size={35}
        className="text-spotify-green"
        onClick={handlePause}
      />
    ) : (
      <FaPlayCircle
        size={35}
        className="text-spotify-green"
        onClick={handlePlay}
      />
    )
  );
};

export default PlayPause;
