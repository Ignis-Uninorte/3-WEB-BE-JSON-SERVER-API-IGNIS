const jsonServer = require("json-server");
const cors = require("cors"); // Import the CORS package
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const db = require("./db.js")(); // Get the database with all functions
const router = jsonServer.router(db);
const { addClient, getClients } = require("./data/clients"); // Import client functions
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

// Use the default router for other routes
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
