import express from "express";
import Project from "../models/Project.js";
import { auth, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// Create Project (Admin)
router.post("/", auth, adminOnly, async (req, res) => {
  const project = await Project.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.json(project);
});

// Get Projects
router.get("/", auth, async (req, res) => {
  const projects = await Project.find({
    $or: [
      { members: req.user.id },
      { createdBy: req.user.id }
    ]
  }).populate("members");

  res.json(projects);
});

export default router;