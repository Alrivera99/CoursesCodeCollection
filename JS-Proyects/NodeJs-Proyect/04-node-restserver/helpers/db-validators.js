const { default: mongoose } = require("mongoose");
const Role = require("../models/role");
const Usuario = require("../models/usuario");

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({rol});
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
}

const EmailExist = async (correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya está registrado`);
    }
}


const userExistById = async( id ) => {
 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(`No es in ID válido`);
    }
    
    const userExist = await Usuario.findById(id);
 
    if ( !userExist ) {
        throw new Error(`El ID no existe '${ id }'`);
    }
};

module.exports = {
    esRoleValido,
    EmailExist,
    userExistById
}