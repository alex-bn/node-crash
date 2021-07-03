// npm - global command, comes with node and
// npm --version 
// npm install npm@latest -g -> update npm

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project 
// npm install -g <packageName>
// sudo npm install -g <packageName> (linux)

// package.json - manifest files (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step-by-step, enter to skip)
// npm init -y (everything default)

// SCRIPTS in package.json:
// "scripts": {
//     "go":       "node app.js", -> npm run go 
//     "dev":      "nodemon app.js", -> npm run dev
//     "start":    "nodemon app.js" -> npm start
// }


// uninstall a package -> npm uninstall <packageName>
// dev dependencies -> npm i install nodemon -D

/*
git remote add origin REMOTE URL
git branch -M main
git push -u origin main

git add .
git commit -m "second commit"
*/

const _ = require('lodash');
const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log('Hello world');
console.log(newItems);
console.log('Nodemon says Hello')