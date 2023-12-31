import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      'process.env.URL_link': JSON.stringify(env.URL_link),
      // 'process.env.GOOGLE_CLIENT_ID': JSON.stringify(env.GOOGLE_CLIENT_ID),
      // 'process.env.GOOGLE_SECRET_KEY': JSON.stringify(env.GOOGLE_SECRET_KEY),
    },
    plugins: [react()],
  }
})
