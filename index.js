#!/usr/bin/env node

const parseArgs = require('minimist');

const argv = parseArgs(process.argv.slice(2), {
    alias: { 's': ['secret'] },
    string: ['s', 'secret', '_']
});

if ( !argv._.length && !argv.secret ) {
    usage();
    process.exit(0);
}

(function () {
    const crypto = require('crypto');
    const secret = argv.secret || '';
    const param_str = argv._[0] || '';

    //creating hmac object
    const hmac = crypto.createHmac('sha256', secret);

    //passing the data to be hashed
    const data = hmac.update(param_str);

    //Creating the hmac in the required format
    const gen_hmac = data.digest('base64');

    console.log(`hmac : ${gen_hmac}`);
})();

function usage() {
    console.log()
}

