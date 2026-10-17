export default function handler(req, res) {
  const mock = require('../../data/mockData');

  let db = {
    users: JSON.parse(JSON.stringify(mock.users)),
    workshops: JSON.parse(JSON.stringify(mock.workshops)),
    templates: JSON.parse(JSON.stringify(mock.templates)),
    orders: JSON.parse(JSON.stringify(mock.orders))
  };

  // Keep module-scope state across requests for this demo
  if (!global.chcDb) {
    global.chcDb = db;
  }
  db = global.chcDb;

  if (req.method === 'GET') {
    return res.status(200).json({ ok: true, data: db });
  }

  if (req.method === 'POST') {
    const { action, payload } = req.body || {};

    if (action === 'saveDesign') {
      const design = payload.design;
      const saved = { id: `d-${Date.now()}`, ...design };
      db.templates.push(saved);
      return res.status(200).json({ ok: true, design: saved });
    }

    if (action === 'createOrder') {
      const order = {
        id: `o-${Date.now()}`,
        ...payload,
        statusTimeline: payload.statusTimeline || [{ step: 'Design Confirmed', ts: Date.now() }],
        delivery: payload.delivery || { slot: 'Pending', status: 'Pending' }
      };
      db.orders.push(order);
      return res.status(201).json({ ok: true, order });
    }

    if (action === 'assignWorkshop') {
      const { orderId, workshopId } = payload;
      const order = db.orders.find((item) => item.id === orderId);
      if (!order) {
        return res.status(404).json({ ok: false, message: 'Order not found' });
      }
      order.assignedWorkshop = workshopId;
      return res.status(200).json({ ok: true, order });
    }

    return res.status(400).json({ ok: false, message: 'Unknown action' });
  }

  return res.status(405).json({ ok: false, message: `Method ${req.method} not allowed` });
}
