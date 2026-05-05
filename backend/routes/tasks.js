import express from "express";
import mongoose from "mongoose";
import Task from "../models/Task.js";
import Project from "../models/Project.js";
import { auth } from "../middleware/Auth.js";

const router = express.Router();

// Create Task (only project members)
router.post("/", auth, async (req, res) => {
  const { title, project, assignedTo } = req.body;

  if (!title || !project) {
    return res.status(400).json({ msg: "Title and project required" });
  }

  if (!mongoose.Types.ObjectId.isValid(project)) {
    return res.status(400).json({ msg: "Invalid project ID" });
  }

  const proj = await Project.findById(project);
  if (!proj) return res.status(404).json({ msg: "Project not found" });

  // RBAC: only members can create tasks
  if (!proj.members.includes(req.user.id) && proj.createdBy.toString() !== req.user.id) {
    return res.status(403).json({ msg: "Not a project member" });
  }

  const task = await Task.create(req.body);
  res.json(task);
});

// Get Tasks (only user's projects)
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find()
    .populate("assignedTo")
    .populate("project");

  const filtered = tasks.filter(t =>
    t.project.members.some(m => m.toString() === req.user.id) ||
    t.project.createdBy.toString() === req.user.id
  );

  res.json(filtered);
});

// Update Task (only assigned user)
router.put("/:id", auth, async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ msg: "Invalid task ID" });
  }

  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ msg: "Task not found" });

  if (task.assignedTo.toString() !== req.user.id) {
    return res.status(403).json({ msg: "Not your task" });
  }

  const updated = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
});

export default router;