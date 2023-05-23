"use client";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Chat, Message, SendMessageRequest } from "@/interfaces";
import Feed from "./Feed";
import BottomSection from "./BottomSection";

export default function Home() {
  const [message, setMessage] = useState<Message | null>(null);
  const [curTitle, setCurTitle] = useState<string | null>(null);
  const [prevChats, setPrevChats] = useState<Chat[]>([]);

  const updateTitle = (inputValue: string) => {
    if (!curTitle) {
      setCurTitle(inputValue);
    }
  };

  const updatePrevChats = (
    title: string,
    inputValue: string,
    message: Message
  ) => {
    if (title) {
      setPrevChats((prevChats) => [
        ...prevChats,
        {
          title: title,
          role: "user",
          content: inputValue,
        },
        { title: title, role: message.role, content: message.content },
      ]);
    }
  };

  const sendMessageAndGetResponse = async (inputValue: string) => {
    const options: SendMessageRequest = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: inputValue,
      }),
    };

    try {
      const response = await fetch("/api/completions", options);
      const data = await response.json();
      const msg: Message = data.choices[0].message;
      setMessage(msg);
      updateTitle(inputValue);
      const title = curTitle ? curTitle : inputValue;
      updatePrevChats(title, inputValue, msg);
    } catch (error) {
      console.error(error);
    }
  };

  const createNewChat = () => {
    setMessage(null);
    setCurTitle(null);
  };

  const changeActiveChat = (uniqueTitle: string) => {
    setCurTitle(uniqueTitle);
    setMessage(null);
  };

  return (
    <div className="app">
      <Sidebar
        newChatHandler={createNewChat}
        changeActiveChatHandler={changeActiveChat}
        prevChats={prevChats}
      ></Sidebar>
      <section className="main">
        <h1 className="title">AdiGPT</h1>
        <Feed
          curChat={prevChats.filter((prevChat) => prevChat.title === curTitle)}
        ></Feed>
        <BottomSection
          curTitle={curTitle}
          sendMessagehandler={sendMessageAndGetResponse}
        ></BottomSection>
      </section>
    </div>
  );
}
