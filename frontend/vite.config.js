import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteAliases()],
});
