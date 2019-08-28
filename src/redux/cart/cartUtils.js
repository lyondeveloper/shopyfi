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
