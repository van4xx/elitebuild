import React, { useState } from 'react';
import { useCart } from '@/src/context/CartContext';
import OrderModal from '../OrderModal/OrderModal';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  if (cartItems.length === 0) {
    return (
      <div className={styles.empty_cart}>
        <h2>Корзина пуста</h2>
        <p>Добавьте товары для оформления заказа</p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cart_items}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.cart_item}>
              <div className={styles.item_image}>
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  width={80} 
                  height={80}
                  objectFit="contain"
                />
              </div>
              <div className={styles.item_info}>
                <h3>{item.name}</h3>
                <p className={styles.item_price}>{item.price.toLocaleString()} ₽</p>
              </div>
              <div className={styles.item_quantity}>
                <button 
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className={styles.quantity_button}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className={styles.quantity_button}
                >
                  +
                </button>
              </div>
              <div className={styles.item_total}>
                {(item.price * item.quantity).toLocaleString()} ₽
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className={styles.remove_button}
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
        <div className={styles.cart_summary}>
          <div className={styles.total}>
            <span>Итого:</span>
            <span>{totalPrice.toLocaleString()} ₽</span>
          </div>
          <button 
            className={styles.checkout_button}
            onClick={() => setIsOrderModalOpen(true)}
          >
            Оформить заказ
          </button>
        </div>
      </div>

      {isOrderModalOpen && (
        <OrderModal onClose={() => setIsOrderModalOpen(false)} />
      )}
    </>
  );
};

export default Cart; 