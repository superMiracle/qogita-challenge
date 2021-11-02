import React from "react";
import { Product } from "../../types";

interface ListItemProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductListItem = ({
  product,
  onAddToCart,
}: ListItemProps): React.ReactElement => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };
  return (
    <tr className="hover:shadow-md flex flex-col sm:table-row-group">
      <td>
        <img src={product.imageUrl} className="max-w-xs p-8" />
      </td>
      <td className="p-4">
        <div className="flex flex-col">
          <span className="font-bold">{product.name}</span>
          <span> Brand: {product.brandName}</span>
          <span> Category: {product.categoryName}</span>
          <span>
            Price:{" "}
            <span className="font-bold">{product.recommendedRetailPrice}</span>{" "}
            {product.recommendedRetailPriceCurrency}
          </span>
        </div>
      </td>
      <td className="p-4">
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 rounded py-2 px-4 hover:opacity-70"
        >
          Add to cart
        </button>
      </td>
    </tr>
  );
};

export default ProductListItem;
