import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import { qrcode } from 'vite-plugin-qrcode';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    qrcode()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
