import pandas as pd


def load_and_preprocess_data(csv_path: str):
    """Load dataset, clean it, and return processed features (X) and target (y)."""

    # Load dataset
    df = pd.read_csv(csv_path)
    df.columns = df.columns.str.strip()

    # Handle divide-by-zero safely
    df["price_per_cent"] = df["price_lakhs"] / df["land_area_cents"].replace(0, pd.NA)
    df["price_per_cent"].fillna(df["price_per_cent"].median(), inplace=True)

    # One-hot encode categorical features
    df_processed = pd.get_dummies(
        df, columns=["location_name", "taluk", "village", "land_type"], drop_first=True
    )

    # Define numeric and dummy features
    numeric_features = [
        "property_id",
        "latitude",
        "longitude",
        "land_area_cents",
        "distance_to_school_km",
        "distance_to_airport_km",
        "distance_to_railway_station_km",
        "distance_to_hospital_km",
        "distance_to_medical_college_km",
        "distance_to_bus_stop_km",
        "distance_to_market_km",
    ]

    dummy_features = [
        col
        for col in df_processed.columns
        if col.startswith(("land_type", "village", "location_name", "taluk"))
    ]

    features = [
        col for col in numeric_features if col in df_processed.columns
    ] + dummy_features

    X = df_processed[features]
    y = df_processed["price_per_cent"]

    return X, y
