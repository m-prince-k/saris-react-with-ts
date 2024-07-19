import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    chunkSizeWarningLimit: 3000,
  },
})
// export default defineConfig({
//   plugins: [react()],
//   base: "/metronic8/react/demo1/",
//   build: {
//     chunkSizeWarningLimit: 3000,
//   },
// })
