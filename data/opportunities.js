const opportunities = [];

function addOpportunity(opportunity) {
  opportunities.push(opportunity);  // Agrega la oportunidad al array
}

function getOpportunities() {
  return opportunities;  // Devuelve la lista de oportunidades
}

module.exports = {
  addOpportunity,  // Exporta la función con el nombre correcto
  getOpportunities
};
