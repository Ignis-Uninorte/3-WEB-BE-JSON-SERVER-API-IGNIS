const jsonServer = require("json-server");
const cors = require("cors"); // Import the CORS package
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const db = require("./db.js")(); // Get the database with all functions
const router = jsonServer.router(db);
const { addClient, getClients } = require("./data/clients");  // Import client functions
const { addActivity, getActivities, updateActivity, deleteActivity } = require("./data/activities");  // Import activity functions

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
server.post("/activities", (req, res) => {
  const newActivity = req.body;

  // Validate data before adding it
  if (!newActivity.contactType || !newActivity.contactDate || !newActivity.clientContact || !newActivity.commercialExecutive || !newActivity.description) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Add the activity using db() methods
  db.activities.push(newActivity);  // Manually push the new activity to the activities array
  res.status(201).json(newActivity);
});

server.get("/activities", (req, res) => {
  res.json(getActivities());
});

server.put("/activities/:id", (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const activities = getActivities();
  const activityIndex = activities.findIndex(activity => activity.id === parseInt(id));

  if (activityIndex !== -1) {
    activities[activityIndex] = { ...activities[activityIndex], ...updatedData };
    res.json(activities[activityIndex]);
  } else {
    res.status(404).json({ error: "Activity not found" });
  }
});

server.delete("/activities/:id", (req, res) => {
  const { id } = req.params;
  const activities = getActivities();
  const activityIndex = activities.findIndex(activity => activity.id === parseInt(id));

  if (activityIndex !== -1) {
    activities.splice(activityIndex, 1); // Remove the activity from the array
    res.status(204).end();
  } else {
    res.status(404).json({ error: "Activity not found" });
  }
});

// Use the default router for other routes
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
