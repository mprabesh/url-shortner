// vite.config.js
import ViteMockServe from "vite-plugin-mock";

export default {
  plugins: [
    ViteMockServe({
      // Set up proxy for backend API
      "/prabeshURL": {
        target: "http://localhost:5000", // Replace with your backend server address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/prabeshURL/, ""),
      },
    }),
  ],
};
