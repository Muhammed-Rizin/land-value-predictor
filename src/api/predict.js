const API_URL = import.meta.env.VITE_API_URL;
export async function predictLandPrice(payload) {
  const res = await fetch(`${API_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Backend Error");

  return res.json();
}
