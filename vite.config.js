import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // If the problematic library uses JSON imports, you can alias it to a fixed version
    },
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/], // Include node_modules to handle CommonJS modules
    },
  },
});
