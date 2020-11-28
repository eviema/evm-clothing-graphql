export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingItem) {
    // increment quantity
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // add new item, initialise quantity prop
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  ); // must exist already

  if (existingItem.quantity === 1) {
    // clear item from cart
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  // decrement quantity of item
  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
