const core = require('@actions/core')
const github = require('@actions/github')
const name = core.getInput('who-to-greet');
console.log(`hello ${ name }`);

const time = new Date();
core.setOutput("time", time.toLocaleTimeString());
console.log(JSON.stringify(github, null, '\t'))

//core.setFailed('message');
