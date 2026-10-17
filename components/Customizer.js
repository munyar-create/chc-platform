import { useState, useEffect } from 'react';

export default function Customizer({ template, onSave, onOrder }) {
  const [material, setMaterial] = useState(template.materials?.[0] || 'Oak');
  const [finish, setFinish] = useState(template.fabrics?.[0] || 'Linen Beige');
  const [width, setWidth] = useState(template.dimensions?.w || 120);
  const [depth, setDepth] = useState(template.dimensions?.d || 70);
  const [height, setHeight] = useState(template.dimensions?.h || 75);
  const [quantity, setQuantity] = useState(1);
  const [hardware, setHardware] = useState('Standard');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const computed = Math.round(
      (template.basePrice || 200) *
        (width / 140) *
        (depth / 70) *
        (height / 80) *
        (material === 'Mahogany' ? 1.5 : material === 'Teak' ? 1.3 : 1) *
        (finish.includes('Velvet') || finish.includes('Memory') ? 1.2 : 1) *
        quantity
    );
    setPrice(computed);
  }, [template, material, finish, width, depth, height, quantity]);

  const save = () => {
    fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'saveDesign', payload: { design: { ...template, material, finish, width, depth, height, quantity, hardware, price } } })
    })
      .then((res) => res.json())
      .then(() => onSave && onSave());
  };

  const create = () => {
    const payload = {
      userId: 'u-retail-1',
      title: `${template.name} — custom`,
      templateId: template.id,
      quantity,
      estimatedPrice: price,
      specs: { material, finish, hardware, dimensions: { w: width, d: depth, h: height } },
      statusTimeline: [{ step: 'Design Confirmed', ts: Date.now() }],
      assignedWorkshop: null,
      delivery: { slot: 'Pending', status: 'Pending' }
    };

    fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'createOrder', payload })
    })
      .then((res) => res.json())
      .then(() => onOrder && onOrder());
  };

  return (
    <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        <div className="rounded-2xl bg-[#f8f3ee] p-4 border border-slate-200">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Preview</div>
              <div className="text-xl font-semibold text-slate-900">{template.name}</div>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Estimate</div>
              <div className="text-2xl font-bold text-brand-600">${price.toLocaleString()}</div>
            </div>
          </div>
          <svg viewBox="0 0 260 170" className="mx-auto w-full max-w-[330px] rounded-xl bg-white p-4 shadow-sm">
            <rect x="40" y="60" width="170" height="60" rx="18" fill="#e7d0b9" />
            <rect x="52" y="34" width="146" height="22" rx="8" fill="#b96438" opacity="0.9" />
            <rect x="50" y="118" width="152" height="18" rx="8" fill="#8f4d2d" />
            <rect x="60" y="90" width="18" height="28" rx="4" fill="#f0dfa8" />
            <rect x="183" y="90" width="18" height="28" rx="4" fill="#f0dfa8" />
          </svg>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-slate-500">Material</label>
          <select value={material} onChange={(e) => setMaterial(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            {(template.materials || ['Oak', 'Teak']).map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-slate-500">Finish / fabric</label>
          <select value={finish} onChange={(e) => setFinish(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            {(template.fabrics || ['Linen Beige', 'Satin Oak']).map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-slate-500">Width</label>
            <input type="range" min="80" max="260" value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full" />
            <div className="text-sm text-slate-600">{width} cm</div>
          </div>
          <div>
            <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-slate-500">Depth</label>
            <input type="range" min="40" max="150" value={depth} onChange={(e) => setDepth(Number(e.target.value))} className="w-full" />
            <div className="text-sm text-slate-600">{depth} cm</div>
          </div>
          <div>
            <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-slate-500">Height</label>
            <input type="range" min="40" max="120" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full" />
            <div className="text-sm text-slate-600">{height} cm</div>
          </div>
          <div>
            <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-slate-500">Quantity</label>
            <input type="number" value={quantity} min="1" onChange={(e) => setQuantity(Number(e.target.value))} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-slate-500">Hardware</label>
          <select value={hardware} onChange={(e) => setHardware(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            {['Standard', 'Brass', 'Soft-close', 'Reinforced hardware'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>

        <div className="flex gap-3">
          <button type="button" onClick={save} className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-800 hover:bg-slate-50">Save design</button>
          <button type="button" onClick={create} className="flex-1 rounded-xl bg-brand-500 px-4 py-3 font-medium text-white hover:bg-brand-600">Create order</button>
        </div>
      </div>
    </div>
  );
}
