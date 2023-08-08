/* eslint-disable import/no-extraneous-dependencies */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import esLint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [esLint(), react()],
});
