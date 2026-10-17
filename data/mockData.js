const users = [
  {
    id: 'u-retail-1',
    name: 'Aisha Mwangi',
    email: 'aisha@example.com',
    type: 'retail',
    organization: 'Homeowner'
  },
  {
    id: 'u-b2b-1',
    name: 'Dr. Samuel Otero',
    email: 'procurment@st-marys-hospital.org',
    type: 'b2b',
    organization: 'St. Mary’s Hospital'
  }
];

const workshops = [
  {
    id: 'w-01',
    name: 'Kibera Woodworks',
    location: 'Nairobi',
    capacityPerWeek: 120,
    currentLoad: 38,
    specialties: ['sofas', 'tables', 'chairs']
  },
  {
    id: 'w-02',
    name: 'Maple & Grain',
    location: 'Nakuru',
    capacityPerWeek: 80,
    currentLoad: 52,
    specialties: ['office desks', 'executive desks', 'storage']
  },
  {
    id: 'w-03',
    name: 'Heritage Artisans',
    location: 'Mombasa',
    capacityPerWeek: 200,
    currentLoad: 92,
    specialties: ['beds', 'hospital furniture', 'school furniture']
  }
];

const templates = [
  {
    id: 't-sofa-1',
    name: 'Maro Compact Sofa',
    type: 'sofa',
    basePrice: 450,
    dimensions: { w: 190, d: 90, h: 85 },
    materials: ['Oak', 'Teak', 'Mahogany'],
    fabrics: ['Linen Beige', 'Velvet Emerald', 'Cotton Grey']
  },
  {
    id: 't-desk-1',
    name: 'Strato Work Desk',
    type: 'office-desk',
    basePrice: 220,
    dimensions: { w: 140, d: 70, h: 75 },
    materials: ['Pine', 'Oak', 'Birch'],
    fabrics: ['Matte Walnut', 'Satin Oak', 'Lacquered White']
  },
  {
    id: 't-bed-1',
    name: 'Haven Hospital Bed',
    type: 'hospital-bed',
    basePrice: 680,
    dimensions: { w: 210, d: 100, h: 60 },
    materials: ['Oak', 'Steel frame', 'Birch'],
    fabrics: ['Medical vinyl', 'Soft fabric', 'Memory foam']
  }
];

const orders = [
  {
    id: 'o-1001',
    userId: 'u-retail-1',
    title: 'Custom Compact Sofa',
    templateId: 't-sofa-1',
    quantity: 1,
    estimatedPrice: 650,
    assignedWorkshop: 'w-01',
    statusTimeline: [
      { step: 'Design Confirmed', ts: Date.now() - 3600000 * 24 * 5 },
      { step: 'Routed to Workshop', ts: Date.now() - 3600000 * 24 * 4 },
      { step: 'Procurement', ts: Date.now() - 3600000 * 24 * 3 },
      { step: 'Production in Progress', ts: Date.now() - 3600000 * 24 * 2 }
    ],
    delivery: {
      slot: '2026-10-25 09:00-12:00',
      status: 'Scheduled'
    }
  },
  {
    id: 'o-1002',
    userId: 'u-b2b-1',
    title: 'Bulk Office Desks (50)',
    templateId: 't-desk-1',
    quantity: 50,
    estimatedPrice: 9600,
    assignedWorkshop: 'w-02',
    statusTimeline: [
      { step: 'Design Confirmed', ts: Date.now() - 3600000 * 24 * 9 },
      { step: 'Routed to Workshop', ts: Date.now() - 3600000 * 24 * 8 },
      { step: 'Procurement', ts: Date.now() - 3600000 * 24 * 6 },
      { step: 'Production in Progress', ts: Date.now() - 3600000 * 24 * 2 }
    ],
    delivery: {
      slot: '2026-11-15 08:00-17:00',
      status: 'Staged'
    }
  }
];

module.exports = { users, workshops, templates, orders };
