'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Chat, Message } from '@/interfaces';
import Sidebar from './Sidebar';
import Feed from './Feed';
import BottomSection from './BottomSection';

const queryClient = new QueryClient();

export default function Home() {
  const [curTitle, setCurTitle] = useState<string | null>(null);
  const [chats, setPrevChats] = useState<Chat[]>([]);
  const [showSideBar, setShowSideBar] = useState(
    window && !(window.screen.width <= 768)
  );
  const titles = Array.from(new Set(chats.map((chat) => chat.title)));
  const curConversationChats = chats.filter((chat) => chat.title === curTitle);

  const updatePage = async (input: string, msg: Message) => {
    // Update the chat title if this is a new chat
    const title: string = curTitle || input;
    if (!curTitle) {
      setCurTitle(input);
    }

    // Update the stored chat list
    const chatSent: Chat = {
      title,
      role: 'user',
      content: input,
    };
    const responseReceived: Chat = {
      title,
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
          />
        )}
        <button
          type="button"
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
          className="inline absolute p-3 right-3 text-xl md:hidden lg:hidden"
        >
          {' '}
          Menu
        </button>
        <section className="h-screen w-full flex flex-col justify-between items-center text-center">
          <h1 className="text-xl/8 font-bold pt-2">AdiGPT</h1>
          <Feed curChat={curConversationChats} />
          <BottomSection updatePage={updatePage} />
        </section>
      </div>
    </QueryClientProvider>
  );
}
