import { MapPin, Trees, TrendingUp, School } from "lucide-react";
import Badge from "./Badge";

export default function PredictionCard({ prediction, formData }) {
  return (
    <div
      className={`mt-6 transition-all duration-500 ease-out ${
        prediction ? "opacity-100 translate-y-0" : "opacity-50 translate-y-4"
      }`}
    >
      {prediction ? (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
          {/* Result Header */}
          <div className="bg-emerald-600 p-6 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-emerald-100 text-sm font-medium uppercase tracking-wider mb-2">
                Estimated Total Value
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold">₹{prediction.total_price}</span>
                <span className="text-xl font-medium text-emerald-100">Lakhs</span>
              </div>
            </div>
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 -ml-10 -mt-10 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
            <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
          </div>

          {/* Details Body */}
          <div className="p-6 space-y-6">
            {/* Per Cent Box */}
            <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider">
                  Rate Per Cent
                </p>
                <p className="text-2xl font-bold text-slate-800 mt-1">
                  ₹{prediction.price_per_cent}{" "}
                  <span className="text-sm font-normal text-slate-500">Lakhs</span>
                </p>
              </div>
              <div className="text-right">
                <div className="bg-white px-3 py-1 rounded border border-slate-200 text-slate-600 text-sm font-medium shadow-sm">
                  {formData.land_area_cents} cents
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-700">Property Summary</h4>
              <div className="flex flex-wrap gap-2">
                <Badge icon={MapPin} text={formData.location_name || formData.village} />
                <Badge icon={Trees} text={formData.land_type} />
                <Badge icon={School} text={`${formData.distance_to_school_km}km to School`} />
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 flex gap-3">
              <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <p className="text-xs text-blue-800 leading-relaxed">
                This estimate is based on recent trends in <strong>{formData.village}</strong>.
                Ensure distances are accurate for the best result.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-8 text-center">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trees className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-slate-800 font-bold mb-2">Ready to Analyze</h3>
          <p className="text-slate-500 text-sm">
            Please complete the form on the left to see the estimated value.
          </p>
        </div>
      )}
    </div>
  );
}
