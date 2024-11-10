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
const { addClient, getClients } = require("./data/clients");  // Import functions
const { addOpportunity, getOpportunities } = require("./data/opportunities");  // Import opportunity functions

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

// Endpoint to activate/deactivate a client by NIT
server.patch("/clients/activate/:nit", (req, res) => {
  const { nit } = req.params;
  const clients = getClients();
  const client = clients.find(client => client.nit === nit);

  if (client) {
    client.active = !client.active; // Toggle the 'active' status
    res.json(client); // Respond with the updated client data
  } else {
    res.status(404).json({ error: "Client not found" });
  }
});

// Endpoint to update client data by NIT
server.put("/clients/:nit", (req, res) => {
  const { nit } = req.params;
  const updatedData = req.body;
  const clients = getClients();
  const client = clients.find(client => client.nit === nit);

  if (client) {
    // Update the client with the new values
    Object.assign(client, updatedData);
    res.json(client);
  } else {
    res.status(404).json({ error: "Client not found" });
  }
});

// Endpoint to create a new opportunity
server.post("/opportunities", (req, res) => {
  const newOpportunity = req.body;

  // Validate required fields for the opportunity
  if (!newOpportunity.clientId || !newOpportunity.businessName || !newOpportunity.businessLine || !newOpportunity.description || !newOpportunity.estimatedValue || !newOpportunity.estimatedDate) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Add the new opportunity to the data
  addOpportunity(newOpportunity);

  // Respond with the new opportunity data
  res.status(201).json(newOpportunity);
});

// Endpoint to get all opportunities
server.get("/opportunities", (req, res) => {
  res.json(getOpportunities());  // Return all opportunities
});

server.delete("/del-opp/:id", (req, res) => {
  const { id } = req.params;
  const opportunities = getOpportunities(); 
  const opportunityIndex = opportunities.findIndex(opportunity => opportunity.Id === id); 

  if (opportunityIndex !== -1) {
    opportunities.splice(opportunityIndex, 1); 
    res.status(204).end(); 
  } else {
    res.status(404).json({ error: "Opportunity not found" });
  }
});

// Use the default router for other routes
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

