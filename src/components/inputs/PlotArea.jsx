export default function PlotArea({ label, name, value, onChange, placeholder }) {
  return (
    <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
      <div>
        <label className="block text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">
          {label}
        </label>
        <p className="text-xs text-slate-400">Total size</p>
      </div>
      <div className="flex items-center bg-white rounded-lg border border-slate-200 px-3 py-2 shadow-sm focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all w-32">
        <input
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-transparent border-none p-0 w-full text-slate-800 font-bold text-right focus:ring-0 outline-none text-lg placeholder:text-slate-300"
        />
        <span className="text-slate-400 ml-2 text-sm font-medium">cnt</span>
      </div>
    </div>
  );
}
