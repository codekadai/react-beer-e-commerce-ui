import { API_URL } from "./config";

export const fetchProductStock = async (sku) => {
  try {
    const response = await fetch(`${API_URL}/stock-price/${sku}`);
    if (!response.ok) {
      window.alert("Failed to fetch product stock and price");
      throw new Error("Failed to fetch product stock and price");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product stock and price:", error);
    window.alert("Error fetching product stock and price:", error);
    throw error;
  }
};
