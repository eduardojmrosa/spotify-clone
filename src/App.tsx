import "./styles/main.css";
import logoImg from "./assets/spotify-logo-white.png";
import { SidebarButtons } from "./components/SidebarButtons";
import { Playlist } from "./components/Playlist";
import { MdHomeFilled } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { VscDiffAdded } from "react-icons/vsc";
import { FcLike } from "react-icons/fc";

function App() {
  //variável de playlists pra alimentar o componente que criar a lista de playlists
  const playlists = [
    { title: "Playlist1", playlistUrl: "playlist.com" },
    { title: "Playlist2", playlistUrl: "playlist2.com" },
    { title: "Playlist3", playlistUrl: "playlist3.com" },
    { title: "Playlist4", playlistUrl: "playlist4" },
  ];
  return (
    <div>
      <div className="h-screen w-80 fixed bg-black flex flex-col ">
        <div className=" ml-8">
          <div className="w-44 mt-8">
            <img src={logoImg}></img>
          </div>
          <div className="text-lg font-dm-sans font-bold mb-12 mt-11 ">
            <ul className="flex flex-col gap-4">
              <SidebarButtons
                buttonUrl=""
                content="Início"
                img={
                  <MdHomeFilled
                    size={38}
                    className="text-[#797979] hover:text-white transition-all"
                  />
                }
              />
              <SidebarButtons
                buttonUrl=""
                content="Buscar"
                img={
                  <BiSearch
                    size={38}
                    className="text-[#797979] hover:text-white transition-all"
                  />
                }
              />
              <SidebarButtons
                buttonUrl=""
                content="Sua Biblioteca"
                img={
                  <VscLibrary
                    size={38}
                    className="text-[#797979] hover:text-white transition-all"
                  />
                }
              />
            </ul>
          </div>
          <div className="text-lg text-white font-bold">
            <ul className="flex flex-col gap-4 ">
              <SidebarButtons
                buttonUrl=""
                content="Criar playlist"
                img={
                  <VscDiffAdded
                    size={38}
                    className="text-[#797979] hover:text-white transition-all"
                  />
                }
              />
              <SidebarButtons
                buttonUrl=""
                content="Músicas curtidas"
                img={
                  <FcLike
                    size={38}
                    className="text-[#797979] hover:text-white transition-all"
                  />
                }
              />
            </ul>
          </div>
          <div className="mt-4 pr-4">
            <hr className="border-zinc-800"></hr>
          </div>
          <div className="flex flex-col mt-4 text-xl gap-4 text-zinc-400">
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
    </div>
  );
}

export default App;
