import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ProductList from "../components/Product/ProductList";
import Pagination from "../components/Pagination";
import { Product } from "../types";

import { getProducts } from "../api";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  const retrieveProducts = (page: number) => {
    console.log(page);
    getProducts(page)
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNext = () => {
    retrieveProducts(page + 1);
    setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) {
      retrieveProducts(page - 1);
      setPage(page - 1);
    }
  };

  useEffect(() => {
    retrieveProducts(1);
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      handlePrev();
    }
  }, [products]);

  return (
    <Layout>
      <h1>Products</h1>
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-end mb-4">
          <Pagination
            page={page}
            onPrev={handlePrev}
            onNext={handleNext}
            isLastPage={products.length < 20}
          />
        </div>
        <ProductList products={products} />
        <div className="flex flex-row justify-end mt-4">
          <Pagination
            page={page}
            onPrev={handlePrev}
            onNext={handleNext}
            isLastPage={products.length < 20}
          />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
