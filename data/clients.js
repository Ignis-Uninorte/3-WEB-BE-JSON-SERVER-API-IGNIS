const clients = [
  {
    id:1,
    nit: "123456789",
    name: "Tech Solutions",
    address: "123 Innovation Drive",
    city: "New York",
    country: "USA",
    phone: "5551234567",
    corporateEmail: "info@techsolutions.com",
    active: true,
    contacts: [
      { name: "Alice", lastName: "Johnson", email: "alice@techsolutions.com", phone: "5559876543" },
      { name: "Bob", lastName: "Smith", email: "bob@techsolutions.com", phone: "5558765432" },
    ]
  },
  {
    id:2,
    nit: "234567890",
    name: "Global Industries",
    address: "456 Enterprise Ave",
    city: "Chicago",
    country: "USA",
    phone: "5552233445",
    corporateEmail: "contact@globalindustries.com",
    active: true,
    contacts: [
      { name: "Charlie", lastName: "Brown", email: "charlie@globalindustries.com", phone: "5551122334" }
    ]
  },
  {
    id:3,
    nit: "345678901",
    name: "Digital World",
    address: "789 Cyber Lane",
    city: "San Francisco",
    country: "USA",
    phone: "5559988776",
    corporateEmail: "hello@digitalworld.com",
    active: false,
    contacts: [
      { name: "Dana", lastName: "White", email: "dana@digitalworld.com", phone: "5556655443" }
    ]
  },
  {
    id:4,
    nit: "456789012",
    name: "Eco Green",
    address: "321 Nature St",
    city: "Seattle",
    country: "USA",
    phone: "5558877665",
    corporateEmail: "support@ecogreen.com",
    active: true,
    contacts: [
      { name: "Eve", lastName: "Green", email: "eve@ecogreen.com", phone: "5557766554" }
    ]
  },
  {
    id:5,
    nit: "567890123",
    name: "NextGen Innovations",
    address: "654 Future Blvd",
    city: "Austin",
    country: "USA",
    phone: "5553344556",
    corporateEmail: "team@nextgen.com",
    active: false,
    contacts: [
      { name: "Frank", lastName: "Miller", email: "frank@nextgen.com", phone: "5554455667" }
    ]
  },
  {
    id:6,
    nit: "678901234",
    name: "Skyline Solutions",
    address: "987 Tower Way",
    city: "Miami",
    country: "USA",
    phone: "5556677889",
    corporateEmail: "inquiries@skyline.com",
    active: true,
    contacts: [
      { name: "Grace", lastName: "Adams", email: "grace@skyline.com", phone: "5557788990" },
      { name: "Hank", lastName: "Williams", email: "hank@skyline.com", phone: "5558899001" }
    ]
  },
  {
    id:7,
    nit: "789012345",
    name: "Oceanic Ventures",
    address: "111 Sea Breeze Rd",
    city: "San Diego",
    country: "USA",
    phone: "5559988000",
    corporateEmail: "info@oceanicventures.com",
    active: true,
    contacts: [
      { name: "Isabel", lastName: "Marin", email: "isabel@oceanicventures.com", phone: "5551122334" }
    ]
  },
  {
    id:8,
    nit: "890123456",
    name: "Mountain Peaks",
    address: "222 Alpine Ave",
    city: "Denver",
    country: "USA",
    phone: "5554455667",
    corporateEmail: "support@mountainpeaks.com",
    active: false,
    contacts: [
      { name: "Jack", lastName: "Summers", email: "jack@mountainpeaks.com", phone: "5555566778" }
    ]
  },
  {
    id:9,
    nit: "901234567",
    name: "Urban Hub",
    address: "333 Cityscape St",
    city: "Los Angeles",
    country: "USA",
    phone: "5552233445",
    corporateEmail: "contact@urbanhub.com",
    active: true,
    contacts: [
      { name: "Karen", lastName: "Lee", email: "karen@urbanhub.com", phone: "5556677889" }
    ]
  },
  {
    id:10,
    nit: "012345678",
    name: "Venture Valley",
    address: "444 Startup St",
    city: "Silicon Valley",
    country: "USA",
    phone: "5553344556",
    corporateEmail: "hello@venturevalley.com",
    active: true,
    contacts: [
      { name: "Leo", lastName: "Newton", email: "leo@venturevalley.com", phone: "5557788990" }
    ]
  }
];

function addClient(client) {
  clients.push(client);
}

function getClients() {
  return clients;
}

module.exports = {
  addClient,
  getClients
};
