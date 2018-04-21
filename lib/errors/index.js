'use strict';
const errorHelper = require('restify-errors');

module.exports = {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  InternalServerError

};

const defaultError = () => 'An Unknown error occurred. Please contact the Administrator.';

function UnauthorizedError(message = null) {
  throw new errorHelper.UnauthorizedError({
    statusCode: 401,
    message: message || defaultError()
  });
}

function BadRequestError(message = null) {
  throw new errorHelper.BadRequestError({
    statusCode: 400,
    message: message || defaultError()
  });
}

function ForbiddenError(message = null) {
  throw new errorHelper.ForbiddenError({
    statusCode: 403,
    message: message || defaultError()
  });
}

function NotFoundError(message = null) {
  throw new errorHelper.NotFoundError({
    statusCode: 404,
    message: message || defaultError()
  });
}

function InternalServerError(message = null) {
  throw new errorHelper.InternalServerError({
    statusCode: 500,
    message: message || defaultError()
  });
}
