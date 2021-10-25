import logo from "./logo.svg";
import "./App.css";
import Tweet from "./Components/Tweet";
import { useState } from "react";

function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div className="App">
      <input value={author} onChange={e => setAuthor(e.target.value)} />
      <input value={content} onChange={e => setContent(e.target.value)} />
      <button
        onClick={() =>
          setTweets([...tweets, { author: author, content: content }])
        }
      >
        Submit Tweet
      </button>
      {tweets.map(tweet => (
        <Tweet author={tweet.author} content={tweet.content} />
      ))}
    </div>
  );
}

export default App;
