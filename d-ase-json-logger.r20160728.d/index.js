import { createLogger } from 'bunyan';
import { json, send } from 'micro-core';

var log = createLogger({name: 'micro'});

export default async function (req, res) {
	log.info('* new request');
	var rc = 'unprocessed';
	const data = await json(req);
	if ( data.data != undefined ) {
		log.info('got data: ' + JSON.stringify(data.data));
		rc=data.data;
	} else {
		log.warn('no data available');
		rc='no data';
	}
	log.info('.');
	send(res, 200, rc);
}
