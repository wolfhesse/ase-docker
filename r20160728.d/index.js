import { createLogger } from 'bunyan';
import { send } from 'micro-core';
import sleep from 'then-sleep';

var log = createLogger({name: 'micro'});

export default async function (req, res) {
  await sleep(500);
  log.info('.');
  send(res, 200, 'Ready!\n');
}
