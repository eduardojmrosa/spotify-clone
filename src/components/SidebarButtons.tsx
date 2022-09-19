interface SidebardProps {
  content: string;
  img: string;
}
export function SidebarButtons(props: SidebardProps) {
  return (
    <li className="flex gap-4 align-items">
      <img className="w-8 h-8" src={props.img}></img>
      <a href="">{props.content}</a>
    </li>
  );
}
