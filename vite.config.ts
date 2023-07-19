import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";

const PLATFORM_DOMAIN = process.env.PLATFORM_DOMAIN;
const MFE_NAME = "MFE_NAME";

export default defineConfig(({ mode }) => {
  return {
    base:
      mode === "production"
        ? `${PLATFORM_DOMAIN}/mfe/${MFE_NAME}/latest/`
        : "/",
    build: {
      target: "esnext",
    },
    plugins: [
      react(),
      tailwindcss(),
      federation({
        name: MFE_NAME,
        manifest: true,
        filename: "remoteEntry.js",
        exposes: {
          "./MFE_NAME": "./src/App.tsx",
        },
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
        },
      }),
    ],
  };
});
