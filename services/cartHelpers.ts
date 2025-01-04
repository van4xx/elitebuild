interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Получить все товары из корзины
export const getCartItems = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  
  const cartItems = localStorage.getItem('cartItems');
  return cartItems ? JSON.parse(cartItems) : [];
};

// Добавить товар в корзину
export const addToCart = (item: CartItem): CartItem[] => {
  const cartItems = getCartItems();
  
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ ...item, quantity: 1 });
  }
  
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  return cartItems;
};

// Удалить товар из корзины
export const removeFromCart = (itemId: string): CartItem[] => {
  const cartItems = getCartItems();
  const updatedItems = cartItems.filter(item => item.id !== itemId);
  localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  return updatedItems;
};

// Обновить количество товара
export const updateCartItemQuantity = (itemId: string, quantity: number): CartItem[] => {
  const cartItems = getCartItems();
  const itemToUpdate = cartItems.find(item => item.id === itemId);
  
  if (itemToUpdate) {
    itemToUpdate.quantity = quantity;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  
  return cartItems;
};

// Очистить корзину
export const clearCart = (): void => {
  localStorage.removeItem('cartItems');
};

// Получить общее количество товаров в корзине
export const getCartItemsCount = (): number => {
  const cartItems = getCartItems();
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

// Получить общую стоимость корзины
export const getCartTotal = (): number => {
  const cartItems = getCartItems();
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Проверить, есть ли товар в корзине
export const isItemInCart = (itemId: string): boolean => {
  const cartItems = getCartItems();
  return cartItems.some(item => item.id === itemId);
};

// Получить количество конкретного товара в корзине
export const getItemQuantity = (itemId: string): number => {
  const cartItems = getCartItems();
  const item = cartItems.find(item => item.id === itemId);
  return item ? item.quantity : 0;
}; 