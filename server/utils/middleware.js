const generateShortUrl = require("./generateURL");
const isValidURL = require("./validateURL");
const URL = require("../models/URL");

const urlValidator = async (req, res, next) => {
  const { originalURL } = req.body;
  try {
    if (!originalURL) throw "No URL provided";
    if (isValidURL(originalURL)) {
      console.log("valid url");
      const checkDuplicate = await URL.findOne({ originalURL });
      if (checkDuplicate) {
        return res.status(409).send(`${originalURL} already exists.`);
      }
      const shortCode = generateShortUrl();
      req.URLCode = shortCode;
      req.originalURL = originalURL;
      return next();
    } else {
      return res.status(403).json({ error: "No Valid URL" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
  next();
};

module.exports = { urlValidator };
