interface PlaylistsProps {
  playlistUrl: string;
  playlistName: string;
}

export function Playlist(props: PlaylistsProps) {
  return (
    <a className="hover:text-white transition-all" href={props.playlistUrl}>
      {props.playlistName}
    </a>
  );
}
