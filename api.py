from fastapi import APIRouter
from schemas import LandRequest
from model_loader import model, X_columns
import pandas as pd

router = APIRouter(prefix="/api", tags=["Prediction"])

@router.get("/health", tags=["Health"])
def health_check():
    return {
        "status": "ok",
        "service": "land-price-predictor",
        "model_loaded": model is not None
    }

@router.post("/predict")
def predict_price(payload: LandRequest):
    # Convert request body to DataFrame
    df = pd.DataFrame([payload.dict()])

    # One-hot encode incoming data
    df = pd.get_dummies(df)

    # Match columns with training columns
    df = df.reindex(columns=X_columns, fill_value=0)

    # Predict
    price_per_cent = model.predict(df)[0]
    total_price = price_per_cent * payload.land_area_cents

    return {
        "price_per_cent": round(price_per_cent, 2),
        "total_price": round(total_price, 2),
    }
