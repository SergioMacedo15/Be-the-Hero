const express = require('express');
const OngController = require('./controllers/OngController');
const incidentscontroller = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', incidentscontroller.index);
routes.post('/incidents', incidentscontroller.create);
routes.delete('/incidents/:id', incidentscontroller.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions',SessionController.create);

module.exports = routes;
