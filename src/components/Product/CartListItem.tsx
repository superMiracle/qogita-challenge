import React from "react";
import { CartItemType } from "../../types";
import { useCartContext } from "../../contexts/AppContext";

interface CartListItemProps {
  item: CartItemType;
}

const CartListItem = ({ item }: CartListItemProps): React.ReactElement => {
  const { changeQuantity, removeFromCart } = useCartContext();

  const { count, product } = item;
  return (
    <tr className="flex flex-col sm:table-row">
      <td scope="row" className="border p-8">
        <img src={product.imageUrl} className="max-w-xs" />
      </td>
      <td scope="row" className="border p-4">
        <div className="flex flex-col">
          <span className="font-bold">{product.name}</span>
          <span>{product.brandName}</span>
          <span>{product.categoryName}</span>
        </div>
      </td>
      <td scope="row" className="border p-4">
        <span>
          {product.recommendedRetailPrice}
          {product.recommendedRetailPriceCurrency}
        </span>
      </td>
      <td scope="row" className="border p-4">
        {count}
      </td>
      <td scope="row" className="border p-4">
        {(count * product.recommendedRetailPrice).toFixed(2)}
        {product.recommendedRetailPriceCurrency}
      </td>
      <td scope="row" className="border p-4">
        <span className="flex flex-row">
          <button
            onClick={() => {
              changeQuantity(product, false);
            }}
            className="w-8 bg-gray-200 rounded-md hover:bg-gray-100 p-2 mr-2"
          >
            -
          </button>
          <button
            onClick={() => {
              changeQuantity(product, true);
            }}
            className="w-8 bg-gray-200 rounded-md hover:bg-gray-100 p-2 ml-2"
          >
            +
          </button>
        </span>
      </td>
      <td className="border p-4">
        <button
          onClick={() => {
            removeFromCart(product);
          }}
          className="border border-red-700 hover:opacity-70 rounded px-4 py-2"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartListItem;
