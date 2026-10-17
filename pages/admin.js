import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then((r) => r.json())
      .then((payload) => setData(payload.data));
  }, []);

  const assignWorkshop = (orderId, workshopId) => {
    fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'assignWorkshop', payload: { orderId, workshopId } })
    })
      .then((r) => r.json())
      .then((payload) => {
        if (payload.ok) {
          setData((prev) => ({
            ...prev,
            orders: prev.orders.map((order) => order.id === payload.order.id ? payload.order : order)
          }));
        }
      });
  };

  return (
    <div>
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Operations</p>
        <h1 className="text-3xl font-bold text-slate-900">Admin & workshop coordination</h1>
      </div>

      {data ? (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-surface p-5">
            <h2 className="text-xl font-semibold text-slate-900">Incoming orders</h2>
            <div className="mt-4 space-y-3">
              {data.orders.map((order) => (
                <div key={order.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-medium text-slate-800">{order.title}</div>
                      <div className="text-xs text-slate-500">Qty: {order.quantity} · ${order.estimatedPrice}</div>
                    </div>
                    <select
                      defaultValue={order.assignedWorkshop || ''}
                      onChange={(e) => assignWorkshop(order.id, e.target.value)}
                      className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm"
                    >
                      <option value="">Assign workshop</option>
                      {data.workshops.map((workshop) => (
                        <option key={workshop.id} value={workshop.id}>{workshop.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-5">
            <h2 className="text-xl font-semibold text-slate-900">Workshop capacity overview</h2>
            <div className="mt-4 space-y-3">
              {data.workshops.map((workshop) => (
                <div key={workshop.id} className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-slate-800">{workshop.name}</div>
                      <div className="text-xs text-slate-500">{workshop.specialties.join(', ')}</div>
                    </div>
                    <div className="text-sm text-slate-700">{workshop.currentLoad}/{workshop.capacityPerWeek}</div>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-brand-500" style={{ width: `${Math.min(100, (workshop.currentLoad / workshop.capacityPerWeek) * 100)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
