// Добавим метод очистки корзины
const clearCart = () => {
  setCartItems([]);
  localStorage.setItem('cart', JSON.stringify([]));
};

// Добавим в value
value = {
  ...value,
  clearCart
}; 