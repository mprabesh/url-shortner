const URLParse = require("url-parse");

const isValidURL = (url) => {
  try {
    new URLParse(url);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = isValidURL;
