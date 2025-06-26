//learn me status code
const status = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing", // RFC 2518
  103: "Early Hints", // RFC 8297
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status", // RFC 4918
  208: "Already Reported", // RFC 5842
  226: "IM Used", // RFC 3229
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  306: "Switch Proxy", // RFC 7231
  307: "Temporary Redirect",
  308: "Permanent Redirect", // RFC 7538
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a teapot", // RFC 7168
  421: "Misdirected Request", // RFC 7540
  422: "Unprocessable Entity", // RFC 4918
  423: "Locked", // RFC 4918
  424: "Failed Dependency", // RFC 4918
  425: "Too Early", // RFC 8470
  426: "Upgrade Required", // RFC 7231
  428: "Precondition Required", // RFC 6585
  429: "Too Many Requests", // RFC 6585
  431: "Request Header Fields Too Large", // RFC 6585
  451: "Unavailable For Legal Reasons", // RFC 7725
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates", // RFC 2295
  507: "Insufficient Storage", // RFC 4918
  508: "Loop Detected", // RFC 5842
  510: "Not Extended", // RFC 2774
  511: "Network Authentication Required", // RFC 6585
};
function getStatusMessage(code) {
  return status[code] || "Unknown Status Code";
}