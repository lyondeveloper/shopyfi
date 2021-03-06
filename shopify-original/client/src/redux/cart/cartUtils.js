export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exists = cartItems.find(item => item.id === cartItemToAdd.id);

  // if exists, take that cart item and sum it 1
  if (exists) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  // if not, add to array
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const deleteItemFromCart = (cartItems, cartItem) => {
  const index = cartItems.findIndex(item => item.id === cartItem.id);

  if (cartItems[index].quantity === 1) {
    return cartItems.filter(item => item.id !== cartItem.id);
  } else {
    return cartItems.map(item =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }
};

export const clearItemFromCart = (cartItems, idToRemove) => {
  const exists = cartItems.find(item => item.id === idToRemove);

  if (exists) {
    return cartItems.filter(item => item.id !== idToRemove);
  }
};
