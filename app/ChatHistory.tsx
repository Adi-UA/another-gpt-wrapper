'use client';

interface ChatHistoryProps {
  changeCurChat: (title: string) => void;
  curTitle: string | null;
  titles: string[];
}

function ChatHistory(props: ChatHistoryProps) {
  const { changeCurChat } = props;
  const { curTitle } = props;
  const { titles } = props;

  return (
    <ul className="h-full p-[0%] m-[3%]">
      {titles &&
        titles.map((title) => (
          <li
            className={`list-none cursor-pointer my-[2%] rounded-lg ${
              title === curTitle ? 'bg-slate-600' : 'bg-slate-800'
            } hover:bg-slate-400 text-sm`}
            key={title}
          >
            <button
              className="w-[100%] h-[100%] py-[5%] px-[3%]"
              type="button"
              onClick={() => {
                changeCurChat(title);
              }}
            >
              &#128488; {title}
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ChatHistory;
