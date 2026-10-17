import { useEffect, useState } from 'react';
import OrderTracker from '../components/OrderTracker';

export default function DashboardPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then((r) => r.json())
      .then((payload) => {
        const userOrders = payload.data.orders.filter((order) => order.userId === 'u-retail-1');
        setOrders(userOrders);
      });
  }, []);

  return (
    <div>
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Customer portal</p>
        <h1 className="text-3xl font-bold text-slate-900">My dashboard</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          {orders.length ? orders.map((order) => <OrderTracker key={order.id} order={order} />) : <div className="card-surface p-6">Loading orders...</div>}
        </div>

        <div className="card-surface p-5">
          <h2 className="text-xl font-semibold text-slate-900">Saved designs</h2>
          <div className="mt-4 space-y-3">
            {[
              { name: 'Arlo Lounge Chair', updated: '2 days ago', quantity: '2 sets' },
              { name: 'Briar Dining Table', updated: '1 week ago', quantity: '1 set' },
              { name: 'Oak TV Console', updated: '3 weeks ago', quantity: '1 unit' }
            ].map((design) => (
              <div key={design.name} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-slate-800">{design.name}</div>
                  <button className="text-xs font-medium text-brand-600">Re-order</button>
                </div>
                <div className="mt-2 text-xs text-slate-500">Updated {design.updated} · {design.quantity}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
