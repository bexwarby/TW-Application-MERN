const bcrypt = require("bcrypt");
module.exports = {
  encrypt: async (password) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const encrypt = await bcrypt.hash(password, salt);
    return encrypt;
  },
  compare: async (password, passwordToBeCompare) => {
    const valid = await bcrypt.compare(password, passwordToBeCompare);

    return valid;
  },
};
