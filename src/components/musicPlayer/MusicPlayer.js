import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import React from "react";

const MusicPlayer = () => {
  const colors = {
    tagsBackground: "#771D1D",
    tagsText: "#000000",
    tagsBackgroundHoverActive: "#771D1D",
    tagsTextHoverActive: "#000000",
    searchBackground: "#000000",
    searchText: "#000000",
    searchPlaceHolder: "#575a77",
    playerBackground: "#000000",
    titleColor: "#771D1D",
    timeColor: "#771D1D",
    progressSlider: "#771D1D",
    progressUsed: "#771D1D",
    progressLeft: "#151616",
    bufferLoaded: "#1f212b",
    volumeSlider: "#771D1D",
    volumeUsed: "#000000",
    volumeLeft: "#151616",
    playlistBackground: "#000000",
    playlistText: "#575a77",
    playlistBackgroundHoverActive: "#000000",
    playlistTextHoverActive: "#000000",
  };

  const tracks = [
    {
      url: "https://static.echowave.io/file/echowave-static/videos/1XO61ImiYOY1xqgIl2tgUyuGKNa2/zLnfEDKGlNXLcqiNDwTK.mp4",
      title: "Flight Facilities - Crave You (CucaRafa Remix)",
      tags: ["house"],
    },
    {
      url: "https://static.echowave.io/file/echowave-static/videos/1XO61ImiYOY1xqgIl2tgUyuGKNa2/R1ahatdcULGlxbepmoZe.mp4",
      title: "Modjo- Lady (Hear Me Tonight) (CucaRafa Remix)",
      tags: ["dnb"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      tags: ["dubstep"],
    },
  ];
  return (
    <div className="shadow-xl rounded-xl hover:shadow-red-800">
      <Player
        trackList={tracks}
        includeTags={false}
        includeSearch={false}
        showPlaylist={false}
        sortTracks={false}
        autoPlayNextTrack={false}
        customColorScheme={colors}
      />
    </div>
  );
};

export default MusicPlayer;
