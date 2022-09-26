import { BiPlay } from "react-icons/bi";
import albumPortrait from "../assets/capa-album.png";

export function PlaylistCard() {
  return (
    <div className="flex justify-between items-center bg-zinc-600/20 group hover:bg-zinc-400/20 ml-10  overflow-hidden transition-all w-6/6 h-28 rounded-md  z-10">
      <a href="">
        <div className="flex justify-start">
          <img className=" w-28 h-28 " src={albumPortrait}></img>
          <div className="z-10 h-28 text-white text-lg font-bold flex items-center justify-start ml-4">
            <p className="">ghosts</p>
          </div>
        </div>
      </a>
      <button>
        <BiPlay
          size={70}
          className="rounded-full mr-4 invisible group-hover:bg-green-500 group-hover:visible pl-2 "
        />
      </button>
    </div>
  );
}
