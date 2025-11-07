import json
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score
from preprocess import load_and_preprocess_data


# ---------------------------------------------------
# Load configuration
# ---------------------------------------------------
with open("config.json") as f:
    config = json.load(f)

# ---------------------------------------------------
# Load and preprocess data
# ---------------------------------------------------
X, y = load_and_preprocess_data(config["data_path"])

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=config["test_size"],
    random_state=config["random_state"]
)

# ---------------------------------------------------
# Train model
# ---------------------------------------------------
model = RandomForestRegressor(
    n_estimators=config["n_estimators"],
    random_state=config["random_state"]
)
model.fit(X_train, y_train)

# Save model
joblib.dump(model, "models/random_forest_model.pkl")
print("✅ Model saved successfully as 'models/random_forest_model.pkl'")

# ---------------------------------------------------
# Evaluate model
# ---------------------------------------------------
y_pred = model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print("\n📊 Model Evaluation:")
print(f"Mean Absolute Error (MAE): {mae:.2f}")
print(f"R² Score: {r2:.2f}")
