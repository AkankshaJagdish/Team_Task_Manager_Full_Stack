import { defineConfig } from "vite";

export default defineConfig({
  preview: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: [
      "teamtaskmanagerfullstack-production-7f84.up.railway.app"
    ]
  }
});