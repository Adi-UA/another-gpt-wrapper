'use client';

interface NewChatButtonProps {
  createNewChat: () => void;
}

function NewChatButton(props: NewChatButtonProps) {
  const { createNewChat } = props;

  return (
    <button
      type="button"
      className="bg-transparent hover:bg-slate-400 p-[5%] m-[5%] rounded-md border-solid border border-slate-500 cursor-pointer"
      onClick={createNewChat}
    >
      &#43; New Chat
    </button>
  );
}

export default NewChatButton;
