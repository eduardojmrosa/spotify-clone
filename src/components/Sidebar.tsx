import { SidebarButtons } from "./SidebarButtons";
import { MdHomeFilled } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { VscDiffAdded } from "react-icons/vsc";
import { FcLike } from "react-icons/fc";
export function Sidebar() {
  return (
    <div>
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
    </div>
  );
}
