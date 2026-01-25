import { Sparkles, Trees } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative flex items-center justify-center mb-8">
        <div className="absolute w-24 h-24 bg-emerald-100 rounded-full animate-ping opacity-75"></div>
        <div className="relative z-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-emerald-100">
          <Trees className="w-10 h-10 text-emerald-600 animate-pulse" />
        </div>
      </div>

      <div className="text-center space-y-3 z-10">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
          Land<span className="text-emerald-600">Val</span> Kannur
        </h2>
        <div className="flex items-center justify-center gap-2 text-slate-500 font-medium bg-white/50 px-4 py-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-emerald-500 animate-spin" />
          <span className="animate-pulse">Waking up AI Server...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
