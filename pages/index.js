import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then((r) => r.json())
      .then((payload) => setData(payload.data))
      .catch(() => setData(null));
  }, []);

  const gallery = [
    { title: 'Nairobi Living Room', before: 'Worn loveseat', after: 'Oak modular sofa', specs: '3-seater | velvet | 190cm' },
    { title: 'School Furniture Upgrade', before: 'Old chairs', after: 'Premium batch chairs', specs: '240 units | birch | reinforced' },
    { title: 'Executive Suite', before: 'Plain desk', after: 'Solid teak desk', specs: 'Custom stain | brass hardware' }
  ];

  return (
    <div className="space-y-8">
      <section className="card-surface overflow-hidden bg-gradient-to-r from-[#fffaf6] to-white">
        <div className="grid gap-8 px-5 py-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center rounded-full border border-wood-200 bg-wood-50 px-3 py-1 text-xs font-medium text-wood-700">
              Managed custom + bulk furniture
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Furniture made to fit your space, volume, and workflow.
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 md:text-lg">
              CHC connects everyday buyers, luxury homeowners, and institutional buyers with vetted artisan workshops for bespoke design, production tracking, and doorstep delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/design-studio" className="rounded-xl bg-brand-500 px-5 py-3 text-white font-medium shadow-md hover:bg-brand-600">Start designing</Link>
              <Link href="/b2b" className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium hover:bg-slate-50">Bulk procurement</Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-8 text-sm text-slate-600">
              <div><span className="block text-2xl font-bold text-slate-900">1,200+</span>custom orders</div>
              <div><span className="block text-2xl font-bold text-slate-900">96%</span>on-time dispatch</div>
              <div><span className="block text-2xl font-bold text-slate-900">14</span>workshop partners</div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#f1e4d8] bg-gradient-to-br from-[#f7efe6] via-[#fff8f1] to-[#f7f0ea] p-4 shadow-soft">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Live configurator</p>
                  <p className="text-lg font-semibold text-slate-800">Arlo Sofa</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">In production</span>
              </div>
              <svg viewBox="0 0 260 180" className="w-full rounded-xl bg-[#faf5ef] p-3">
                <rect x="20" y="32" width="200" height="90" rx="18" fill="#e5d8cc"/>
                <rect x="33" y="20" width="170" height="20" rx="8" fill="#b76a3d" opacity="0.9"/>
                <rect x="32" y="117" width="170" height="18" rx="9" fill="#8b4d2b"/>
                <rect x="52" y="95" width="20" height="26" rx="6" fill="#f4dcc3"/>
                <rect x="168" y="95" width="20" height="26" rx="6" fill="#f4dcc3"/>
              </svg>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-500">
                <div className="rounded-xl bg-slate-50 p-2"><span className="block text-base font-semibold text-slate-900">190cm</span>width</div>
                <div className="rounded-xl bg-slate-50 p-2"><span className="block text-base font-semibold text-slate-900">86cm</span>height</div>
                <div className="rounded-xl bg-slate-50 p-2"><span className="block text-base font-semibold text-slate-900">Teak</span>material</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Segments</p>
            <h2 className="text-2xl font-bold text-slate-900">Choose your route</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Everyday buyers', summary: 'Affordable custom sofas, tables, and storage units.', cta: 'Design a home fit', href: '/design-studio' },
            { title: 'Luxury residential', summary: 'Bespoke finishes, architecture-led pieces, premium materials.', cta: 'Bespoke planning', href: '/design-studio' },
            { title: 'Bulk procurement', summary: 'Schools, offices, hospitals, and large volume furniture programs.', cta: 'Create RFQ', href: '/b2b' }
          ].map((item) => (
            <Link key={item.title} href={item.href} className="card-surface block p-5 hover:-translate-y-0.5 hover:shadow-lg transition-all">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 font-semibold">{item.title[0]}</div>
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
              <span className="mt-5 inline-block text-sm font-medium text-brand-600">{item.cta} →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="card-surface p-5 md:p-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Portfolio</p>
            <h2 className="text-2xl font-bold text-slate-900">Completed custom orders</h2>
          </div>
          <button className="text-sm font-medium text-brand-600">View all projects</button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {gallery.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-[#fbfaf8]">
              <div className="grid grid-cols-2">
                <div className="flex h-36 items-center justify-center bg-[#efebe7] text-xs text-slate-500">Before</div>
                <div className="flex h-36 items-center justify-center bg-gradient-to-br from-[#d7996b] via-[#b86437] to-[#8b4d2b] text-sm font-medium text-white">After</div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-800">{project.title}</h3>
                <p className="mt-2 text-xs text-slate-500">{project.specs}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {data?.workshops ? data.workshops.slice(0, 3).map((workshop) => (
          <div key={workshop.id} className="card-surface p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900">{workshop.name}</p>
                <p className="text-xs text-slate-500">{workshop.location}</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">{workshop.currentLoad}/{workshop.capacityPerWeek}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {workshop.specialties.map((specialty) => (
                <span key={specialty} className="rounded-full bg-slate-100 px-2 py-1 text-[10px] uppercase tracking-wide text-slate-600">{specialty}</span>
              ))}
            </div>
          </div>
        )) : null}
      </section>
    </div>
  );
}
