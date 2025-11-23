import React from 'react'

const AreaName = ({ label, name, value, onChange, placeholder }) => {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-lg py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium placeholder:font-normal placeholder:text-slate-400"
        />
      </div>
    </div>
  );
};

export default AreaName