import type { VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  framework: 'nuxtjs',
  buildCommand: 'bun run build',
  installCommand: 'bun install --frozen-lockfile',
};
