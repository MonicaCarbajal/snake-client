let connection;

const setupInput = (conn) =>  {
  connection = conn; 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};


const handleUserInput = function (key) {
  if (key === '\u0003') {
    // If the input is ctrl + c (SIGINT), terminate the game and exit
    process.exit();
  } else if (key === 'w') {
    // If 'w' is pressed, send "Move: up" command to the server
    connection.write("Move: up");
  } else if (key === 'a') {
    // If 'a' is pressed, send "Move: left" command to the server
    connection.write("Move: left");
  } else if (key === 's') {
    // If 's' is pressed, send "Move: down" command to the server
    connection.write("Move: down");
  } else if (key === 'd') {
    // If 'd' is pressed, send "Move: right" command to the server
    connection.write("Move: right");
  }
};

module.exports = setupInput;
