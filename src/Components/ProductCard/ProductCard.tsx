import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaShoppingCart, FaExchangeAlt, FaRegHeart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProductCard.module.css';
import { useAppContext } from '@/src/context/AppContext';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  images: string[];
  isNew?: boolean;
  isHit?: boolean;
  discount?: number;
  inStock: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  oldPrice,
  images,
  isNew,
  isHit,
  discount,
  inStock,
}: ProductCardProps) => {
  const { 
    addToCart, 
    addToFavorites, 
    removeFromFavorites,
    addToComparison,
    isInCart,
    isInFavorites,
    isInComparison 
  } = useAppContext();

  const [isHovered, setIsHovered] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState('');

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const product = { 
      id, 
      name, 
      price, 
      oldPrice, 
      images, 
      isNew, 
      isHit, 
      discount, 
      inStock 
    };
    addToCart(product);
    showNotificationMessage('Товар добавлен в корзину');
  };

  const handleAddToCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const product = { 
      id, 
      name, 
      price, 
      oldPrice, 
      images, 
      isNew, 
      isHit, 
      discount, 
      inStock,
      specifications: {}
    };
    addToComparison(product);
    showNotificationMessage('Товар добавлен в сравнение');
  };

  const handleAddToFavorites = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const product = { 
      id, 
      name, 
      price, 
      oldPrice, 
      images, 
      isNew, 
      isHit, 
      discount, 
      inStock 
    };
    if (isInFavorites(id)) {
      removeFromFavorites(id);
      showNotificationMessage('Удалено из избранного');
    } else {
      addToFavorites(product);
      showNotificationMessage('Добавлено в избранное');
    }
  };

  const showNotificationMessage = (text: string) => {
    setNotificationText(text);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <Link href={`/product/${id}`}>
      <motion.div 
        className={styles.card}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className={styles.card_badges}>
          {isNew && <span className={`${styles.badge} ${styles.badge_new}`}>Новинка</span>}
          {isHit && <span className={`${styles.badge} ${styles.badge_hit}`}>Хит</span>}
          {discount && (
            <span className={`${styles.badge} ${styles.badge_discount}`}>-{discount}%</span>
          )}
        </div>

        <div className={styles.image_container}>
          <Image
            src={images[0]}
            alt={name}
            width={280}
            height={280}
            className={styles.product_image}
          />
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                className={styles.hover_buttons}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button 
                  className={styles.action_button}
                  onClick={handleAddToCompare}
                >
                  <FaExchangeAlt />
                  <span className={styles.tooltip}>Сравнить</span>
                </button>
                <button 
                  className={`${styles.action_button} ${isInFavorites(id) ? styles.active : ''}`}
                  onClick={handleAddToFavorites}
                >
                  {isInFavorites(id) ? <FaHeart /> : <FaRegHeart />}
                  <span className={styles.tooltip}>
                    {isInFavorites(id) ? 'В избранном' : 'В избранное'}
                  </span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.card_content}>
          <h3 className={styles.product_name}>{name}</h3>
          
          <div className={styles.price_block}>
            <div className={styles.price_content}>
              <span className={styles.current_price}>{price} ₽</span>
              {oldPrice && (
                <span className={styles.old_price}>{oldPrice} ₽</span>
              )}
            </div>
            <div className={styles.stock_status}>
              {inStock ? (
                <span className={styles.in_stock}>В наличии</span>
              ) : (
                <span className={styles.out_of_stock}>Под заказ</span>
              )}
            </div>
          </div>

          <button 
            className={styles.cart_button}
            onClick={handleAddToCart}
            disabled={!inStock}
          >
            <FaShoppingCart />
            <span>В корзину</span>
          </button>
        </div>

        <AnimatePresence>
          {showNotification && (
            <motion.div 
              className={styles.notification}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {notificationText}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default ProductCard; 