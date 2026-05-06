import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  preview: {
    plugins: [react()],
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: [
      "teamtaskmanagerfullstack-production-7f84.up.railway.app"
    ]
  }
});