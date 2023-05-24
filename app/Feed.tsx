import { Chat } from "@/interfaces";

interface FeedProps {
  curChat: Chat[];
}

const Feed = (props: FeedProps) => {
  const curChat = props.curChat;

  return (
    <ul className="overflow-y-scroll w-full p-0">
      {curChat.map((chat, idx) => (
        <li
          className="flex bg-gray-700 w-full p-[3%] my-[1%] mx-[0%]"
          key={idx}
        >
          <p className="text-left text-[1em] text-[rgba(255, 255, 255, 0.8)] min-w-[5em] border-r border-[rgba(255, 255, 255, 0.5)] border-solid mr-[1.5%]">
            {chat.role === "user" ? "User" : "Adi-GPT"}
          </p>
          <p className="text-left text-[1em] text-[rgba(255, 255, 255, 0.8)]">
            {chat.content}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Feed;
