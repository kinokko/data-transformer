module.exports = (configs) => {
  if (typeof configs !== 'string') {
    return configs;
  }

  const localConfigs = JSON.parse(localConfigs);
  localConfigs.reqHeaderProcessor = eval(localConfigs.reqHeaderProcessor);
  localConfigs.reqBodyProcessor = eval(localConfigs.reqBodyProcessor);
  localConfigs.resBodyProcess = eval(localConfigs.resBodyProcess);

  return localConfigs;
}