import joblib
import json
import os

# Base directory = server/
BASE_DIR = os.path.dirname(__file__)

# Import preprocess (from server/src/preprocess.py)
from src.preprocess import load_and_preprocess_data

# Load config.json inside server/
config_path = os.path.join(BASE_DIR, "config.json")
with open(config_path, "r") as f:
    config = json.load(f)

# Load trained model from server/models/
MODEL_PATH = os.path.join(BASE_DIR, "models", "random_forest_model.pkl")
model = joblib.load(MODEL_PATH)

# Load training data to get correct X columns
data_path = os.path.join(BASE_DIR, config["data_path"])
X, _ = load_and_preprocess_data(data_path)
X_columns = X.columns
