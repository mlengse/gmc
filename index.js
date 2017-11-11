'use strict';
const express = require('express');
const winston = require('winston');
const path = require('path');
require('marko/node-require').install();
require('marko/express'); //enable res.marko
const indexTemplate = require('./template/index.marko');

let app = express();
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get(/^((?!\/static).)*$/, (req, res) => {
	let pathArr = cleanArray(req.originalUrl.replace('?', '').trim().split('/'));
  let pathStr = pathArr.join(' > ');
  winston.log(pathArr);
	winston.log(pathStr);
	res.marko(indexTemplate, {
    page: pathArr[0],
		title: pathStr
	});
});

app.listen('3000', () => {
	winston.info('server up');
});

function cleanArray(actual) {
  let newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i].toUpperCase());
    }
  }
  return newArray;
}