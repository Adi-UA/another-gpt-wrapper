"use client";

import { Chat } from "@/interfaces";
import ChatHistory from "./ChatHistory";

interface SidebarProps {
  newChatHandler: () => void;
  curTitle: string | null;
  changeCurChat: (title: string) => void;
  prevChats: Chat[];
}

const Sidebar = (props: SidebarProps) => {
  const createNewChat = props.newChatHandler;

  return (
    <section className="bg-slate-900 flex flex-col justify-between h-screen w-[25vw]">
      <button
        className="bg-transparent hover:bg-slate-400 p-[5%] m-[5%] rounded-md border-solid border border-slate-500 cursor-pointer"
        onClick={createNewChat}
      >
        &#43; New Chat
      </button>
      <ChatHistory
        curTitle={props.curTitle}
        changeCurChat={props.changeCurChat}
        prevChats={props.prevChats}
      ></ChatHistory>
      <nav className="p-[5%] m-[5%] border-t border-solid border-[(255, 255, 255, 0.5)]">
        <p>
          Made by{" "}
          <a className="text-[cornflowerblue]" href="https://github.com/Adi-UA">
            Adi
          </a>{" "}
          with ❤️
        </p>
      </nav>
    </section>
  );
};

export default Sidebar;
