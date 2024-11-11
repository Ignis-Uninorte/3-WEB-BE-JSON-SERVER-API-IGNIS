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

// Endpoint to get a single client by NIT
server.get("/clients/:nit", (req, res) => {
  const { nit } = req.params; // Obtiene el NIT de los parámetros de la URL
  const clients = getClients(); // Obtiene la lista de clientes
  const client = clients.find(client => client.nit === nit); // Busca el cliente con el NIT especificado

  if (client) {
    res.json(client); // Responde con los datos del cliente encontrado
  } else {
    res.status(404).json({ error: "Client not found" }); // Envía un error si el cliente no se encuentra
  }
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

// Endpoint para obtener una oportunidad por su ID
server.get("/opportunities/:id", (req, res) => {
  const { id } = req.params;
  const opportunities = getOpportunities();
  const opportunity = opportunities.find(opportunity => opportunity.Id === id);

  if (opportunity) {
    res.json(opportunity);
  } else {
    res.status(404).json({ error: "Opportunity not found" });
  }
});


// Endpoint para actualizar una oportunidad por su ID
server.put("/opportunities/:id", (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const opportunities = getOpportunities();
  const opportunityIndex = opportunities.findIndex(opportunity => opportunity.Id === id);

  if (opportunityIndex !== -1) {
    // Actualizar los campos permitidos de la oportunidad
    const opportunity = opportunities[opportunityIndex];
    opportunity.businessName = updatedData.businessName || opportunity.businessName;
    opportunity.businessLine = updatedData.businessLine || opportunity.businessLine;
    opportunity.description = updatedData.description || opportunity.description;
    opportunity.estimatedValue = updatedData.estimatedValue || opportunity.estimatedValue;
    opportunity.estimatedDate = updatedData.estimatedDate || opportunity.estimatedDate;
    opportunity.status = updatedData.status || opportunity.status;

    res.json(opportunity); // Devuelve la oportunidad actualizada
  } else {
    res.status(404).json({ error: "Opportunity not found" });
  }
});


// para borrar
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

