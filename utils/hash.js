const bcrypt = require("bcrypt")

const hashPassword = async (password, salts) => {

    return bcrypt.hashSync(password, Number(salts))

}

module.exports = {
    hashPassword,
}