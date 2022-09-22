interface SidebardProps {
  content: string;
  img: any;
  buttonUrl: string;
}
export function SidebarButtons(props: SidebardProps) {
  return (
    <li className="flex gap-4 items-center">
      {props.img}
      <a
        className="text-zinc-400 hover:text-white transition-all"
        href={props.buttonUrl}
      >
        {props.content}
      </a>
    </li>
  );
}
