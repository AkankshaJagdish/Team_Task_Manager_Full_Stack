import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    API.get("/tasks").then(res => setTasks(res.data));
  }, []);

  const now = new Date();

  const filteredTasks = tasks.filter(t => {
    if (filter === "mine") {
      return t.assignedTo?._id === localStorage.getItem("userId");
    }
    return true;
  });

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("mine")}>My Tasks</button>

      {filteredTasks.map(t => {
        const overdue =
          t.dueDate && new Date(t.dueDate) < now && t.status !== "done";

        return (
          <div key={t._id} style={{ border: "1px solid", margin: 10, padding: 10 }}>
            <strong>{t.title}</strong>
            <p>Status: {t.status}</p>
            {overdue && <p style={{ color: "red" }}>Overdue</p>}
          </div>
        );
      })}
    </div>
  );
}