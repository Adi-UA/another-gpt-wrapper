"use client";

export default function Home() {
  const getMessages = async () => {
    console.log("TRYING");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "hello, how are you",
      }),
    };
    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

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
        <h1>AdiGPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input placeholder="Submit a new message" type="text" />
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
