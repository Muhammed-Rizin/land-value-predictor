from pydantic import BaseModel

class LandRequest(BaseModel):
    land_area_cents: float
    land_type: str
    taluk: str
    village: str
    location_name: str
    latitude: float
    longitude: float
    distance_to_school_km: float
    distance_to_airport_km: float
    distance_to_railway_station_km: float
    distance_to_hospital_km: float
    distance_to_medical_college_km: float
    distance_to_bus_stop_km: float
    distance_to_market_km: float
