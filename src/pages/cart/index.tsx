import Layout from "../../components/Layout";
import { useCartContext } from "../../contexts/AppContext";
import CartListItem from "../../components/Product/CartListItem";
import { CartItemType } from "../../types";
import { Fragment } from "react";

const calculateTotalPrice = (items: CartItemType[]) => {
  let price = 0;
  items.map((item) => {
    price += item.count * item.product.recommendedRetailPrice;
  });

  return price;
};

const CartPage = () => {
  const { items } = useCartContext();

  return (
    <Layout>
      <h1 className="pb-4">Your Cart</h1>
      {items.length ? (
        <Fragment>
          <table className="table-auto border">
            <thead className="hidden sm:table-header-group">
              <tr>
                <th className="border px-4">Product</th>
                <th className="border px-4"></th>
                <th className="border px-4">Price per one</th>
                <th className="border px-4">Quantity</th>
                <th className="border px-4">Total</th>
                <th className="border px-4"></th>
                <th className="border px-4"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <CartListItem item={item} key={`cart-item-${index}`} />
              ))}
            </tbody>
          </table>
          <div className="w-full flex flex-row justify-end mt-4">
            <span>
              Total Price:{" "}
              <span className="font-bold">{calculateTotalPrice(items)}</span>
            </span>
          </div>
        </Fragment>
      ) : (
        <span> No Items </span>
      )}
    </Layout>
  );
};

export default CartPage;
