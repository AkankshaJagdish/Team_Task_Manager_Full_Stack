import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const token = localStorage.getItem("token");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Team Task Manager</h1>

      {!token ? <Login /> : <Dashboard />}
    </div>
  );
}