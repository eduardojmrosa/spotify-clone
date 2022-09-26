interface MusicInfoProps {
  title: string;
  album: string;
  cover: any;
}

export function MusicInfo(props: MusicInfoProps) {
  return (
    <div className="border w-72 h-20 ml-5 flex justify-start">
      <img className="w-20" src={props.cover}></img>
      <div className="ml-5 flex flex-col justify-center">
        <a href="">
          <span className="hover:underline text-xl">{props.title}</span>
        </a>
        <a href="">
          <p className=" hover:underline text-sm text-zinc-400">
            {props.album}
          </p>
        </a>
      </div>
    </div>
  );
}
