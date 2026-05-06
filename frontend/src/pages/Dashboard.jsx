import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    API.get("/tasks")
      .then(res => {
        console.log(res.data);
        setTasks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map(task => (
          <div
            key={task._id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px"
            }}
          >
            <h3>{task.title}</h3>
            <p>Status: {task.status}</p>
          </div>
        ))
      )}
    </div>
  );
}