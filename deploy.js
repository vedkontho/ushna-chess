const { spawn } = require('child_process');

const surge = spawn('npx', ['surge', '/root/.openclaw/workspace/chess-app', '--domain', 'ushna-chess.surge.sh'], {
  stdio: 'pipe'
});

surge.stdout.on('data', (data) => {
  const str = data.toString();
  console.log('SURGE OUT:', str);
  if (str.includes('email:')) {
    surge.stdin.write('ved.ganguly.openclaw@gmail.com\n');
  } else if (str.includes('password:')) {
    surge.stdin.write('openclaw123456!\n');
  } else if (str.includes('project:')) {
    surge.stdin.write('\n');
  } else if (str.includes('domain:')) {
    surge.stdin.write('ushna-chess.surge.sh\n');
  }
});

surge.stderr.on('data', (data) => console.error('SURGE ERR:', data.toString()));
surge.on('close', (code) => {
  console.log('Surge deployment exited with code', code);
});
