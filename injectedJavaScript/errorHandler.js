var content = `
window.onerror = function(message, url, line, column, error) {
  executeNativeFunction('jsError', {message: message, url: url, line: line, column: column});
};
`;

export default content;