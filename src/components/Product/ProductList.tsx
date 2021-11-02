import React from "react";
import ProductListItem from "./ProductListItem";
import { Product } from "../../types";

import { useCartContext } from "../../contexts/AppContext";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps): React.ReactElement => {
  const { addToCart } = useCartContext();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div>
      <table className="table-auto">
        <tbody>
          {products.map((product, index) => (
            <ProductListItem
              product={product}
              onAddToCart={handleAddToCart}
              key={`product-list-item-${index}`}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
