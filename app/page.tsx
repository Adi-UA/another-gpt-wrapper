"use client";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Chat, Message } from "@/interfaces";
import Feed from "./Feed";
import BottomSection from "./BottomSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  const [curTitle, setCurTitle] = useState<string | null>(null);
  const [prevChats, setPrevChats] = useState<Chat[]>([]);

  const updatePage = async (input: string, msg: Message) => {
    // Update the chat title if this is a new chat
    let title: string;
    if (!curTitle) {
      setCurTitle(input);
      title = input;
    } else {
      title = curTitle;
    }

    // Update the stored chat list
    const chatSent: Chat = {
      title: title,
      role: "user",
      content: input,
    };
    const responseReceived: Chat = {
      title: title,
      role: msg.role,
      content: msg.content,
    };
    setPrevChats((prevChats) => [...prevChats, chatSent, responseReceived]);
  };

  const createNewChat = () => {
    setCurTitle(null);
  };

  const changeActiveChat = (uniqueTitle: string) => {
    setCurTitle(uniqueTitle);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-slate-800 flex">
        <Sidebar
          newChatHandler={createNewChat}
          changeCurChat={setCurTitle}
          prevChats={prevChats}
          curTitle={curTitle}
        ></Sidebar>
        <section className="h-screen w-full flex flex-col justify-between items-center text-center">
          <h1 className="text-xl/8 font-bold">AdiGPT</h1>
          <Feed
            curChat={prevChats.filter(
              (prevChat) => prevChat.title === curTitle
            )}
          ></Feed>
          <BottomSection updatePage={updatePage}></BottomSection>
        </section>
      </div>
    </QueryClientProvider>
  );
}
