var content = `
  function executeNativeFunction(fnName, args) {
    window.location.hash = '&executeFunction<-' + fnName + '&' + '&arguments<-' + JSON.stringify(args) + '&' + window.postMessage(JSON.stringify(args)) + '&';
  }
`;

export default content;
