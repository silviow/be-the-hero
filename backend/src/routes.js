const express = require('express');
const NgoController = require('./controllers/NgoController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/ngos', NgoController.index);
routes.post('/ngos/new', NgoController.store);

routes.get('/profile/incidents', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents/new', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
