export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-sm font-black text-white shadow-md">CHC</div>
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-900">CHC</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Captra Handies</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-slate-600 hover:text-brand-600" href="/">Home</a>
          <a className="text-sm text-slate-600 hover:text-brand-600" href="/design-studio">Design Studio</a>
          <a className="text-sm text-slate-600 hover:text-brand-600" href="/dashboard">Dashboard</a>
          <a className="text-sm text-slate-600 hover:text-brand-600" href="/b2b">Bulk Portal</a>
          <a className="text-sm text-slate-600 hover:text-brand-600" href="/admin">Admin</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">Login</button>
          <button className="rounded-xl bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600">Get quote</button>
        </div>
      </div>
    </header>
  );
}
