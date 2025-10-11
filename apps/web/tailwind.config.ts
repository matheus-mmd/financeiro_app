import type { Config } from 'tailwindcss';
import sharedConfig from '@financeiro/ui/tailwind.config';

const config: Config = {
  presets: [sharedConfig],
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        dashboard: 'repeat(auto-fit, minmax(240px, 1fr))'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};

export default config;
