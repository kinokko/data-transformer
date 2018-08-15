# Data transformer

## Description

This package intent to help with creating a simple back-end for front-end (bff). It is capable to be used as one of the middlewares for the API. All it can do are:

1. transform user input from parameter, body and header
2. send the user input to the determined endpoint and wait for a response
3. transform downstream API response to a specific format before sending to the user
4. send the data with the HTTP status code coming from the downstream system

## Sample config

The config needed for instantiating the middleware need to be in json format or a javascript object. An sample would be the following:

``` javascript
{
  reqHeaderProcessor: (header) => {},
  reqParameterProcessor: (param) => {},
  reqBodyProcessor: (body) => {},
  resBodyProcessor: (body) => {},
  path: '//path//to//api//for//route',
  destination: '//path//to//downstream',
  method: 'method used for the api call; this need to match the method for the downstreamn system',
  destinationOptions: 'options when sending requests to the downstream system; for more details, please refer to request-promise'
}
```