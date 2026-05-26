import http from "./client";

const enpoint = "products";

export async function getProducts() {
  try {
    const response = await http.get(enpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export async function getProductById(id) {
  try {
    const response = await http.get(`${enpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product by ID ${id}:`, error);
    throw error;
  }
};