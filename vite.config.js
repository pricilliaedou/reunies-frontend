// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import eslint from "vite-plugin-eslint";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     eslint({
//       overrideConfigFile: "./eslint.config.js",
//     }),
//   ],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      overrideConfigFile: "./eslint.config.cjs", // Indique le chemin explicite vers ESLint
    }),
  ],
});
