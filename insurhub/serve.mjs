import { spawn } from 'child_process';

const server = spawn('npx', ['next', 'dev', '-p', '3000'], {
  cwd: process.cwd(),
  stdio: 'inherit',
  shell: true
});

server.on('error', (err) => {
  console.error('Failed to start Next.js dev server:', err);
  process.exit(1);
});