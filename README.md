
# 🏡 Land Price Predictor

_A Machine Learning project that predicts land prices per cent ._

---

## 📘 Overview

The **Land Price Predictor** is a machine learning project that estimates the **price of land (in lakhs per cent)** based on real-world factors such as location, land area, distances to key facilities, and land type (Residential, Commercial, Agricultural, or Mixed).

This project is built using:

- 🧠 **Scikit-learn** – Machine Learning
- 🐼 **Pandas** – Data manipulation
- 🌍 **Synthetic but realistic Kannur dataset** – Created for data science modeling practice
- 💾 **Joblib** – Model persistence
- 🧰 **JSON configuration** – Easy parameter management

---


## 🗂️ Project Structure
```
land-price-predictor/
│
├── data/
│   └── land_price.csv
│
├── src/
│   ├── preprocess.py          # Data cleaning & preprocessing
│   ├── train_model.py         # Model training & evaluation
│   ├── predict.py             # Prediction for new property
│
├── models/
│   └── random_forest_model.pkl
│
├── config.json                # Configurations for file paths & hyperparameters
├── requirements.txt           # Required dependencies
├── .gitignore                 # Ignore unnecessary files
└── README.md
```

## ⚙️ Installation

### 1️⃣ Clone the Repository

````
git clone https://github.com/Muhammed-Rizin/land-price-predictor.git
cd land-price-predictor
````

### 2️⃣ Install Dependencies

```
pip install -r requirements.txt
```

### 3️⃣ Verify Dataset

Make sure `land_price.csv` exists in the `data/` folder.

---

## 🧩 Configuration (`config.json`)

This file controls the project behavior.
You can easily adjust model parameters without editing code.

```json
{
  "data_path": "data/land_price.csv",
  "test_size": 0.2,
  "random_state": 42,
  "n_estimators": 100
}
```

---

## 🧠 Model Training

To train the model on the Kannur dataset and save it:

```
python src/train_model.py
```

✅ Output:

```
✅ Model saved successfully as 'models/random_forest_model.pkl'

📊 Model Evaluation:
Mean Absolute Error (MAE): 0.42
R² Score: 0.93
```

---

## 🔮 Prediction

To predict the land price of a new property:

```bash
python src/predict.py
```

✅ Example Output:

```
===========================================
🏡 LAND PRICE PREDICTION RESULT
-------------------------------------------
Predicted Price per Cent: 2.73 lakhs
===========================================
```

---

## 🧾 Example: New Property (Kannur - Pallikunnu)

```python
new_property = {
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
    "taluk_Kannur": [1],
    "village_Pallikunnu": [1],
    "latitude": [11.8805],
    "longitude": [75.3820]
}
```

---

## 📊 Dataset Summary

| Field                   | Description                                             |
| ----------------------- | ------------------------------------------------------- |
| `property_id`           | Unique ID for the property                              |
| `location_name`         | Area in Kannur (e.g., Pallikunnu, Thalassery, Payyanur) |
| `taluk`                 | Sub-division under the district                         |
| `village`               | Local village name                                      |
| `latitude`, `longitude` | Approx geolocation                                      |
| `land_area_cents`       | Plot area in cents                                      |
| `land_type`             | Residential / Commercial / Agricultural / Mixed         |
| `distance_*`            | Distances from nearby amenities                         |
| `price_lakhs`           | Total land price (lakhs INR)                            |

---

## 🧮 Model Details

- **Algorithm:** Random Forest Regressor
- **Training Split:** 80% Train / 20% Test
- **Evaluation Metrics:**

  - Mean Absolute Error (MAE)
  - R² Score

This setup provides **strong accuracy** and resistance to overfitting, ideal for real-estate prediction problems.

---

## 🧑‍💻 Author

**Muhammed Rizin**
📍 Kerala, India
💻 Full-Stack Developer
🔗 [GitHub → Muhammed-Rizin](https://github.com/Muhammed-Rizin)
🔗 [LeetCode → muhammed-rizin](https://leetcode.com/muhammed-rizin)

---
