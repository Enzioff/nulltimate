import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

export default defineConfig({
    plugins: [
        react(),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler"
            }
        },
        modules: {
            generateScopedName: "[name]__[local]--[hash:base64:8]",
        }
    },
    server: {
        allowedHosts: ['365a-142-111-162-235.ngrok-free.app']
    },
})
