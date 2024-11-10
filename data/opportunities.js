const opportunities = [
  {
    "Id": "1",
    "clientId": "1",
    "businessName": "Desarrollo X",
    "businessLine": "desarrollo web",
    "description": "Desarrollo de plataformas web para empresas",
    "estimatedValue": "12000000",
    "estimatedDate": "2024-12-01",
    "status": "Apertura"
  },
  {
    "Id": "2",
    "clientId": "2",
    "businessName": "Innovación Digital",
    "businessLine": "consultoría TI",
    "description": "Consultoría en digitalización para pequeñas empresas",
    "estimatedValue": "8500000",
    "estimatedDate": "2024-11-15",
    "status": "Apertura"
  },
  {
    "Id": "3",
    "clientId": "3",
    "businessName": "Prueba 3",
    "businessLine": "desarrollo mobile",
    "description": "Desarrollo de una app para gestión de proyectos",
    "estimatedValue": "8585858",
    "estimatedDate": "2024-11-22",
    "status": "Apertura"
  },
  {
    "Id": "4",
    "clientId": "4",
    "businessName": "Redes Globales",
    "businessLine": "outsourcing recursos",
    "description": "Proveer recursos humanos para proyectos de IT",
    "estimatedValue": "9500000",
    "estimatedDate": "2024-12-05",
    "status": "Apertura"
  },
  {
    "Id": "5",
    "clientId": "5",
    "businessName": "Tech Solutions",
    "businessLine": "desarrollo web",
    "description": "Desarrollo de sitios web e-commerce",
    "estimatedValue": "11250000",
    "estimatedDate": "2024-12-10",
    "status": "Apertura"
  },
  {
    "Id": "6",
    "clientId": "6",
    "businessName": "Consultoría Pro",
    "businessLine": "consultoría TI",
    "description": "Asesoramiento en infraestructura IT y cloud computing",
    "estimatedValue": "6500000",
    "estimatedDate": "2024-11-25",
    "status": "Apertura"
  },
  {
    "Id": "7",
    "clientId": "7",
    "businessName": "Mobile X",
    "businessLine": "desarrollo mobile",
    "description": "Desarrollo de aplicaciones móviles para negocios",
    "estimatedValue": "7200000",
    "estimatedDate": "2024-12-02",
    "status": "Apertura"
  },
  {
    "Id": "8",
    "clientId": "8",
    "businessName": "Innovators Co.",
    "businessLine": "outsourcing recursos",
    "description": "Outsourcing de talento para equipos de desarrollo",
    "estimatedValue": "10000000",
    "estimatedDate": "2024-11-28",
    "status": "Apertura"
  },
  {
    "Id": "9",
    "clientId": "9",
    "businessName": "Global Web Dev",
    "businessLine": "desarrollo web",
    "description": "Desarrollo de soluciones web para ecommerce",
    "estimatedValue": "13500000",
    "estimatedDate": "2024-12-15",
    "status": "Apertura"
  },
  {
    "Id": "10",
    "clientId": "10",
    "businessName": "Tech Mobilities",
    "businessLine": "desarrollo mobile",
    "description": "Desarrollo de soluciones móviles para el sector salud",
    "estimatedValue": "9800000",
    "estimatedDate": "2024-12-20",
    "status": "Apertura"
  }

];

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
