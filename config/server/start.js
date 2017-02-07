const JsonServer = require("./JsonServer");

const port = process.argv[2];
const file = process.argv[3];
JsonServer.createJsonServer(port, file);
