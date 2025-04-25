import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  isCartOpen: false,

  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.find((item) => item.id === product.id);
      const updatedCart = exists
        ? state.cart.map((item) =>
            item.id === product.id
              ? { ...item, cantidad: item.cantidad + product.cantidad }
              : item
          )
        : [...state.cart, { ...product }];

      return { cart: updatedCart, isCartOpen: true };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id && item.cantidad > 1
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0),
    })),

  clearCart: () => set({ cart: [] }),

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
}));
