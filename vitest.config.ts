// vitest.config.ts

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
		globals: true,
    include: ['src/test/test.tsx', 'src/**/*.spec.tsx'], // src papkasidan test fayllarini qo'shadi
    setupFiles: './src/setupTests.ts',
		 environment: 'jsdom',
  },
});
