import "./styles/main.css";
import logoImg from "./assets/spotify-logo-white.png";
import coverSample from "./assets/Captura de tela 2022-09-24 221011.png";
import { SidebarButtons } from "./components/SidebarButtons";
import { Playlist } from "./components/Playlist";
import { MdHomeFilled } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { VscDiffAdded } from "react-icons/vsc";
import { Sidebar } from "./components/Sidebar";
import { PlaylistCard } from "./components/PlaylistCard";
import { useState } from "react";
import { MusicInfo } from "./components/MusicInfo";

function App() {
  const today = new Date();
  const curHr = today.getHours();
  let a = 0;
  let b = "";

  if (curHr < 12) {
    a = 1;
  } else if (curHr < 18) {
    a = 2;
  } else {
    a = 3;
  }

  if (a === 1) {
    b = "Bom dia";
  } else if (a === 2) {
    b = "Boa tarde";
  } else {
    b = "Boa noite";
  }
  //variável de playlists pra alimentar o componente que criar a lista de playlists
  const playlists = [
    { title: "Playlist1", playlistUrl: "playlist.com" },
    { title: "Playlist2", playlistUrl: "playlist2.com" },
    { title: "Playlist3", playlistUrl: "playlist3.com" },
    { title: "Playlist4", playlistUrl: "playlist4" },
    { title: "Playlist5", playlistUrl: "playlist4" },
    { title: "Playlist6", playlistUrl: "playlist4" },
    { title: "Playlist7", playlistUrl: "playlist4" },
    { title: "Playlist8", playlistUrl: "playlist4" },
    { title: "Playlist9", playlistUrl: "playlist4" },
    { title: "Playlist10", playlistUrl: "playlist4" },
    { title: "Playlist11", playlistUrl: "playlist4" },
    { title: "Playlist12", playlistUrl: "playlist4" },
    { title: "Playlist13", playlistUrl: "playlist4" },
    { title: "Playlist14", playlistUrl: "playlist4" },
    { title: "Playlist15", playlistUrl: "playlist4" },
    { title: "Playlist16", playlistUrl: "playlist4" },
    { title: "Playlist16", playlistUrl: "playlist4" },
    { title: "Playlist16", playlistUrl: "playlist4" },
    { title: "Playlist16", playlistUrl: "playlist4" },
    { title: "Playlist16", playlistUrl: "playlist4" },
  ];
  return (
    <div className="flex flex-col h-full w-full overflow-auto ">
      <div className="h-screen w-80 fixed  bg-black flex flex-col ">
        <div className="  ml-8">
          <div className="w-44 mt-8">
            <a href="">
              <img src={logoImg}></img>
            </a>
          </div>
          <Sidebar />

          <div className="mt-4 pr-4">
            <hr className="border-zinc-800"></hr>
          </div>
          <div className="flex flex-col mt-4 h-1/2 scrollbar scrollbar-thumb-zinc-400 scrollbar-track-black text-xl gap-4 text-zinc-400">
            {playlists.map((playlist) => {
              return (
                <Playlist
                  playlistUrl={playlist.playlistUrl}
                  playlistName={playlist.title}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className=" ml-80 h-1/2 bg-gradient-to-t from-[#161212] via-[#250f13] to-[#320e14] ">
        <span className="mt-28 mb-10 flex justify-start text-white ml-10 font-bold text-4xl">
          {b}
        </span>
        <div className="grid items-end justify-center mr-10 grid-cols-3 gap-y-6 gap-x-">
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
        </div>
      </div>

      <div className=" ml-80 h-screen bg-[#121212]"></div>
      <div className="z-10 fixed bottom-0 bg-[#181818] h-32 flex flex-col items-start justify-center border w-full text-white">
        <MusicInfo title="Embers" album="Media Lab" cover={coverSample} />
      </div>
    </div>
  );
}

export default App;
