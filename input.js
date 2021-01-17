const handleUserInput = function() {
  if (key === '\u0003') {
    console.log();
    process.exit();
  }
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = { setupInput };