import { defineConfig } from "vite";
const path = require('path');

export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: path.resolve(--path.dirname, 'index.html'),
            }
        }
    }
})