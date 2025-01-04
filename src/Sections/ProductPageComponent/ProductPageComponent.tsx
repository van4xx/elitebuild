import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaRegHeart, FaExchangeAlt, FaShoppingCart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/src/context/AppContext';
import styles from './ProductPageComponent.module.css';
import ProductSlider from '@/src/Components/ProductSlider/ProductSlider';
import { testProducts } from '@/src/data/testProducts';

interface ProductPageProps {
  product: {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    images: string[];
    description: string;
    specifications: Record<string, string>;
    inStock: boolean;
    isNew?: boolean;
    isHit?: boolean;
    discount?: number;
  };
}

const ProductPageComponent = ({ product }: ProductPageProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState('');

  const { 
    addToCart, 
    addToFavorites, 
    removeFromFavorites,
    addToComparison,
    isInCart,
    isInFavorites,
    isInComparison 
  } = useAppContext();

  const showNotificationMessage = (text: string) => {
    setNotificationText(text);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleAddToCart = () => {
    addToCart(product);
    showNotificationMessage('Товар добавлен в корзину');
  };

  const handleAddToCompare = () => {
    addToComparison(product);
    showNotificationMessage('Товар добавлен в сравнение');
  };

  const handleAddToFavorites = () => {
    if (isInFavorites(product.id)) {
      removeFromFavorites(product.id);
      showNotificationMessage('Удалено из избранного');
    } else {
      addToFavorites(product);
      showNotificationMessage('Добавлено в избранное');
    }
  };

  // Получаем рекомендации
  const getRecommendations = () => {
    return testProducts.filter(p => p.id !== product.id);
  };

  const recommendations = getRecommendations();

  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <div className={styles.product__content}>
          {/* Gallery Section */}
          <div className={styles.gallery_section}>
            <div className={styles.main_image}>
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={500}
                height={500}
                className={styles.image}
              />
              <div className={styles.badges}>
                {product.isNew && <span className={styles.badge_new}>Новинка</span>}
                {product.isHit && <span className={styles.badge_hit}>Хит</span>}
                {product.discount && (
                  <span className={styles.badge_discount}>-{product.discount}%</span>
                )}
              </div>
            </div>
            <div className={styles.thumbnails}>
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    width={100}
                    height={100}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className={styles.info_section}>
            <h1 className={styles.product_title}>{product.name}</h1>
            
            <div className={styles.price_block}>
              <div className={styles.price_content}>
                <span className={styles.current_price}>{product.price} ₽</span>
                {product.oldPrice && (
                  <span className={styles.old_price}>{product.oldPrice} ₽</span>
                )}
              </div>
              <div className={styles.stock_status}>
                {product.inStock ? (
                  <span className={styles.in_stock}>В наличии</span>
                ) : (
                  <span className={styles.out_of_stock}>Под заказ</span>
                )}
              </div>
            </div>

            <div className={styles.actions}>
              <button 
                className={styles.cart_button}
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <FaShoppingCart />
                <span>В корзину</span>
              </button>
              <button 
                className={`${styles.action_button} ${isInFavorites(product.id) ? styles.active : ''}`}
                onClick={handleAddToFavorites}
              >
                {isInFavorites(product.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
              <button 
                className={`${styles.action_button} ${isInComparison(product.id) ? styles.active : ''}`}
                onClick={handleAddToCompare}
              >
                <FaExchangeAlt />
              </button>
            </div>

            {/* Description */}
            <div className={styles.description}>
              <h2>Описание</h2>
              <p>{product.description}</p>
            </div>

            {/* Specifications */}
            <div className={styles.specifications}>
              <h2>Характеристики</h2>
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className={styles.spec_row}>
                  <span className={styles.spec_name}>{key}</span>
                  <span className={styles.spec_value}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Слайдеры с рекомендациями */}
      <ProductSlider 
        title="С этим товаром покупают" 
        products={recommendations.slice(0, 8)} 
      />
      
      <ProductSlider 
        title="Популярные товары" 
        products={recommendations.slice(4, 12)} 
      />
      
      <ProductSlider 
        title="Вам может понравиться" 
        products={recommendations.slice(8, 16)} 
      />

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
    </div>
  );
};

export default ProductPageComponent; 