const OK = {
  status: 200,
  message: "OK",
  statusType: "Success",
  description: "Request was successful.",
};
const CREATED = {
  status: 201,
  message: "Created",
  statusType: "Success",
  description:
    "Request was successful and something new was created based on that request.",
};
const ACCEPTED = {
  status: 202,
  message: "Accepted",
  statusType: "Success",
  description:
    "Request was received successfully, but may not be acted on immediately.",
};
const NON_AUTHORITATIVE_INFORMATION = {
  status: 203,
  message: "Non-Authoritative Information",
  statusType: "Success",
  description:
    "Request was successful, but information sent to the client about the response comes from a 3rd party server.",
};
const NO_CONTENT = {
  status: 204,
  message: "NO_CONTENT",
  statusType: "Success",
  description: "Request was successful, but no data is sent back.",
};
const RESET_CONTENT = {
  status: 205,
  message: "Reset Content",
  statusType: "Success",
  description:
    "Request from the server to reset the information sent, such as form data.",
};
const PARTIAL_CONTENT = {
  status: 206,
  message: "Partial Content",
  statusType: "Success",
  description: "Response to a successful request for only part of a document.",
};
const MULTIPLE_CHOICES = {
  status: 300,
  message: "Multiple Choice",
  statusType: "Redirect",
  description:
    "Response indicating that what was requested has moved or that there are multiple options that match the request.",
};
const MOVED_PERMANENTLY = {
  status: 301,
  message: "Moved Permanently",
  statusType: "Redirect",
  description:
    "Requested document was moved permanently and response contains the URI for that new location. Important to use when changing domains names or URLs of existing documents.",
};
const FOUND = {
  status: 302,
  message: "Found",
  statusType: "Redirect",
  description:
    "Requested document was temporarily moved to a different location. The URI of the new location is sent back with the response. 303 and 307 are more specific versions of this type and were implemented as of HTTP/1.1.",
};
const SEE_OTHER = {
  status: 303,
  message: "See Other (HTTP/1.1)",
  statusType: "Redirect",
  description:
    "Requested document found and responds with the URI where the document can be currently be found.",
};
const NOT_MODIFIED = {
  status: 304,
  message: "Not Modified",
  statusType: "Redirect",
  description:
    "Requested document has not changed since the last time it was requested. Client loads the document from the cache.",
};
const USE_PROXY = {
  status: 305,
  message: "Use Proxy",
  statusType: "Redirect",
  description:
    "Requested document can only be accessed through a specified proxy.",
};
const TEMPORARY_REDIRECT = {
  status: 307,
  message: "Temporary Redirect",
  statusType: "Redirect",
  description:
    "Requested document can temporarily found at a different URI, which is given in the response. This is a more pure version of what a 302 is normally meant to be.",
};
const BAD_REQUEST = {
  status: 400,
  message: "Bad Request",
  statusType: "Failure",
  description: "The server did not understand the request.",
};
const UNAUTHORIZED = {
  status: 401,
  message: "Unauthorized",
  statusType: "Failure",
  description:
    "Client must be authorized before access, typically through some kind of login.",
};
const FORBIDDEN = {
  status: 403,
  message: "Forbidden",
  statusType: "Failure",
  description:
    "Client does not have permission to access the requested document. If this shows up on a document that should be available, it is likely a permissions issue.",
};
const NOT_FOUND = {
  status: 404,
  message: "Not Found",
  statusType: "Failure",
  description:
    "Requested document was not found at the URL give and there is no new location specified for the document. Does not mean that the document is permanently missing from the given URL.",
};
const METHOD_NOT_ALLOWED = {
  status: 405,
  message: "Method Not",
  statusType: "Failure",
  description: "Request method was not allowed for the specified document.",
};
const NOT_ACCEPTABLE = {
  status: 406,
  message: "Not Acceptable",
  statusType: "Failure",
  description:
    "Requested document cannot be sent in a way that the client can understand.",
};
const PROXY_AUTHENTICATION_REQUIRED = {
  status: 407,
  message: "Proxy Authentication Required",
  statusType: "Failure",
  description:
    "Client must be authorized by the proxy before the requested document can be sent.",
};

const REQUEST_TIMEOUT = {
  status: 408,
  message: "Request Timeout",
  statusType: "Failure",
  description:
    "Amount of time for the request exceeded the amount of time that the server is set to wait for a request.",
};

const CONFLICT = {
  status: 409,
  message: "Conflict",
  statusType: "Failure",
  description:
    "Requested document could not be sent because of a conflict in the request.",
};

const GONE = {
  status: 410,
  message: "Gone",
  statusType: "Failure",
  description:
    "Similar to a 404, except that it means the document is permanently gone from the URL and there is no new location specified.",
};

const LENGTH_REQUIRED = {
  status: 411,
  message: "Length Required",
  statusType: "Failure",
  description:
    "Request refused because content length must be specified by client.",
};

const RECONDITION = {
  status: 412,
  message: "Precondition",
  statusType: "Failure",
  description: "At least one condition of the request has failed.",
};
const REQUEST_ENTITY_TOO_LARGE = {
  status: 413,
  message: "Request Entity Too Large",
  statusType: "Failure",
  description:
    "Request was larger than the server was able to handle. A common example of this would be if a file is sent through a posted form and it is larger than the server settings allow for a post.",
};
const REQUEST_URI_TOO_LONG = {
  status: 414,
  message: "Request URI Too Long",
  statusType: "Failure",
  description:
    "The URL was longer than what the server could handle. A URL resulting in this error is normally thousands of characters long, thus it is rarely an issue.",
};
const UNSUPPORTED_MEDIA_TYPE = {
  status: 415,
  message: "Unsupported Media Type",
  statusType: "Failure",
  description:
    "Indicates that the format of at least part of the request is unsupported.",
};
const REQUESTED_RANGE_NOT_SATISFIABLE = {
  status: 416,
  message: "Requested Range Not Satisfiable",
  statusType: "Failure",
  description:
    "Request could not be fulfilled. Can occur if client requests a part of a document that doesn’t exist.",
};
const EXPECTATION_FAILED = {
  status: 417,
  message: "Expectation Failed",
  statusType: "Failure",
  description:
    "The server could not fulfill the requirements sent in the “Expect” header field.",
};
const INTERNAL_SERVER_ERROR = {
  status: 500,
  message: "Internal Server Error",
  statusType: "Failure",
  description:
    "Generic error message meaning that something broke but nothing more specific can be sent.",
};
const NOT_IMPLEMENTED = {
  status: 501,
  message: "Not Implemented",
  statusType: "Failure",
  description:
    "Server does not support what is required to fulfill the request.",
};
const BAD_GATEWAY = {
  status: 502,
  message: "Bad Gateway",
  statusType: "Failure",
  description:
    "Server acting as a gateway or proxy received response from an upstream server that was deemed invalid.",
};
const SERVICE_UNAVAILABLE = {
  status: 503,
  message: "Service Unavailable",
  statusType: "Failure",
  description:
    "Server is currently unavailable due to high load, maintenance, or other temporary situation.",
};
const GATEWAY_TIMEOUT = {
  status: 504,
  message: "Gateway Timeout",
  statusType: "Failure",
  description:
    "Server acting as a gateway or proxy did not receive response within the amount of time that the server is set to wait for a response.",
};
const HTTP_VERSION_NOT_SUPPORTED = {
  status: 505,
  message: "HTTP Version not supported",
  statusType: "Failure",
  description:
    "Server does not support the HTTP protocol used by the client for the request.",
};

const HTTP = {
  OK,
  CREATED,
  ACCEPTED,
  NON_AUTHORITATIVE_INFORMATION,
  NO_CONTENT,
  RESET_CONTENT,
  PARTIAL_CONTENT,
  MULTIPLE_CHOICES,
  MOVED_PERMANENTLY,
  FOUND,
  SEE_OTHER,
  NOT_MODIFIED,
  USE_PROXY,
  TEMPORARY_REDIRECT,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  METHOD_NOT_ALLOWED,
  NOT_ACCEPTABLE,
  PROXY_AUTHENTICATION_REQUIRED,
  REQUEST_TIMEOUT,
  CONFLICT,
  GONE,
  LENGTH_REQUIRED,
  RECONDITION,
  REQUEST_ENTITY_TOO_LARGE,
  REQUEST_URI_TOO_LONG,
  UNSUPPORTED_MEDIA_TYPE,
  REQUESTED_RANGE_NOT_SATISFIABLE,
  EXPECTATION_FAILED,
  INTERNAL_SERVER_ERROR,
  NOT_IMPLEMENTED,
  BAD_GATEWAY,
  SERVICE_UNAVAILABLE,
  GATEWAY_TIMEOUT,
  HTTP_VERSION_NOT_SUPPORTED,
};

export default HTTP;
