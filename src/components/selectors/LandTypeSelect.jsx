import { LAND_TYPES } from "../../config/landType";

export default function LandTypeSelect({ selected, setSelected }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
        Zoning Type
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {LAND_TYPES.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelected(type.id)}
            className={`
              relative overflow-hidden rounded-xl p-3 border transition-all duration-200 flex flex-col items-center justify-center gap-2 group cursor-pointer
              ${
                selected === type.id
                  ? "bg-emerald-600 border-emerald-600 shadow-lg shadow-emerald-200 text-white"
                  : "bg-slate-50 border-slate-200 hover:bg-white hover:border-emerald-300 text-slate-600"
              }
            `}
          >
            <type.icon
              className={`w-5 h-5 ${
                selected === type.id ? "text-white" : "text-slate-400 group-hover:text-emerald-500"
              }`}
            />
            <span className="text-xs font-semibold">{type.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
