import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import inject from "@rollup/plugin-inject";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // crypto: "crypto-browserify",
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
      },
      "/uploads": {
        target: "http://127.0.0.1:8000",
      },
      "/admin": {
        target: "http://127.0.0.1:8000",
      },
    },
  },
  // build: {
  //   rollupOptions: {
  //     plugins: [inject({ Buffer: ["buffer", "Buffer"] })],
  //   },
  // },
});
