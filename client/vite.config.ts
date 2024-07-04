// * BASIC SETTING

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  envDir: "./environments",
});

// * SETTING TEST 1

// import { ViteDevServer, defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { loadEnv } from "vite";
// import { AddressInfo } from "net";

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");

//   return {
//     plugins: [react()],
//     define: {
//       "process.env": env,
//     },
//     server: {
//       port: 5173,
//       open: true,
//       onListening: (server: ViteDevServer) => {
//         const info = server.httpServer!.address() as AddressInfo;
//         const port = info.port;
//         console.log(`➜  client running on port ${port} in ${mode} mode`);
//       },
//     },
//   };
// });

// * SETTING TEST 2

// import { ViteDevServer, defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { loadEnv } from "vite";
// import { AddressInfo } from "net";

// export default defineConfig(({ command, mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");

//   return {
//     plugins: [react()],
//     define: {
//       "process.env": env,
//     },
//     server: {
//       port: 5173,
//       open: true,
//     },
//     configureServer: (server: ViteDevServer) => {
//       server.httpServer?.once("listening", () => {
//         const address = server.httpServer?.address() as AddressInfo;
//         const port = address.port;
//         console.log(`➜  client running on port ${port} in ${mode} mode`);
//       });
//     },
//   };
// });
