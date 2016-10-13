const log = require('bunyan').createLogger({name:'micro'});
const { send, json } = require('micro');

module.exports =  async function (req, res) {
	var rc = 'unprocessed';
	const data = await json(req);
	let is_processed = false;

	if ( !is_processed && data.data != undefined ) {
		log.info('got data: ' + JSON.stringify(data.data));
		rc=data.data;
		is_processed = true;
	}
	if ( !is_processed && data.post != undefined ) {
		log.info('got post: ' + JSON.stringify(data.post));
		rc=data.post;
		is_processed = true;
	}
	if ( !is_processed && data.post != undefined ) {
		is_processed = true;
		log.warn('no data available');
		rc='no data';
	}
	log.info('.');
	send(res, 200, rc);
}
