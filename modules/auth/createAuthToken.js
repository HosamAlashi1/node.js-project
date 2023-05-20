const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
// create Token
const createAuthToken = (_id, req, res) => {
  
  return new Promise((resolve, reject) => {
    jwt.sign({ _id }, process.env.SECRETKEY, { expiresIn: "1h" }, (unAuth, token) => {
      if (unAuth) {
        reject(unAuth);
      } else {
        resolve(token);
      }
    });
  });
};

module.exports = createAuthToken;
