import { Chat } from '@/interfaces';

interface FeedProps {
  curChat: Chat[];
}

function Feed(props: FeedProps) {
  const { curChat } = props;

  return (
    <ul className="overflow-y-scroll no-scrollbar w-full p-0">
      {curChat.map((chat) => (
        <li
          key={chat.content}
          className="flex bg-gray-700 w-full p-[3%] my-[1%] mx-[0%]"
        >
          <p className="text-left text-[1em] text-[rgba(255, 255, 255, 0.8)] min-w-[5em]">
            {chat.role === 'user' ? '😐' : '🤖'}
          </p>
          <p className="text-left text-[1em] text-[rgba(255, 255, 255, 0.8)]">
            {chat.content}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default Feed;
