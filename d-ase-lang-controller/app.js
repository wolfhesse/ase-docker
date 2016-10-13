const log = require('bunyan').createLogger({name: 'micro'});
const { send, json } = require('micro');

//import { createLogger } from 'bunyan';
//import { json, send } from 'micro-core';

let model = require('./model.json');
//var log = createLogger({name: 'micro'});

module.exports =  async function (req, res) {
	log.info('.');
	send(res, 200, model);
}
