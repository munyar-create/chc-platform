export default function OrderTracker({ order }) {
  const stages = ['Design Confirmed', 'Routed to Workshop', 'Procurement', 'Production in Progress', 'Quality Control', 'Doorstep Delivery'];
  const complete = new Set((order.statusTimeline || []).map((item) => item.step));

  return (
    <div className="card-surface p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <div className="text-xl font-semibold text-slate-900">{order.title}</div>
          <div className="text-xs text-slate-500">Order #{order.id}</div>
        </div>
        <div className="rounded-full bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700">{order.quantity} units</div>
      </div>

      <div className="space-y-3">
        {stages.map((stage, index) => (
          <div key={stage} className="flex items-center gap-3">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${complete.has(stage) ? 'bg-brand-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
              {index + 1}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-800">{stage}</div>
              <div className="text-[11px] text-slate-500">{complete.has(stage) ? 'Completed' : 'Pending'}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
        Delivery slot: <span className="font-medium text-slate-800">{order.delivery?.slot || 'Not scheduled'}</span>
      </div>
    </div>
  );
}
