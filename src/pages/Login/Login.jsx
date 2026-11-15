import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CatModel from "../../components/CatModel.jsx";
import cfg from "../../config/surpriseConfig.js";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const ok = user.trim().toLowerCase() === cfg.login.username.toLowerCase() && pass === cfg.login.password;
    if (ok) navigate("/candle");
    else setError("That username or password is not right. Try again.");
  };

  return (
    <main className="login-page" style={{ backgroundImage: `url(${cfg.loginPageBackground})` }}>
      <section className="glass-card" style={{ "--card-bg": `url(${cfg.loginBackground})` }}>
        <CatModel />
        <h1 className="login-title">A surprise is waiting, {cfg.name}</h1>
        <p className="login-sub">Sign in to open it.</p>

        <label className="field">
          <span>Username</span>
          <input type="text" value={user} onChange={(e) => { setUser(e.target.value); setError(""); }} placeholder="Enter username" autoComplete="off" />
        </label>
        <label className="field">
          <span>Password (DOB)</span>
          <input type="password" value={pass} onChange={(e) => { setPass(e.target.value); setError(""); }} placeholder="Enter password" onKeyDown={(e) => e.key === "Enter" && handleLogin()} />
        </label>

        {error && <p className="login-error" role="alert">{error}</p>}
        <button className="btn login-btn" onClick={handleLogin}>Login</button>
      </section>
    </main>
  );
}
