const os = require('os');
const { exec } = require('child_process');

console.log("Installing dependencies...");

exec('npm install');

console.log("Dependencies installed!");

console.log('Transpiling...')

exec('rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files')

console.log('Files transpiled succesfully!');

console.log("Installing Jenny...");

if (os.type() === 'Windows_NT') {
  exec('npm install --global')
} else {
  exec('sudo npm install --global');
}

console.log("Jenny installed!");
