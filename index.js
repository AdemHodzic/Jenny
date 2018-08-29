#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const fetch = require('node-fetch')

const api = 'https://jenny-api.herokuapp.com/data';

clear()

fetch(api)
	.then(data => data.json())
	.then(data => {
		const arr = data.quotes
		const max = arr.length
		const index = Math.floor(Math.random() * max)
		return arr[index]
	})
	.then(data => {
		data = data.content
		console.log(
		  chalk.cyan(
		    figlet.textSync('Jenny', { horizontalLayout: 'full' })
		  )
		);
		console.log(chalk.magenta.bold("",data));

	})
	.catch(error => {
		console.log("We are sorry. There seems to be a problem with our service!")
		console.log("Error: ", error)
	})

clear()
