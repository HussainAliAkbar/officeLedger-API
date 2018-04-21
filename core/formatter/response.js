'use strict';

const DEFAULT_HTTP_SUCCESS_CODE = '200';
// const logger = require('../bootstrap/bunyan');
let statusCode = DEFAULT_HTTP_SUCCESS_CODE;

module.exports = {
  formatResponse
};

function formatResponse(req, res, next) {
  let jsonResponse = res.json;
  req.__requestStartTime = new Date().getTime();
  res.json = (data) => {
    res.json = jsonResponse;
    if (data.meta) {
      if (!data.meta.code) {
        data.meta.code = data.statusCode || statusCode;
      }
    } else {
      data = {
        meta: {
          code: data.statusCode || statusCode
        },
        data: data
      };
    }
    if (!data.meta.skip || !data.meta.pageSize) {
      data.meta.skip = +req.query.skip || 0;
      data.meta.pageSize = +req.query.pageSize || 0;
    }
    // processRequestResponseLogging(req, data);
    return res.json(data);
  };
  next();
}

//
// function processRequestResponseLogging(req, data) {
//   return new Promise((resolve) => {
//     if (config.get('isReqResLogEnabled')) {
//       // let requestResponseInfo = {
//       //   duration: new Date().getTime() - req.__requestStartTime + ' ms',
//       //   baseUrl: req.baseUrl,
//       //   headers: req.headers,
//       //   originalUrl: req.originalUrl,
//       //   req: JSON.stringify(req.body),
//       //   res: JSON.stringify(data)
//       // };
//       // logger.info(requestResponseInfo);
//     }
//     return resolve();
//   });
// }
