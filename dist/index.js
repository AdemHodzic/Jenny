#!/usr/bin/env node
'use strict';

var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var fetch = require('node-fetch');

var api = 'https://jenny-api.herokuapp.com/data';

clear();

fetch(api).then(function (data) {
	return data.json();
}).then(function (data) {
	var arr = data.quotes;
	var max = arr.length;
	var index = Math.floor(Math.random() * max);
	return arr[index];
}).then(function (data) {
	data = data.content;
	console.log(chalk.cyan(figlet.textSync('Jenny', { horizontalLayout: 'full' })));
	console.log(chalk.magenta.bold("", data));
}).catch(function (error) {
	console.log("We are sorry. There seems to be a problem with our service!");
	console.log("Error: ", error);
});

clear();