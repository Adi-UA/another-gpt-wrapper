"use client";

import { Chat } from "@/interfaces";

interface ChatHistoryProps {
  changeCurChat: (title: string) => void;
  curTitle: string | null;
  prevChats: Chat[];
}

const ChatHistory = (props: ChatHistoryProps) => {
  const changeCurChat = props.changeCurChat;
  const curTitle = props.curTitle;
  const prevChats = props.prevChats;
  const titles = Array.from(
    new Set(prevChats.map((prevChat) => prevChat.title))
  );

  return (
    <ul className="h-full p-[0%] m-[3%]">
      {titles &&
        titles.map((title, idx) => (
          <li
            className={`list-none cursor-pointer py-[5%] px-[3%] m-[3%] rounded-lg ${
              title === curTitle ? "bg-slate-600" : "bg-slate-800"
            } hover:bg-slate-400 text-sm`}
            onClick={() => {
              changeCurChat(title);
            }}
            key={idx}
          >
            &#128488; {title}
          </li>
        ))}
    </ul>
  );
};

export default ChatHistory;
