const routerUpdater = (router, { method, path}, handler) => {
  router[method.toLowerCase()](path, handler);
}

module.exports = routerUpdater;
