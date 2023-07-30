// establishes a connection with the game server

const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.on("connect", () => {
    conn.write("Successfully connected to game server");
    conn.write("Name: MCU");
    // conn.write("Say: Sup?");
   
  });

  return conn;
};


module.exports = connect;