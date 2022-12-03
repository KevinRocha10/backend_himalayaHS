const { User } = require("../models");
const { hashPassword } = require("../utils/hash");
const { Config } = require("../config/environment");

const registerUser = async (req, res) => {
    try {
        //destructuración de los datos del usuario obtenidos del body
        const { name, password, email, id_tipo } = req.body;

        //comprobar si el usuario existe o no en la bd
        const userExist = await User.findOne({ where: { email } });

        //Si existe lanzar un error al catch
        if (userExist) {
            throw "El usuario ingresado ya existe";
        } else {
            //Si no existe hashear la password
            const hashPass = await hashPassword(password, Config.salts);

            //Se crea el usuario en forma de objeto literal con la password hasheada
            const newUser = {
                name, //esto es lo mismo que colocar "name: name"
                password: hashPass,
                email,
                id_tipo,
            };

            //Se guarda el usuario en la bd
            const userResponse = await User.create(newUser);

            //se devuelve el usuario creado como respuesta por si en el futuro se necesita consumir la información en el frontend
            res.json(userResponse);
        }

    } catch (error) {
        res.status(400).json({ error });
    }
}


module.exports = {
    registerUser,
}