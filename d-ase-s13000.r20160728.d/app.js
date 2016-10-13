const log = require('bunyan').createLogger({name:'micro'});
const { send } = require('micro');
const sleep = require('then-sleep');

module.exports = async function (req, res) {
  log.info('.');
  await sleep(500);
  log.info(req.url);
  send(res, 200, 'Ready!');
}


//import { createLogger } from 'bunyan';
//import { send } from 'micro-core';
//import sleep from 'then-sleep';

//var log = createLogger({name: 'micro'});

//export default async function (req, res) {
  //await sleep(500);
  //log.info('.');
  //log.info(req);
  //send(res, 200, 'Ready!\n');
//}
