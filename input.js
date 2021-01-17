// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log();
    process.exit();
  } else if (key === '\u0077') {
    connection.write('Move: up');
  } else if (key === '\u0061') {
    connection.write('Move: left');
  } else if (key === '\u0073') {
    connection.write('Move: down');
  } else if (key === '\u0064') {
    connection.write('Move: right');
  }
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = { setupInput };