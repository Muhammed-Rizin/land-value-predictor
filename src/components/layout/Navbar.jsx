import { Trees, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Trees className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-800">
            Land<span className="text-emerald-600">Val</span> Kannur
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
          <Sparkles className="w-3 h-3" /> AI Powered Estimation
        </div>
      </div>
    </div>
  );
}
