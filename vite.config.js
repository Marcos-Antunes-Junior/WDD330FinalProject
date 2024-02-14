import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        signup: resolve(__dirname, "src/createAccount/index.html"),
        home: resolve(__dirname, "src/home/index.html"),
      },
    },
  },
});
