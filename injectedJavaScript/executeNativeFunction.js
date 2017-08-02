var content = `
  function executeNativeFunction(fnName, args) {
    window.postMessage(JSON.stringify({ executeFunction: fnName, arguments: args }));
  }
`;

export default content;
