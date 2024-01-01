import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass';
import sassPlugin from 'vite-plugin-sass';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  sassPlugin({
    // Use `dart-sass` implementation
    implementation: sass,
  }),
  ],
})
