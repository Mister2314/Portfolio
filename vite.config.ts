import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync, mkdirSync, copyFileSync } from "fs";

/**
 * Serves Bootstrap's CSS at /css/bootstrap.min.css in dev and copies it into
 * dist/css at build time — replicating the original CDN <link> without
 * importing it into the shared JS bundle (the original only loads Bootstrap
 * on the home page).
 */
function bootstrapCss(): Plugin {
  const file = "node_modules/bootstrap/dist/css/bootstrap.min.css";
  return {
    name: "bootstrap-css-asset",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === "/css/bootstrap.min.css") {
          res.setHeader("Content-Type", "text/css");
          res.end(readFileSync(file));
        } else {
          next();
        }
      });
    },
    closeBundle() {
      mkdirSync("dist/css", { recursive: true });
      copyFileSync(file, "dist/css/bootstrap.min.css");
    },
  };
}

export default defineConfig({
  plugins: [react(), bootstrapCss()],
  publicDir: "assets",
});
