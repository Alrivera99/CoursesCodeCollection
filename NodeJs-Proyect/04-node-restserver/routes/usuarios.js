const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

// Controller
const UsuarioController = require("../controllers/usuarios");

//Helpers
const { esRoleValido, EmailExist, userExistById} = require("../helpers/db-validators");

// Middleware
const { validaCampos } = require("../middlewares/validar-campos");


router.get("/", UsuarioController.usuariosGet);

router.put('/:id', [
  check('id').custom(userExistById),
  validaCampos
],UsuarioController.usuariosPut);

router.post( "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe ser de más de 6 letras").isLength({min: 6}),
    check("correo").custom(EmailExist),
    // check("rol", "No es un rol permitido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check("rol").custom(esRoleValido),
    validaCampos
  ],
  UsuarioController.usuariosPost
);

router.delete("/", UsuarioController.usuariosDelete);

router.patch("/", UsuarioController.usuariosPatch);

module.exports = router;
