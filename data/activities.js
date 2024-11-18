const activities = [
    {
        id: 1,
        contactType: "Call",
        contactDate: "2024-11-17",
        clientContact: "John Doe",
        commercialExecutive: "Kelly Liz",
        description: "Discussed project requirements."
    },
    {
        id: 2,
        contactType: "Email",
        contactDate: "2024-11-16",
        clientContact: "Jane Smith",
        commercialExecutive: "Robert Kin",
        description: "Sent follow-up proposal."
    }
];

// Function to get all activities
function getActivities() {
    return activities; // Returns the current list of activities
}

// Function to add a new activity
function addActivity(newActivity) {
    // Generate a new ID for the activity and add it to the list
    const id = activities.length ? activities[activities.length - 1].id + 1 : 1;
    const activity = { id, ...newActivity };
    activities.push(activity);

    return activity; // Returns the added activity
}

// Function to update an activity
function updateActivity(id, updatedData) {
    const activityIndex = activities.findIndex(activity => activity.id === id);
    if (activityIndex === -1) {
        return null;
    }

    // Update the activity data
    const updatedActivity = { ...activities[activityIndex], ...updatedData };
    activities[activityIndex] = updatedActivity;

    return updatedActivity;  // Returns the updated activity
}

// Function to delete an activity
function deleteActivity(id) {
    const activityIndex = activities.findIndex(activity => activity.id === id);
    if (activityIndex === -1) {
        return false;
    }

    activities.splice(activityIndex, 1); // Remove the activity
    return true;  // Indicates the activity was deleted
}

module.exports = { getActivities, addActivity, updateActivity, deleteActivity };
