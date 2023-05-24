import ChatHistory from "./ChatHistory";
import DevCallout from "./DevCallout";
import NewChatButton from "./NewChatButton";

interface SidebarProps {
  createNewChat: () => void;
  curTitle: string | null;
  changeCurChat: (title: string) => void;
  titles: string[];
}

const Sidebar = (props: SidebarProps) => {
  return (
    <section className="bg-slate-900 flex flex-col justify-between h-screen w-[25vw]">
      <NewChatButton createNewChat={props.createNewChat}></NewChatButton>
      <ChatHistory
        curTitle={props.curTitle}
        changeCurChat={props.changeCurChat}
        titles={props.titles}
      ></ChatHistory>
      <DevCallout></DevCallout>
    </section>
  );
};

export default Sidebar;
