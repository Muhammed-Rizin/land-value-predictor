import React from "react";

export default function SelectGroup({
  label,
  name,
  value,
  options = [],
  onChange,
  disabled = false,
}) {
  return (
    <div className="w-full">
      <label className="block text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
        {label}
      </label>

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`appearance-none w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-lg py-2.5 px-4 pr-8
                      leading-tight font-medium transition-all
                      focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-1 
                      focus:ring-emerald-500 cursor-pointer
                      ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <option value="" disabled>
            Select {label}
          </option>

          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        {/* Dropdown Arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
