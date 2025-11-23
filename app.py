from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import router as PredictRouter

app = FastAPI(title="Land Price Predictor API")

# CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # You can restrict to your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(PredictRouter)

@app.get("/")
def home():
    return {"message": "Land Price Predictor API is running!"}
