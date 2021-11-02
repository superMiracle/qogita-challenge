import React, { useState } from "react";
import { Product, CartItemType } from "../types";
import { createContext } from "./Context";

type CartContext = {
  items: CartItemType[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  changeQuantity: (product: Product, isAdding: boolean) => void;
};

export const [useCartContext, _CartContextProvider] =
  createContext<CartContext>();

export const CartContextProvider = ({ children }): React.ReactElement => {
  const [items, setItems] = useState<CartItemType[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = items.find(
      (item) => item.product.gtin === product.gtin
    );
    let newItems = items;
    if (existingItem) {
      newItems = items.map((item) => {
        if (item.product.gtin === existingItem.product.gtin) {
          return { count: item.count++, product };
        }
        return item;
      });
    } else {
      newItems.push({ count: 1, product });
    }

    setItems(newItems);
  };

  const removeFromCart = (product: Product) => {
    const newItems = items.filter((item) => item.product.gtin !== product.gtin);
    setItems(newItems);
  };

  const changeQuantity = (product: Product, isAdding: boolean) => {
    const newItems: CartItemType[] = [];
    items.map((item) => {
      if (item.product.gtin === product.gtin) {
        const newCount = isAdding ? item.count + 1 : item.count - 1;
        if (newCount) {
          newItems.push({
            count: newCount,
            product,
          });
        }
      } else {
        newItems.push(item);
      }
    });

    setItems(newItems);
  };

  const cartContext = {
    items,
    addToCart,
    removeFromCart,
    changeQuantity,
  };

  return (
    <_CartContextProvider value={cartContext}>{children}</_CartContextProvider>
  );
};
