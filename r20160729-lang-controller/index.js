import { createLogger } from 'bunyan';
import { json, send } from 'micro-core';

var model = require('./model.json');
var log = createLogger({name: 'micro'});

export default async function (req, res) {
	log.info('.');
	send(res, 200, model);
}
