import React from 'react';
import Layout from '@/src/Components/Layout/Layout';
import { useAppContext } from '@/src/context/AppContext';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/Cart.module.css';

const Cart = () => {
  const { cart, removeFromCart } = useAppContext();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Layout>
      <div className={styles.cart}>
        <div className={styles.cart__container}>
          <h1 className={styles.cart__title}>Корзина</h1>
          
          {cart.length > 0 ? (
            <div className={styles.cart__content}>
              <div className={styles.cart__items}>
                <AnimatePresence>
                  {cart.map((item) => (
                    <motion.div 
                      key={item.id}
                      className={styles.cart_item}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className={styles.item_image}>
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          width={100} 
                          height={100}
                        />
                      </div>
                      <div className={styles.item_info}>
                        <h3 className={styles.item_name}>{item.name}</h3>
                        <div className={styles.item_price}>
                          <span className={styles.current_price}>{item.price} ₽</span>
                          {item.oldPrice && (
                            <span className={styles.old_price}>{item.oldPrice} ₽</span>
                          )}
                        </div>
                      </div>
                      <div className={styles.item_actions}>
                        <button 
                          className={styles.remove_button}
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FaTrash />
                          <span>Удалить</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className={styles.cart__summary}>
                <div className={styles.summary_card}>
                  <h2 className={styles.summary_title}>Итого</h2>
                  <div className={styles.summary_row}>
                    <span>Товары ({cart.length})</span>
                    <span>{calculateTotal()} ₽</span>
                  </div>
                  <div className={styles.summary_row}>
                    <span>Доставка</span>
                    <span className={styles.free}>Бесплатно</span>
                  </div>
                  <div className={styles.total_row}>
                    <span>К оплате</span>
                    <span>{calculateTotal()} ₽</span>
                  </div>
                  <button className={styles.checkout_button}>
                    Оформить заказ
                  </button>
                  <Link href="/catalog" className={styles.continue_shopping}>
                    Продолжить покупки
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.empty_cart}>
              <div className={styles.empty_cart_content}>
                <Image 
                  src="/images/empty-cart.svg" 
                  alt="Пустая корзина" 
                  width={200} 
                  height={200}
                />
                <h2>Корзина пуста</h2>
                <p>Добавьте товары для оформления заказа</p>
                <Link href="/catalog" className={styles.catalog_link}>
                  Перейти в каталог
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;

/*
http://localhost:3000/Cart
*/