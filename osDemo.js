import os, { userInfo } from 'os';

//userInfo
console.log(userInfo().username)

console.log(os.totalmem())

console.log(os.freemem());

console.log(os.cpus())