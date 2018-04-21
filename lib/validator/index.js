'use strict';

const validator = require('@10pearls/revalidator');

module.exports = {
  validatePayload
};

function validatePayload(payload, schema) {
  return new Promise((resolve) => {
    let result = validator.validate(payload, schema);
    return resolve(result);
  });
}
