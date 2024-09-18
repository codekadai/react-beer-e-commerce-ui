import { API_URL } from "./config";

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      window.alert("Failed to fetch products");
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    window.alert("Error fetching products:", error);
    throw error;
  }
};
