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
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e: ChangeEvent) => {
          const target = e.target as HTMLTextAreaElement;
          setInputValue(target.value);
        }}
        placeholder="Submit a new message"
        type="text"
      />
      <div
        id="submit"
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
