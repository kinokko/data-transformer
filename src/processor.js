const processor = async ({config}) => {
  const { method, path, destination, destinationOptions, responseProcessor } = config;

  const response = await proxy(destination, method, destinationOptions);

  const processedResponse = responseProcessor(response);

  return processedResponse;
}