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
  const [chats, setPrevChats] = useState<Chat[]>([]);
  const [showSideBar, setShowSideBar] = useState(
    window.screen.width <= 768 ? false : true
  );
  const titles = Array.from(new Set(chats.map((chat) => chat.title)));
  const curConversationChats = chats.filter((chat) => chat.title === curTitle);

  const updatePage = async (input: string, msg: Message) => {
    // Update the chat title if this is a new chat
    let title: string = curTitle ? curTitle : input;
    if (!curTitle) {
      setCurTitle(input);
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

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-slate-800 flex">
        {showSideBar && (
          <Sidebar
            createNewChat={() => {
              setCurTitle(null);
            }}
            changeCurChat={setCurTitle}
            titles={titles}
            curTitle={curTitle}
          ></Sidebar>
        )}
        <span
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
          className="inline absolute p-3 right-3 text-xl md:hidden lg:hidden"
        >
          {" "}
          Menu
        </span>
        <section className="h-screen w-full flex flex-col justify-between items-center text-center">
          <Feed curChat={curConversationChats}></Feed>
          <BottomSection updatePage={updatePage}></BottomSection>
        </section>
      </div>
    </QueryClientProvider>
  );
}
