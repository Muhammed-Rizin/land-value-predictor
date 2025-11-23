export default function RangeSlider({ label, icon: Icon, name, value, max, onChange }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 text-slate-600 group-hover:text-emerald-600 transition-colors">
          <Icon className="w-4 h-4" />
          <label className="text-sm font-semibold">{label}</label>
        </div>
        <span className="text-xs font-mono bg-white text-emerald-600 font-bold px-2 py-0.5 rounded border border-emerald-100 shadow-sm">
          {value} km
        </span>
      </div>
      <input
        type="range"
        min="0"
        max={max}
        step="0.1"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 hover:accent-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
      />
    </div>
  );
}
