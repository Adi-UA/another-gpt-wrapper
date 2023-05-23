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
    <ul className="history">
      {uniqueTitles &&
        uniqueTitles.map((uniqueTitle, idx) => (
          <li
            onClick={() => {
              changeActiveChat(uniqueTitle);
            }}
            key={idx}
          >
            {uniqueTitle}
          </li>
        ))}
    </ul>
  );
};

export default ChatHistory;
