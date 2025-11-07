import json
import joblib
import pandas as pd
from preprocess import load_and_preprocess_data


# ---------------------------------------------------
# Load configuration
# ---------------------------------------------------
with open("config.json") as f:
    config = json.load(f)

# ---------------------------------------------------
# Load model and training structure
# ---------------------------------------------------
model = joblib.load("models/random_forest_model.pkl")
X, _ = load_and_preprocess_data(config["data_path"])

# ---------------------------------------------------
# Define new property details
# ---------------------------------------------------
new_property = {
    # --- Core land details ---
    "property_id": [5001],
    "land_area_cents": [7.25],
    "land_type_Commercial": [0],
    "land_type_Residential": [1],
    "distance_to_school_km": [0.9],
    "distance_to_airport_km": [28.0],
    "distance_to_railway_station_km": [3.5],
    "distance_to_hospital_km": [1.5],
    "distance_to_medical_college_km": [4.2],
    "distance_to_bus_stop_km": [0.3],
    "distance_to_market_km": [1.2],
    "location_name_Kannur_City": [1],
    "location_name_Thalassery": [0],
    "location_name_Taliparamba": [0],
    "location_name_Payyanur": [0],
    "location_name_Iritty": [0],
    "location_name_Mattannur": [0],
    "location_name_Panoor": [0],
    "location_name_Kuthuparamba": [0],
    "location_name_Valapattanam": [0],
    "location_name_Chokli": [0],
    "taluk_Kannur": [1],
    "taluk_Thalassery": [0],
    "taluk_Taliparamba": [0],
    "taluk_Payyanur": [0],
    "taluk_Iritty": [0],
    "village_Pallikunnu": [1],
    "village_Chalad": [0],
    "village_Dharmadam": [0],
    "village_Thottada": [0],
    "village_Azhikode": [0],
    "village_Valapattanam": [0],
    "village_Panoor": [0],
    "village_Mattannur": [0],
    "village_Kuthuparamba": [0],
    "village_Payyanur": [0],
    "village_Peravoor": [0],
    "village_Elayavoor": [0],
    "village_Thaliparamba": [0],
    "village_Kuttiyattoor": [0],
    "village_Kanhirode": [0],
    "village_Panniyannur": [0],
    "village_Kolavallur": [0],
    "village_Nediyanga": [0],
    "village_Chengalayi": [0],
    "village_Edakkad": [0],
    "village_Kodiyeri": [0],
    "village_Kadirur": [0],
    "village_Peringome": [0],
    "village_Alakode": [0],
    "village_Cherukunnu": [0],
    "latitude": [11.8805],
    "longitude": [75.3820],
}

# ---------------------------------------------------
# Prepare input for prediction
# ---------------------------------------------------
new_df = pd.DataFrame(new_property)
new_df = new_df.reindex(columns=X.columns, fill_value=0)

# ---------------------------------------------------
# Predict
# ---------------------------------------------------
predicted_price = model.predict(new_df)[0]

print("===========================================")
print("🏡 LAND PRICE PREDICTION RESULT")
print("-------------------------------------------")
print(f"Predicted Price per Cent: {predicted_price:.2f} lakhs")
print("===========================================")
