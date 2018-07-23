const requestPromise = require('request-promise');

const proxy = (uri, method, options) => {
  return requestPromise(
    uri,
    {
      method: method.toUpperCase(),
      ...options
    });
}