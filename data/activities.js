// Importar las oportunidades desde Opportunity.js
const { getOpportunities } = require('./opportunities.js');  // Asegúrate de que la ruta sea correcta

const activities = [
    {
        id: 1,
        opportunityId: 1,
        contactType: "Call",
        contactDate: "2024-11-17",
        clientContact: "John Doe",
        description: "Discussed project requirements."
    },
    {
        id: 2,
        opportunityId: 2,
        contactType: "Email",
        contactDate: "2024-11-16",
        clientContact: "Jane Smith",
        description: "Sent follow-up proposal."
    }
];

// Función para obtener todas las actividades
function getActivities() {
    return activities; // Devuelve la lista actual de actividades
}

// Función para agregar una nueva actividad
function addActivity(newActivity) {
    // Obtener la lista de oportunidades
    const opportunities = getOpportunities();

    // Verificar si opportunityId existe en las oportunidades
    const opportunityExists = opportunities.some(opportunity => opportunity.Id === newActivity.opportunityId);

    if (!opportunityExists) {
        return { error: "Invalid opportunityId. The opportunity does not exist." };
    }

    // Generar un nuevo ID para la actividad y agregarla a la lista
    const id = activities.length ? activities[activities.length - 1].id + 1 : 1;
    const activity = { id, ...newActivity };
    activities.push(activity);

    return activity; // Retorna la actividad agregada
}

// Exportar las funciones
module.exports = { getActivities, addActivity };
