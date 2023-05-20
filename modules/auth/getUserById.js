var { Userdb } = require("../../server/model");

const getUser = async (id) => {
  try {
    const user = await Userdb.findOne({_id: id});
    if (user) {
      return user;
    } else {
      throw err;
    }
  } catch (err) {
    throw err;
  }
};

module.exports = getUser;
