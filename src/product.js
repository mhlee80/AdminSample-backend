'use strict';

// module.exports.hello = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless v1.0! Your function executed successfully!',
//       input: event,
//     }),
//   };
//
//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };

const createResponse = (status, body) => ({
  statusCode: status,
  body: JSON.stringify(body)
});

module.exports.createProduct = async (event) => {
  return createResponse(200, { message: 'create' });
};

module.exports.readProducts = async (event) => {
  return createResponse(200, { message: 'list' });
};

module.exports.readProduct = async (event) => {
  return createResponse(200, { message: 'read' });
};

module.exports.updateProduct = async (event) => {
  return createResponse(200, { message: 'update' });
};

module.exports.deleteProduct = async (event) => {
  return createResponse(200, { message: 'delete' });
};
