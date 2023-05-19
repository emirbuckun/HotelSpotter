import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const serverURL =
    command == "serve" ? env.DEV_SERVER_URL : env.PROD_SERVER_URL;

  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    define: {
      serverURL: JSON.stringify(serverURL),
    },
  };
});
