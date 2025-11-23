# 🏡 Land Price Predictor

> **A production-ready Machine Learning + FastAPI project that predicts land price per cent for Kannur district (Kerala).**

---

## 📘 Overview

The **Land Price Predictor** is a machine learning project designed to estimate the **price of land (in lakhs per cent)** based on real-world factors such as location, land area, distances to key facilities, and land type.

This project combines data science with a modern backend to provide real-time predictions.

### 🛠️ Tech Stack

- 🧠 **Scikit-learn** – Machine Learning (Random Forest Regressor)
- ⚡ **FastAPI** – High-performance backend API
- 🐼 **Pandas** – Data manipulation & preprocessing
- 🌍 **Synthetic Dataset** – Realistic data modeled for Kannur, Kerala
- 💾 **Joblib** – Efficient model persistence
- 🧰 **JSON Config** – Centralized parameter management

---

## 🗂️ Project Structure

```text
server/
│
├── app.py                         # FastAPI main entry point
├── api.py                         # API route logic (/api/predict)
├── model_loader.py                # Utility to load model & preprocessing columns
├── schemas.py                     # Pydantic models for request validation
├── config.json                    # Project & Model configuration
│
├── src/
│   ├── preprocess.py              # Data cleaning and feature engineering
│   ├── train_model.py             # Script to train & evaluate the model
│   └── __init__.py
│
├── data/
│   └── land_price.csv             # Training Dataset
│
├── models/
│   └── random_forest_model.pkl    # Serialized ML model (generated after training)
│
└── requirements.txt               # Python dependencies
```

---

## ⚙️ Installation

Follow these steps to set up the project locally.

### 1️⃣ Clone the Repository

```
git clone https://github.com/Muhammed-Rizin/land-price-predictor.git
cd land-price-predictor
```

### 2️⃣ Install Dependencies

It is recommended to use a virtual environment.

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

## 🚀 Usage: Machine Learning Pipeline

### 🧠 1. Train the Model

Run the training script to process the data, train the Random Forest model, and save the `.pkl` file.

```
python src/train_model.py
```

**✅ Output:**

```text
✅ Model saved successfully as 'models/random_forest_model.pkl'

📊 Model Evaluation:
Mean Absolute Error (MAE): 0.42
R² Score: 0.93
```

### 🔮 2. Run Prediction (CLI)

You can test predictions directly via the command line before running the server.

```
python src/predict.py
```

**✅ Output:**

```text
===========================================
🏡 LAND PRICE PREDICTION RESULT
-------------------------------------------
Predicted Price per Cent: 2.73 lakhs
===========================================
```

---

## 🌐 Usage: API Server

### 1️⃣ Start the Server

Launch the FastAPI application using Uvicorn.

```
uvicorn app:app --reload
```

### 2️⃣ Access the Interface & Endpoints

Once the server is running, you can access the following endpoints:

| Method | Endpoint       | Description                                                                      |
| :----- | :------------- | :------------------------------------------------------------------------------- |
| `GET`  | `/docs`        | **Swagger UI** <br>Interactive dashboard to test APIs directly in the browser.   |
| `GET`  | `/redoc`       | **ReDoc** <br>Alternative, clean documentation view.                             |
| `POST` | `/api/predict` | **Prediction API** <br>Main endpoint to generate price estimates (accepts JSON). |

---

---

## 📡 API Documentation

### Predict Land Price

**Endpoint:** `POST /api/predict`

#### 📥 Request Body (Example)

```json
{
  "land_area_cents": 7.25,
  "land_type": "Residential",
  "taluk": "Kannur",
  "village": "Pallikunnu",
  "location_name": "Kannur City",
  "latitude": 11.8745,
  "longitude": 75.3704,
  "distance_to_school_km": 1.5,
  "distance_to_airport_km": 25.0,
  "distance_to_railway_station_km": 3.0,
  "distance_to_hospital_km": 2.0,
  "distance_to_medical_college_km": 5.0,
  "distance_to_bus_stop_km": 0.5,
  "distance_to_market_km": 1.0
}
```

#### 📤 Response (Example)

```json
{
  "price_per_cent": 2.73,
  "total_price": 19.79
}
```

---

## 📊 Dataset Summary

The model is trained on a realistic dataset containing the following features:

| Field                   | Description                                              |
| :---------------------- | :------------------------------------------------------- |
| `property_id`           | Unique ID for the property                               |
| `location_name`         | Area in Kannur (e.g., Pallikunnu, Thalassery)            |
| `taluk`                 | Sub-division under the district                          |
| `village`               | Local village name                                       |
| `latitude`, `longitude` | Approximate geolocation coordinates                      |
| `land_area_cents`       | Plot area in cents                                       |
| `land_type`             | Residential, Commercial, Agricultural, or Mixed          |
| `distance_*`            | Distances to amenities (School, Hospital, Airport, etc.) |
| `price_lakhs`           | **Target Variable:** Total land price (Lakhs INR)        |

---

## 🧮 Model Details

- **Algorithm:** Random Forest Regressor
- **Training Split:** 80% Train / 20% Test
- **Performance:**
  - High R² Score indicates strong correlation.
  - Low MAE ensures price estimates are close to actual market values.

---

## 🧑‍💻 Author

**Muhammed Rizin**
📍 Kerala, India
💻 Full-Stack Developer
🔗 [GitHub → Muhammed-Rizin](https://github.com/Muhammed-Rizin)
🔗 [LeetCode → muhammed-rizin](https://leetcode.com/muhammed-rizin)

---
