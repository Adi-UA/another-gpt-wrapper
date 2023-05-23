"use client";

import { Chat } from "@/interfaces";
import ChatHistory from "./ChatHistory";

interface SidebarProps {
  newChatHandler: () => void;
  changeActiveChatHandler: (uniqueTitle: string) => void;
  prevChats: Chat[];
}

const Sidebar = (props: SidebarProps) => {
  const createNewChat = props.newChatHandler;

  return (
    <section className="side-bar">
      <button onClick={createNewChat}>Start New Chat</button>
      <ChatHistory
        changeActiveChatHandler={props.changeActiveChatHandler}
        prevChats={props.prevChats}
      ></ChatHistory>
      <nav>
        <p>
          Made by <a href="https://github.com/Adi-UA">Adi</a> with ❤️
        </p>
      </nav>
    </section>
  );
};

export default Sidebar;
