#!/usr/bin/env node

const parseArgs = require('minimist');

const argv = parseArgs(process.argv.slice(2), {
    alias: { 's': ['secret'] },
    string: ['s', 'secret', '_']
});

// console.log(argv, JSON.parse(argv._[0]));

const secret = argv.secret;
const param_str = argv._[0];


//Name of the file : sha256-hmac.js
//Loading the crypto module in node.js
var crypto = require('crypto');
//creating hmac object
var hmac = crypto.createHmac('sha256', secret);
//passing the data to be hashed
const data = hmac.update(param_str);
//Creating the hmac in the required format
const gen_hmac = data.digest('base64');
//Printing the output on the console
console.log("secret : " + secret);
console.log("params : " + param_str);
console.log("hmac : " + gen_hmac);