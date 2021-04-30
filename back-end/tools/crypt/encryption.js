module.exports = {
  encrypt: async (password) => {
    const bcrypt = require("bcrypt");
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    return await bcrypt.hash(password, salt);
  },
  compare: async (password, passwordToBeCompare) => {
    return await bcrypt.compare(password, passwordToBeCompare);
  },
};
