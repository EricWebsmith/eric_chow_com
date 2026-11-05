export default {
  root: ".",
  envDir: ".",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
  },
  plugins: [require("@vitejs/plugin-react")()],
};
