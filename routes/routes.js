//cSpell: disable

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller')

router.post('/crear-usuario', usuarioController.crearUsuario)
router.get('/listar-usuarios', usuarioController.consultarUsuarios)

module.exports = router;