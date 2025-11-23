import React from "react";

export default function Badge({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
      {Icon && <Icon className="w-3 h-3 text-slate-400" />}
      {text}
    </span>
  );
}
