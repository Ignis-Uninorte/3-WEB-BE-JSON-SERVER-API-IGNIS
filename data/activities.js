const activities = [
    {
        id: 1,
        contactType: "Call",
        contactDate: "2024-11-17",
        clientContact: "John Doe",
        description: "Discussed project requirements."
    },
    {
        id: 2,
        contactType: "Email",
        contactDate: "2024-11-16",
        clientContact: "Jane Smith",
        description: "Sent follow-up proposal."
    }
];

// Function to get all activities
function getActivities() {
    return activities; // Return the current list of activities
  }
  
  // Function to add a new activity
  function addActivity(newActivity) {
    const id = activities.length ? activities[activities.length - 1].id + 1 : 1;
    const activity = { id, ...newActivity };
    activities.push(activity);
    return activity;
  }
  
  module.exports = { getActivities, addActivity };
