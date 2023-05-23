"use client";
import { useState, useEffect, ChangeEvent } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState<{ role: string; content: string }>();
  const [curTitle, setCurTtle] = useState<string | null>(null);
  const [prevChats, setPrevChats] = useState<
    { title: string; role: string; content: string }[]
  >([]);

  const getMessages = async () => {
    if (inputValue.length > 0) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue,
        }),
      };
      try {
        const response = await fetch(
          "http://localhost:8000/completions",
          options
        );
        const data = await response.json();
        setMessage(data.choices[0].message);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const createNewChat = () => {
    setMessage(undefined);
    setInputValue("");
    setCurTtle(null);
  };

  const changeActiveChat = (uniqueTitle: string) => {
    setCurTtle(uniqueTitle);
    setMessage(undefined);
    setInputValue("");
  };

  useEffect(() => {
    console.log(curTitle, inputValue, message);
    if (!curTitle && inputValue && message) {
      setCurTtle(inputValue);
    }
    if (curTitle && inputValue && message) {
      setPrevChats((prevChats) => [
        ...prevChats,
        {
          title: curTitle,
          role: "user",
          content: inputValue,
        },
        { title: curTitle, role: message.role, content: message.content },
      ]);
    }
  }, [message, curTitle]);

  const curChat = prevChats.filter((prevChat) => prevChat.title === curTitle);
  const uniqueTitles = Array.from(
    new Set(prevChats.map((prevChat) => prevChat.title))
  );

  return (
    <div className="app">
      <section className="side-bar">
        <button onClick={createNewChat}>Start New Chat</button>
        <ul className="history">
          {uniqueTitles.map((uniqueTitle, idx) => (
            <li
              onClick={() => {
                changeActiveChat(uniqueTitle);
              }}
              key={idx}
            >
              {uniqueTitle}
            </li>
          ))}
        </ul>
        <nav>
          <p>Made by Adi with &lt;3</p>
        </nav>
      </section>
      <section className="main">
        {!curTitle && <h1>AdiGPT</h1>}
        <ul className="feed">
          {curChat.map((chat, idx) => (
            <li key={idx}>
              <p className="feed-role">{chat.role}</p>
              <p>{chat.content}</p>
            </li>
          ))}
        </ul>
        <div className="bottom-section">
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
            <div id="submit" onClick={getMessages}>
              →
            </div>
          </div>
          <p className="info">
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts.
          </p>
        </div>
      </section>
    </div>
  );
}
