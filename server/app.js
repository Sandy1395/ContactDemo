const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const contactService = require('./services/contact.service')

  // Create an Express compatible Feathers application instance.
const app = express(feathers());

// Turn on JSON parser for REST services
app.use(express.json());
// Turn on URL-encoded parser for REST services
app.use(express.urlencoded({ extended: true }));
// Enable REST services
app.configure(express.rest());
// Enable Socket.io services
app.configure(socketio());

app.use(express.errorHandler());


app.use('/contact', contactService);

// Start the server
const port = 5000;

app.listen(port, () => {
  console.log(`Feathers server listening on port ${port}`);
});