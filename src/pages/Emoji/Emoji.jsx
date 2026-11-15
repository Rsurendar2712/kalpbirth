import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmojiRain from "../../components/EmojiRain.jsx";
import cfg from "../../config/surpriseConfig.js";
import "./Emoji.css";

export default function Emoji() {
  const navigate = useNavigate();
  const [revealed, setRevealed] = useState(Array(cfg.emojis.length).fill(false));
  const [rain, setRain] = useState({ emoji: "", burst: 0 });

  const reveal = (i) => {
    setRevealed((r) => r.map((v, idx) => (idx === i ? true : v)));
    setRain((p) => ({ emoji: cfg.emojis[i], burst: p.burst + 1 }));
  };

  return (
    <main className="emoji-page">
      <h1 className="emoji-title">Five little secrets are hiding here</h1>
      <p className="emoji-sub">Tap a card to find out what is inside.</p>

      <div className="emoji-grid">
        {cfg.emojis.map((em, i) => (
          <button key={i} className={`flip-card ${revealed[i] ? "open" : ""}`} onClick={() => reveal(i)} aria-label={revealed[i] ? `Revealed ${em}` : "Hidden emoji, tap to reveal"}>
            <span className="face front">?</span>
            <span className="face back">{em}</span>
          </button>
        ))}
      </div>

      <div className="emoji-bottom" id="nbutton"><button className="btn" onClick={() => navigate("/gallery")}>Next</button></div>
      <EmojiRain emoji={rain.emoji} burst={rain.burst} />
    </main>
  );
}