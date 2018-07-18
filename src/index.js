const configParser = require('./configParser');

const dataTransformer = (configs) => {
  let localConfigs = Object.assign({}, configs); // avoid directly editing the configs object

  if (typeof localConfigs === 'string') {
    // convert json to object
    localConfigs = configParser(localConfigs);
  }

  Object.freeze(localConfigs); // prevent the local config to be edited by mistake
}