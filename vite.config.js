import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    usePolling: true,
    host: 'localhost',
    port: 5173,
  },
});
