import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { useAppContext } from '@/src/context/AppContext';
import ProductCard from '@/src/Components/ProductCard/ProductCard';
import styles from './FavoritesComponent.module.css';

const FavoritesComponent = () => {
  const { favorites, removeFromFavorites } = useAppContext();

  return (
    <div className={styles.favorites}>
      <div className={styles.favorites__container}>
        <div className={styles.favorites__header}>
          <h1 className={styles.favorites__title}>
            <FaHeart className={styles.favorites__icon} />
            Избранное
          </h1>
          <span className={styles.favorites__count}>
            {favorites.length} {favorites.length === 1 ? 'товар' : favorites.length > 1 && favorites.length < 5 ? 'товара' : 'товаров'}
          </span>
        </div>

        {favorites.length > 0 ? (
          <motion.div 
            className={styles.favorites__grid}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <AnimatePresence>
              {favorites.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={styles.favorites__item}
                >
                  <ProductCard {...product} />
                  <button
                    className={styles.remove_button}
                    onClick={() => removeFromFavorites(product.id)}
                  >
                    <FaTrash />
                    <span>Удалить</span>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className={styles.empty_state}>
            <FaHeart className={styles.empty_icon} />
            <h2>Список избранного пуст</h2>
            <p>Добавляйте товары в избранное, чтобы сохранить их на потом</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesComponent; 