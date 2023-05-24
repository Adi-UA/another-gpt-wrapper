"use client";

import { Chat } from "@/interfaces";

interface ChatHistoryProps {
  changeActiveChatHandler: (uniqueTitle: string) => void;
  prevChats: Chat[];
}

const ChatHistory = (props: ChatHistoryProps) => {
  const changeActiveChat = props.changeActiveChatHandler;
  const prevChats = props.prevChats;
  const uniqueTitles = Array.from(
    new Set(prevChats.map((prevChat) => prevChat.title))
  );

  return (
    <ul className="h-full p-[5%] m-[5%]">
      {uniqueTitles &&
        uniqueTitles.map((uniqueTitle, idx) => (
          <li
            className="list-none cursor-pointer py-[5%] px-[3%] border-solid border border-slate-500 bg-slate-700 hover:bg-slate-500 text-sm"
            onClick={() => {
              changeActiveChat(uniqueTitle);
            }}
            key={idx}
          >
            Chat Title: {uniqueTitle}
          </li>
        ))}
    </ul>
  );
};

export default ChatHistory;
