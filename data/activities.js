const activities = [
    {
        id: 1,
        opportunityId: 1,
        contactType: "Call",
        contactDate: "2024-11-17",
        clientContact: "John Doe",
        commercialExecutive: "Kelly Liz",
        description: "Discussed project requirements."
    },
    {
        id: 2,
        opportunityId: 3,
        contactType: "Email",
        contactDate: "2024-11-16",
        clientContact: "Jane Smith",
        commercialExecutive: "Robert Kin",
        description: "Sent follow-up proposal."
    },
    {
        id: 3,
        opportunityId: 2,
        contactType: "In-person Meeting",
        contactDate: "2024-11-15",
        clientContact: "Alice Johnson",
        commercialExecutive: "Michael Scott",
        description: "Presented initial project plan."
    },
    {
        id: 4,
        opportunityId: 4,
        contactType: "Call",
        contactDate: "2024-11-14",
        clientContact: "Bob Williams",
        commercialExecutive: "Angela Martin",
        description: "Clarified client requirements."
    },
    {
        id: 5,
        opportunityId: 1,
        contactType: "Email",
        contactDate: "2024-11-13",
        clientContact: "Charlie Brown",
        commercialExecutive: "Jim Halpert",
        description: "Shared project documentation."
    },
    {
        id: 6,
        opportunityId: 5,
        contactType: "Call",
        contactDate: "2024-11-12",
        clientContact: "Diana Prince",
        commercialExecutive: "Pam Beesly",
        description: "Discussed budget adjustments."
    },
    {
        id: 7,
        opportunityId: 3,
        contactType: "In-person Meeting",
        contactDate: "2024-11-11",
        clientContact: "Eve Adams",
        commercialExecutive: "Stanley Hudson",
        description: "Reviewed contract terms."
    },
    {
        id: 8,
        opportunityId: 2,
        contactType: "Email",
        contactDate: "2024-11-10",
        clientContact: "Frank Castle",
        commercialExecutive: "Kevin Malone",
        description: "Sent revised timeline."
    },
    {
        id: 9,
        opportunityId: 4,
        contactType: "Call",
        contactDate: "2024-11-09",
        clientContact: "Grace Harper",
        commercialExecutive: "Oscar Martinez",
        description: "Answered technical queries."
    },
    {
        id: 10,
        opportunityId: 5,
        contactType: "In-person Meeting",
        contactDate: "2024-11-08",
        clientContact: "Hank Pym",
        commercialExecutive: "Phyllis Vance",
        description: "Finalized project milestones."
    }
    
];
// Function to get all activities
function getActivities() {
    return activities; // Devuelve directamente el arreglo
}

// Function to add a new activity
function addActivity(newActivity) {
    return new Promise((resolve, reject) => {
        const requiredFields = ["opportunityId", "contactType", "contactDate", "clientContact", "commercialExecutive", "description"];
        const missingFields = requiredFields.filter(field => !newActivity[field]);

        if (missingFields.length) {
            return reject(new Error(`Missing fields: ${missingFields.join(", ")}`));
        }

        const id = activities.length ? activities[activities.length - 1].id + 1 : 1;
        const activity = { id, ...newActivity };
        activities.push(activity);

        setTimeout(() => resolve(activity), 100); // Simula un retraso de 100ms
    });
}

// Function to update an activity
function updateActivity(id, updatedData) {
    return new Promise((resolve, reject) => {
        const activityIndex = activities.findIndex(activity => activity.id === id);
        if (activityIndex === -1) {
            return reject(new Error(`Activity with ID ${id} not found`));
        }

        const updatedActivity = { ...activities[activityIndex], ...updatedData };
        activities[activityIndex] = updatedActivity;

        setTimeout(() => resolve(updatedActivity), 100); // Simula un retraso de 100ms
    });
}

// Function to delete an activity
function deleteActivity(id) {
    return new Promise((resolve, reject) => {
        const activityIndex = activities.findIndex(activity => activity.id === id);
        if (activityIndex === -1) {
            return reject(new Error(`Activity with ID ${id} not found`));
        }

        activities.splice(activityIndex, 1); // Elimina la actividad
        setTimeout(() => resolve(true), 100); // Simula un retraso de 100ms
    });
}

module.exports = { getActivities, addActivity, updateActivity, deleteActivity };