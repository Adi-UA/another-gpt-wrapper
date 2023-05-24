import ChatHistory from './ChatHistory';
import DevCallout from './DevCallout';
import NewChatButton from './NewChatButton';

interface SidebarProps {
  createNewChat: () => void;
  curTitle: string | null;
  changeCurChat: (title: string) => void;
  titles: string[];
}

function Sidebar(props: SidebarProps) {
  const { createNewChat, curTitle, changeCurChat, titles } = props;

  return (
    <section className="bg-slate-900 flex flex-col justify-between h-screen w-[25vw]">
      <NewChatButton createNewChat={createNewChat} />
      <ChatHistory
        curTitle={curTitle}
        changeCurChat={changeCurChat}
        titles={titles}
      />
      <DevCallout />
    </section>
  );
}

export default Sidebar;
