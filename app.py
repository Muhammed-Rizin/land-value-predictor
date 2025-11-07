import streamlit as st
import joblib
import pandas as pd
from src.preprocess import load_and_preprocess_data

st.title("🏡 Land Price Predictor")

model = joblib.load("models/random_forest_model.pkl")
X, _ = load_and_preprocess_data("data/land_price.csv")

land_area = st.number_input("Land area (cents)", 1.0)
distance_school = st.number_input("Distance to School (km)", 0.0)
# ... add more fields ...

if st.button("Predict"):
    new_data = pd.DataFrame({...})
    new_data = new_data.reindex(columns=X.columns, fill_value=0)
    price = model.predict(new_data)[0]
    st.success(f"Predicted Price per Cent: {price:.2f} Lakhs")
