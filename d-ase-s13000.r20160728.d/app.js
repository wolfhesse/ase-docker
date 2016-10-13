const log = require('bunyan').createLogger({name:'micro'});
const { send } = require('micro');
const sleep = require('then-sleep');

let x_ase_timeout = process.env.X_ASE_TIMEOUT || 15;
log.info('x-ase-timeout is set to ' + x_ase_timeout);

module.exports = async function (req, res) {
//  log.info('.');
  await sleep(x_ase_timeout);
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
