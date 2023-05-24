"use client";

interface NewChatButtonProps {
  createNewChat: () => void;
}

const NewChatButton = (props: NewChatButtonProps) => {
  return (
    <button
      className="bg-transparent hover:bg-slate-400 p-[5%] m-[5%] rounded-md border-solid border border-slate-500 cursor-pointer"
      onClick={props.createNewChat}
    >
      &#43; New Chat
    </button>
  );
};

export default NewChatButton;
