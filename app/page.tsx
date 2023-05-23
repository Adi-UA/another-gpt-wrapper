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

  console.log(prevChats);

  return (
    <div className="app">
      <section className="side-bar">
        <button>Start New Chat</button>
        <ul className="history">
          <li>Temp</li>
        </ul>
        <nav>
          <p>Made by Adi with &lt;3</p>
        </nav>
      </section>
      <section className="main">
        {!curTitle && <h1>AdiGPT</h1>}
        <ul className="feed"></ul>
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
