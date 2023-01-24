import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // @ts-ignore
  plugins: [tsconfigPaths({ projects: ['./tsconfig.test.json'] }), react()],
  test: {
    testTimeout: 5000,
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/setupTests.ts',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/e2e/**',
      '**/tests-examples/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
});
