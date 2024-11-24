import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      formfetti: path.resolve(__dirname, "../src"), // Alias to the library's src
    },
  },
});
