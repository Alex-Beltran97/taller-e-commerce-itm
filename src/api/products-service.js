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