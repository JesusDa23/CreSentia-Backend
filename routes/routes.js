//cSpell: disable

const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario.controller');
const verificarToken = require('../middleware/auth');


router.post('/crear-usuario', usuarioController.registroUsuario);
router.post('/login', usuarioController.loginUsuario);
router.get('/listar-usuario',  verificarToken, usuarioController.consultarUsuario);

module.exports = router;