const server = require("express")();

const moduleConfig = require("./config/modules");
const connectMongo = require("./config/mongo");
const routeConfig = require("./config/routes");

moduleConfig(server);
connectMongo();
routeConfig(server);

module.exports = server;
