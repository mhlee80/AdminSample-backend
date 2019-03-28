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

const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'admin-sample.cxlvtkddnur7.ap-northeast-2.rds.amazonaws.com', //db ip address
    port: 3306, //db port number
    user: 'lambda', //db id
    password: '12345678', //db password
    database: 'admin_sample_db' //db schema name
};

const pool = mysql.createPool(dbConfig);

const createResponse = (status, body) => ({
  statusCode: status,
  body: JSON.stringify(body)
});

module.exports.createProduct = async (event) => {
  // const res = await pool.query('select * from product');
  // const [rows, fields] = await pool.query('select * from product');
  const [rows] = await pool.query('select id, name, price from product');

  // return createResponse(200, { message: 'create', 'res': res });
  // return createResponse(200, { message: 'create', 'rows': JSON.stringify(rows), 'fields': JSON.stringify(fields) });
  return createResponse(200, { message: 'create', 'rows': JSON.stringify(rows)});
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
