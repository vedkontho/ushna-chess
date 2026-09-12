const { spawn } = require('child_process');
const surge = spawn('npx', ['surge', '/root/.openclaw/workspace/chess-app', '--domain', 'ushna-chess.surge.sh'], {
  stdio: 'pipe'
});
surge.stdout.on('data', (data) => {
  const str = data.toString();
  console.log(str);
  if (str.includes('email:')) surge.stdin.write('vedkontho@gmail.com\n');
  else if (str.includes('password:')) surge.stdin.write('UshnaChess2026!\n');
  else if (str.includes('project:')) surge.stdin.write('\n');
});
surge.stderr.on('data', (data) => console.error(data.toString()));
