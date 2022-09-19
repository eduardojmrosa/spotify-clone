import "./styles/main.css";
import logoImg from "./assets/spotify-logo-white.png";
import homeIcon from "./assets/home-icon.png";
import searchIcon from "./assets/search-icon.png";
import { SidebarButtons } from "./components/SidebarButtons";
import libIcon from "./assets/library-icon.png";
import addIcon from "./assets/addition-icon.png";
import likeIcon from "./assets/like-icon.png";
function App() {
  return (
    <div>
      <div className="h-screen w-80 fixed bg-black flex flex-col ">
        <div className="mt-3 ml-8">
          <div className="w-44 mt-5">
            <img src={logoImg}></img>
          </div>
          <div className="text-white  text-md font-bold mb-10 mt-12 ">
            <ul className="flex flex-col gap-6">
              <SidebarButtons content="Inicio" img={homeIcon} />
              <SidebarButtons content="Buscar" img={searchIcon} />
              <SidebarButtons content="Sua Biblioteca" img={libIcon} />
            </ul>
          </div>
          <div className="text-white font-bold">
            <ul className="flex flex-col gap-6">
              <SidebarButtons content="Criar playlist" img={addIcon} />
              <SidebarButtons content="Músicas curtidas" img={likeIcon} />
            </ul>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
