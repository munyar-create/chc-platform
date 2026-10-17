import { useState } from 'react';

function VolumePricing({ quantity, unitPrice }) {
  let multiplier = 1;
  if (quantity >= 100) multiplier = 0.62;
  else if (quantity >= 50) multiplier = 0.75;
  else if (quantity >= 10) multiplier = 0.9;

  const discount = (1 - multiplier) * 100;
  const total = Math.round(unitPrice * quantity * multiplier);

  return (
    <div className="rounded-2xl bg-white p-5 shadow-soft border border-slate-200">
      <div className="text-sm text-slate-500">Estimated total</div>
      <div className="mt-2 text-3xl font-bold text-slate-900">${total.toLocaleString()}</div>
      <div className="mt-1 text-xs text-slate-500">Volume discount: {discount.toFixed(0)}%</div>
    </div>
  );
}

export default function BulkPortalPage() {
  const [quantity, setQuantity] = useState(50);
  const [unitPrice, setUnitPrice] = useState(220);

  return (
    <div>
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">B2B</p>
        <h1 className="text-3xl font-bold text-slate-900">Bulk procurement portal</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card-surface p-5 md:p-6">
          <h2 className="text-xl font-semibold text-slate-900">Generate RFQ</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="mb-1 block text-xs uppercase tracking-wide text-slate-500">Requesting organization</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2" defaultValue="St. Mary’s Hospital" />
            </div>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-wide text-slate-500">Item</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2" defaultValue="School chair / Hospital bed / Office desk" />
            </div>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-wide text-slate-500">Quantity</label>
              <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2" />
            </div>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-wide text-slate-500">Unit price estimate</label>
              <input type="number" value={unitPrice} onChange={(e) => setUnitPrice(Number(e.target.value))} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2" />
            </div>
            <button className="w-full rounded-xl bg-brand-500 px-4 py-3 font-medium text-white hover:bg-brand-600">Send RFQ</button>
          </div>
        </div>

        <div className="space-y-4">
          <VolumePricing quantity={quantity} unitPrice={unitPrice} />
          <div className="card-surface p-5">
            <h3 className="text-lg font-semibold text-slate-900">Milestone tracking</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2"><span>Design & sample approval</span><span className="font-medium text-emerald-600">Completed</span></div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-2"><span>Procurement</span><span className="font-medium text-amber-600">In progress</span></div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-2"><span>Production</span><span className="font-medium text-slate-500">Pending</span></div>
              <div className="flex items-center justify-between pb-2"><span>QC & doorstep delivery</span><span className="font-medium text-slate-500">Pending</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
