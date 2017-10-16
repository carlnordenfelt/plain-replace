#! /usr/bin/env node
'use strict';

var from = process.argv[2];
var to = process.argv[3];
var file = process.argv[4];
var out = process.argv[5] || file;

if (!from || !to || !file) {
	console.error('Missing required arguments');
	usage();
	process.exit();
}

var fs = require('fs');
var data = fs.readFileSync(file).toString(); 

while (data.indexOf(from) > -1) {
	data = data.replace(from, to);
}

fs.writeFileSync(out, data);

function usage() {
	console.log('Usage:');
	console.log('plain-replace from to infile [outfile]');
	console.log('plain-replace REPLACE_THIS withThis, /in/this/file, /to/this/file');
	console.log('If outfile is not provided, the original file is overwritten');
}

