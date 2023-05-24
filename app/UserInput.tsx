"use client";
import { ChangeEvent, useEffect, useState } from "react";

interface UserInputProps {
  sendMessagehandler: (input: string) => void;
  curTitle: string | null;
}

const UserInput = (props: UserInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const curTitle = props.curTitle;
  const sendMessagehandler = props.sendMessagehandler;

  useEffect(() => {
    setInputValue("");
  }, [curTitle]);

  return (
    <div className="relative w-full max-w-[650px]">
      <input
        className="w-full rounded py-[2%] px-[3%] text-[1em] bg-slate-700 shadow-2xl"
        value={inputValue}
        onChange={(e: ChangeEvent) => {
          const target = e.target as HTMLTextAreaElement;
          setInputValue(target.value);
        }}
        placeholder="Submit a new message"
        type="text"
      />
      <div
        className="absolute cursor-pointer bottom-[25%] right-[2%]"
        onClick={() => {
          sendMessagehandler(inputValue);
        }}
      >
        →
      </div>
    </div>
  );
};

export default UserInput;
