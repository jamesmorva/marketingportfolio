import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import url from 'url';
import {defineConfig, Plugin} from 'vite';

function videoUploadPlugin(): Plugin {
  return {
    name: 'video-upload-plugin',
    configureServer(server) {
      server.middlewares.use('/api/upload-video', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }
        const parsedUrl = url.parse(req.url || '', true);
        const videoId = (parsedUrl.query.id as string) || 'egg-roll-masterclass';
        const safeId = videoId.replace(/[^a-zA-Z0-9_-]/g, '');
        const targetDir = path.resolve(__dirname, 'public/videos');
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
        const targetPath = path.join(targetDir, `${safeId}.mp4`);
        const fileStream = fs.createWriteStream(targetPath);

        req.pipe(fileStream);

        fileStream.on('finish', () => {
          const distDir = path.resolve(__dirname, 'dist/videos');
          if (fs.existsSync(distDir)) {
            try {
              fs.copyFileSync(targetPath, path.join(distDir, `${safeId}.mp4`));
            } catch {
              // Ignore copy error if dist does not exist yet
            }
          }
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: true, path: `/videos/${safeId}.mp4` }));
        });

        fileStream.on('error', (err) => {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        });
      });
    }
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), videoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
