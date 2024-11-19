const jsonServer = require("json-server");
const cors = require("cors"); // Import the CORS package
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const db = require("./db.js")(); // Get the database with all functions
const router = jsonServer.router(db);
const { addClient, getClients } = require("./data/clients"); // Import client functions
const { addOpportunity, getOpportunities } = require("./data/opportunities"); // Import opportunity functions
const { addActivity, getActivities, updateActivity, deleteActivity } = require("./data/activities"); // Import activity functions

// Middleware to parse JSON body
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(cors()); // Enable CORS
server.use(jsonServer.defaults({ static: 'public' }));

// --- Client Endpoints ---
server.post("/clients", (req, res) => {
  const newClient = req.body;
  addClient(newClient);
  res.status(201).json(newClient);
});

server.get("/clients", (req, res) => {
  res.json(getClients());
});

server.get("/clients/:nit", (req, res) => {
  const { nit } = req.params;
  const client = getClients().find(client => client.nit === nit);

  if (client) {
    res.json(client);
  } else {
    res.status(404).json({ error: "Client not found" });
  }
});

server.patch("/clients/activate/:nit", (req, res) => {
  const { nit } = req.params;
  const client = getClients().find(client => client.nit === nit);

  if (client) {
    client.active = !client.active;  // Toggle the active status
    res.json(client);
  } else {
    res.status(404).json({ error: "Client not found" });
  }
});

server.put("/clients/:nit", (req, res) => {
  const { nit } = req.params;
  const updatedData = req.body;
  const client = getClients().find(client => client.nit === nit);

  if (client) {
    Object.assign(client, updatedData);
    res.json(client);
  } else {
    res.status(404).json({ error: "Client not found" });
  }
});

// OPPORTUNITY ENDPOINTS
server.post("/opportunities", (req, res) => {
  const newOpportunity = req.body;
  if (!newOpportunity.clientId || !newOpportunity.businessName || !newOpportunity.businessLine || !newOpportunity.description || !newOpportunity.estimatedValue || !newOpportunity.estimatedDate) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  addOpportunity(newOpportunity);
  res.status(201).json(newOpportunity);
});

server.get("/opportunities", (req, res) => {
  res.json(getOpportunities());
});

server.get("/opportunities/:id", (req, res) => {
  const { id } = req.params;
  const opportunity = getOpportunities().find(opportunity => opportunity.Id === id);

  if (opportunity) {
    res.json(opportunity);
  } else {
    res.status(404).json({ error: "Opportunity not found" });
  }
});

server.put("/opportunities/:id", (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const opportunityIndex = getOpportunities().findIndex(opportunity => opportunity.Id === id);

  if (opportunityIndex !== -1) {
    const opportunity = getOpportunities()[opportunityIndex];
    Object.assign(opportunity, updatedData);  // Update only provided fields
    res.json(opportunity);
  } else {
    res.status(404).json({ error: "Opportunity not found" });
  }
});

server.delete("/del-opp/:id", (req, res) => {
  const { id } = req.params;
  const opportunityIndex = getOpportunities().findIndex(opportunity => opportunity.Id === id);

  if (opportunityIndex !== -1) {
    getOpportunities().splice(opportunityIndex, 1);
    res.status(204).end();  // No content, just deletion
  } else {
    res.status(404).json({ error: "Opportunity not found" });
  }
});

// --- Follow-up Activity Endpoints ---
server.post("/activities", async (req, res) => {
  const newActivity = req.body;

  // Validate data before adding it
  if (!newActivity.contactType || !newActivity.contactDate || !newActivity.clientContact || !newActivity.commercialExecutive || !newActivity.description || !newActivity.opportunityId) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Add the activity using the function
    const addedActivity = await addActivity(newActivity);
    res.status(201).json(addedActivity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

server.get("/activities", (req, res) => {
  const { opportunityId } = req.query;

  // Filter activities by opportunityId if provided
  if (opportunityId) {
    const filteredActivities = getActivities().filter(
      (activity) => activity.opportunityId === parseInt(opportunityId)
    );
    return res.json(filteredActivities);
  }

  res.json(getActivities());
});

server.put("/activities/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedActivity = await updateActivity(parseInt(id), updatedData);
    if (updatedActivity) {
      res.json(updatedActivity);
    } else {
      res.status(404).json({ error: "Activity not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

server.delete("/activities/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const success = await deleteActivity(parseInt(id));
    if (success) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Activity not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para obtener una actividad por ID
server.get('/activities/:id', (req, res) => {
    const { id } = req.params; 
    const activities = getActivities(); 
    const activity = activities.find(activity => activity.id === parseInt(id, 10)); // Buscar por ID

    if (activity) {
        res.json(activity);
    } else {
        res.status(404).json({ error: `Activity with ID ${id} not found` }); // Devuelve un error si no existe
    }
});

// Use the default router for other routes
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
