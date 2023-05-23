import { Chat } from "@/interfaces";

interface FeedProps {
  curChat: Chat[];
}

const Feed = (props: FeedProps) => {
  const curChat = props.curChat;

  return (
    <ul className="feed">
      {curChat.map((chat, idx) => (
        <li key={idx}>
          <p className="feed-role">
            {chat.role === "user" ? "User" : "Adi-GPT"}
          </p>
          <p>{chat.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Feed;
