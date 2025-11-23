import React, { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";

import TalukSelect from "./components/selectors/TalukSelect";
import VillageSelect from "./components/selectors/VillageSelect";
import LandTypeSelect from "./components/selectors/LandTypeSelect";

import RangeSlider from "./components/inputs/RangeSlider";
import TextInput from "./components/inputs/PlotArea";

import PredictionCard from "./components/display/PredictionCard";
import ErrorBox from "./components/display/ErrorBox";
import JsonPreview from "./components/display/JsonPreview";

import TALUK_VILLAGE_GEO, { TALUKS } from "./config/geoData";
import { predictLandPrice } from "./api/predict";
import {
  School,
  Plane,
  Train,
  Hospital,
  Bus,
  ShoppingBag,
  Stethoscope,
  MapPin,
  Calculator,
  Navigation,
} from "lucide-react";
import AreaName from "./components/inputs/AreaName";
import PlotArea from "./components/inputs/PlotArea";

export default function App() {
  const [formData, setFormData] = useState({
    taluk: "",
    village: "",
    location_name: "",
    land_type: "",
    land_area_cents: "",

    latitude: "",
    longitude: "",

    distance_to_school_km: 0,
    distance_to_airport_km: 0,
    distance_to_railway_station_km: 0,
    distance_to_hospital_km: 0,
    distance_to_medical_college_km: 0,
    distance_to_bus_stop_km: 0,
    distance_to_market_km: 0,
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // -----------------------------------------
  // HANDLE INPUT CHANGES
  // -----------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Taluk change resets village + coords
    if (name === "taluk") {
      setFormData((prev) => ({
        ...prev,
        taluk: value,
        village: "",
        latitude: "",
        longitude: "",
      }));
      return;
    }

    // Village change → auto-fill lat/lon
    if (name === "village") {
      const geo = TALUK_VILLAGE_GEO[formData.taluk][value];

      setFormData((prev) => ({
        ...prev,
        village: value,
        latitude: geo.lat,
        longitude: geo.lon,
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getVillageOptions = () => {
    if (!formData.taluk) return [];
    return Object.keys(TALUK_VILLAGE_GEO[formData.taluk]);
  };

  const handleSliderChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  // -----------------------------------------
  // PREDICT LAND PRICE
  // -----------------------------------------
  const handlePredict = async () => {
    setLoading(true);
    setError(null);
    setPrediction(null);

    const required = ["taluk", "village", "location_name", "land_type", "land_area_cents"];
    const missing = required.filter((f) => !formData[f]);

    if (missing.length > 0) {
      setError("Please fill all required fields.");
      setLoading(false);
      return;
    }

    try {
      const dataToSend = {
        ...formData,
      };

      const result = await predictLandPrice(dataToSend);

      setPrediction({
        total_price: result.total_price,
        price_per_cent: result.price_per_cent,
      });
    } catch (err) {
      console.error(err);
      setError("Could not reach backend. Is FastAPI running?");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT FORM SECTION */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <MapPin className="text-emerald-600 w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-800">Location & Type</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <TalukSelect taluk={formData.taluk} talukOptions={TALUKS} onChange={handleChange} />

                <VillageSelect
                  village={formData.village}
                  options={getVillageOptions()}
                  onChange={handleChange}
                  disabled={!formData.taluk}
                />

                <AreaName
                  label="Area Name"
                  name="location_name"
                  value={formData.location_name}
                  onChange={handleChange}
                  placeholder="Near Bus Stand"
                />
              </div>

              {/* Land Type */}
              <div className="mt-6">
                <LandTypeSelect
                  selected={formData.land_type}
                  setSelected={(val) => setFormData((prev) => ({ ...prev, land_type: val }))}
                />
              </div>

              {/* Land Area + Coordinates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <PlotArea
                  label="Plot Area"
                  name="land_area_cents"
                  value={formData.land_area_cents}
                  onChange={handleChange}
                  placeholder="0"
                />

                <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">
                      Coordinates
                    </label>
                    <p className="text-xs text-slate-400">Auto-filled</p>
                  </div>
                  <div className="text-right text-xs font-mono text-slate-500">
                    <div className="bg-white px-2 py-1 rounded border border-slate-200 mb-1">
                      Lat: {formData.latitude ? formData.latitude.toFixed(4) : "--"}
                    </div>
                    <div className="bg-white px-2 py-1 rounded border border-slate-200">
                      Lon: {formData.longitude ? formData.longitude.toFixed(4) : "--"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DISTANCES */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Navigation className="text-blue-600 w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-800">Nearby Amenities (KM)</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <RangeSlider
                  label="School"
                  icon={School}
                  name="distance_to_school_km"
                  value={formData.distance_to_school_km}
                  max={20}
                  onChange={handleSliderChange}
                />

                <RangeSlider
                  label="Hospital"
                  icon={Hospital}
                  name="distance_to_hospital_km"
                  value={formData.distance_to_hospital_km}
                  max={20}
                  onChange={handleSliderChange}
                />

                <RangeSlider
                  label="Market"
                  icon={ShoppingBag}
                  name="distance_to_market_km"
                  value={formData.distance_to_market_km}
                  max={10}
                  onChange={handleSliderChange}
                />

                <RangeSlider
                  label="Bus Stop"
                  icon={Bus}
                  name="distance_to_bus_stop_km"
                  value={formData.distance_to_bus_stop_km}
                  max={10}
                  onChange={handleSliderChange}
                />

                <RangeSlider
                  label="Railway Station"
                  icon={Train}
                  name="distance_to_railway_station_km"
                  value={formData.distance_to_railway_station_km}
                  max={50}
                  onChange={handleSliderChange}
                />

                <RangeSlider
                  label="Airport"
                  icon={Plane}
                  name="distance_to_airport_km"
                  value={formData.distance_to_airport_km}
                  max={100}
                  onChange={handleSliderChange}
                />

                <RangeSlider
                  label="Medical College"
                  icon={Stethoscope}
                  name="distance_to_medical_college_km"
                  value={formData.distance_to_medical_college_km}
                  max={40}
                  onChange={handleSliderChange}
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Prediction summary) */}
          <div className="lg:col-span-5 space-y-6 sticky top-24">
            <button
              onClick={handlePredict}
              disabled={loading}
              className={`
                  w-full py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-3 transition-all duration-300 transform active:scale-[0.98]
                  ${
                    loading
                      ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-emerald-500/30"
                  }
                `}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Calculating Price...
                </>
              ) : (
                <>
                  <Calculator className="w-5 h-5" /> Predict Land Value
                </>
              )}
            </button>

            <ErrorBox error={error} />

            <PredictionCard prediction={prediction} formData={formData} />

            <JsonPreview formData={formData} />
          </div>
        </div>
      </Container>
    </div>
  );
}
