import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // 1. MIDDLEWARE FIRST
  app.use(express.json());
  app.use(express.static(path.join(process.cwd(), 'public')));
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });

  // 2. API ROUTES (BEFORE EVERYTHING ELSE)
  app.get("/api/ping", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // Download Route
  app.get("/api/download", async (req, res) => {
    console.log(">>> DOWNLOAD HIT at", new Date().toISOString());
    const apkPath = path.join(process.cwd(), 'public', 'quickping.apk');
    if (fs.existsSync(apkPath)) {
      return res.download(apkPath, 'QuickPing.apk');
    } 
    res.status(404).send("APK file not found.");
  });

  // 3. VITE MIDDLEWARE (SPA FALLBACK)
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
