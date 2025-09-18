const CustomAPIError = require("./custom-error");
const BadRequestError = require("./bad-request");
const UnauthenticatedError = require("./unauthenticated");
const InternalServerError = require("./internal-server-error");

module.exports = {
  CustomAPIError,
  BadRequestError,
  UnauthenticatedError,
  InternalServerError,
};
