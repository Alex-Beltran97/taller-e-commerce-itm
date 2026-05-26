import axios from "./client";

const endpoint = "/products";

export async function getProducts() {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  };
}