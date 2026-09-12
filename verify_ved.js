const { spawn } = require('child_process');

const surge = spawn('npx', ['surge', 'verify'], {
  env: {
    ...process.env,
    SURGE_LOGIN: 'vedkontho@gmail.com',
    SURGE_TOKEN: 'df4a4d6f8303f27f8c1f0103e62f0fcf'
  },
  stdio: 'pipe'
});

surge.stdout.on('data', (data) => console.log('VERIFY OUT:', data.toString()));
surge.stderr.on('data', (data) => console.error('VERIFY ERR:', data.toString()));
surge.on('close', (code) => console.log('Verify process exited with code', code));
