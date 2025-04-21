const express = require('express');
const router = express.Router();
const clientController = require('../controller/clientController');

// Solicitud de tipo GET para obtener todos los clientes
router.get('/', (req, res) => clientController.getClients(req, res));

// Solicitud de tipo GET para obtener un cliente por DNI
router.get('/:dni', (req, res) => clientController.getClientByDni(req, res));

// Solicitud de tipo POST para crear un nuevo cliente
router.post('/', (req, res) => clientController.createClient(req, res));

// Solicitud de tipo PUT para actualizar un cliente por DNI
router.put('/:dni', (req, res) => clientController.updateClient(req, res));

// Solicitud de tipo DELETE para eliminar un cliente por DNI
router.delete('/:dni', (req, res) => clientController.deleteClient(req, res));

module.exports = router;
