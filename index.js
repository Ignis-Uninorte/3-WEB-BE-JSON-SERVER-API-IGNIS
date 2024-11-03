// const jsonServer = require("json-server");
// const cors = require("cors"); // Import the CORS package
// const server = jsonServer.create();
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3000;
// const db = require("./db.js")();
// const router = jsonServer.router(db);
// const { addClient, getClients } = require("./data/client");  // Import functions

// // Middleware to parse JSON body
// server.use(jsonServer.bodyParser);
// server.use(middlewares);
// server.use(cors()); // Enable CORS
// server.use(jsonServer.defaults({ static: 'public' }));

// // Endpoint to add a new client
// server.post("/clients", (req, res) => {
//   const newClient = req.body;
//   addClient(newClient);  // Add the new client to the clients array
//   res.status(201).json(newClient);  // Respond with the new client data
// });

// // Endpoint to get all clients
// server.get("/clients", (req, res) => {
//   res.json(getClients());  // Return all clients
// });

// // Use the default router for other routes
// server.use(router);

// server.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
// });

///THE FOLLOWING CODE USES CORS POLICY TO BE ABLE TO SUBMIT POST REQUEST FROM LOCALHOST

const jsonServer = require("json-server");
const cors = require("cors"); // Import the CORS package
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const db = require("./db.js")();
const router = jsonServer.router(db);
const { addClient, getClients } = require("./data/client");  // Import functions

// Middleware to parse JSON body
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(cors()); // Enable CORS
server.use(jsonServer.defaults({ static: 'public' }));

// Endpoint to add a new client
server.post("/clients", (req, res) => {
  const newClient = req.body;
  addClient(newClient);  // Add the new client to the clients array
  res.status(201).json(newClient);  // Respond with the new client data
});

// Endpoint to get all clients
server.get("/clients", (req, res) => {
  res.json(getClients());  // Return all clients
});

// Use the default router for other routes
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
