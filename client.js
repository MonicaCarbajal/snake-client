const { IP, PORT } = require("./constants");

const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  
  });

   conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.on("connect", () => {
    conn.write("Successfully connected to game server");
    conn.write("Name: MCU");
     
  });

  return conn;
};


module.exports = connect;