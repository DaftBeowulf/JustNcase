const user = require("../api/userRouter");
const timer = require("../api/timerRouter");
module.exports = server => {
  server.use("/user", user);
  server.use("/timer", timer);
};
