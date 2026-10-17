import { useEffect, useState } from 'react';
import Customizer from '../components/Customizer';

export default function DesignStudioPage() {
  const [templates, setTemplates] = useState([]);
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/data')
      .then((r) => r.json())
      .then((payload) => {
        const list = payload.data.templates;
        setTemplates(list);
        setSelected(list[0]);
      });
  }, []);

  return (
    <div>
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Studio</p>
        <h1 className="text-3xl font-bold text-slate-900">Design Studio</h1>
        <p className="mt-2 text-slate-600">Build your custom piece, preview it live, and estimate the cost instantly.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_2.1fr]">
        <aside className="card-surface p-4">
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Furniture templates</h2>
          <div className="space-y-2">
            {templates.map((template) => (
              <button
                key={template.id}
                type="button"
                onClick={() => setSelected(template)}
                className={`w-full rounded-xl border p-3 text-left transition ${selected?.id === template.id ? 'border-brand-200 bg-brand-50' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-800">{template.name}</span>
                  <span className="text-xs text-slate-500">{template.type}</span>
                </div>
                <div className="mt-1 text-xs text-slate-500">From ${template.basePrice}</div>
              </button>
            ))}
          </div>
        </aside>

        <div className="card-surface p-4 md:p-6">
          {selected ? (
            <Customizer
              template={selected}
              onSave={() => setMessage('Design saved to your library.')}
              onOrder={() => setMessage('Order created successfully.')}
            />
          ) : (
            <div>Loading configurator...</div>
          )}
          {message ? <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</div> : null}
        </div>
      </div>
    </div>
  );
}
