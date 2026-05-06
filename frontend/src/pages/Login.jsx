import { useState } from "react";
import API from "../api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    const res = await API.post("/auth/login", form);
    const payload = JSON.parse(atob(res.data.token.split(".")[1]));
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("userId", payload.id);
    window.location.reload();;
  };

  return (
    <div>
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" onChange={e => setForm({...form, password: e.target.value})} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}