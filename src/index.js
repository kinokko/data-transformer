const Router = require('express-promise-router');
const configParser = require('./configParser');
const processor = require('./processor');
const routerUpdater = require('./routerUpdater');


const dataTransformer = (configs) => {
  let localConfigs = Object.assign({}, configs); // avoid directly editing the configs object

  if (typeof localConfigs === 'string') {
    // convert json to object
    localConfigs = configParser(localConfigs);
  }

  Object.freeze(localConfigs); // prevent the local config to be edited by mistake

  const router = Router;

  configs.forEach(config => {
    routerUpdater(router, config, processor({ config }));
  });

  return router;
}

module.exports = dataTransformer;