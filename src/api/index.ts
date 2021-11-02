import { Product } from "../types";

const API_URL = "http://localhost:3000/api/products";

export const getProducts = async (page?: number): Promise<Product[]> =>
  new Promise((resolve, reject) => {
    const url = page ? `${API_URL}?page=${page}` : API_URL;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(data.results);
        }
        reject();
      })
      .catch((err) => {
        reject(err);
      });
  });
