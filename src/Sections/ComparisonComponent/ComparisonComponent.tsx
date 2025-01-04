import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTrash, FaShoppingCart, FaChartBar, FaCheck, FaTimes } from 'react-icons/fa';
import { MdCompare } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/src/context/AppContext';
import styles from './ComparisonComponent.module.css';

const ComparisonComponent = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showOnlyDifferences, setShowOnlyDifferences] = useState(false);
  const { comparison, removeFromComparison, addToCart } = useAppContext();

  const handleRemoveFromComparison = (productId: number) => {
    removeFromComparison(productId);
  };

  const handleAddToCart = (product: any) => {
    addToCart(product);
  };

  // Фильтрация характеристик по различиям
  const getDifferentSpecs = () => {
    if (!comparison.length) return [];
    
    const firstProduct = comparison[0];
    const specs = Object.keys(firstProduct.specifications);
    
    return specs.filter(spec => {
      const values = comparison.map(product => product.specifications[spec]);
      return new Set(values).size > 1;
    });
  };

  const differentSpecs = getDifferentSpecs();

  return (
    <div className={styles.comparison}>
      <div className={styles.comparison__container}>
        <div className={styles.breadcrumbs}>
          <Link href="/">Главная</Link>
          <span className={styles.breadcrumbs_separator}>/</span>
          <span>Сравнение товаров</span>
        </div>

        <div className={styles.hero}>
          <div className={styles.hero__content}>
            <MdCompare className={styles.hero__icon} />
            <h1 className={styles.hero__title}>Сравнение товаров</h1>
            <p className={styles.hero__subtitle}>
              {comparison.length} {comparison.length === 1 ? 'товар' : comparison.length > 1 && comparison.length < 5 ? 'товара' : 'товаров'} в сравнении
            </p>
          </div>
        </div>

        {comparison.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.comparison_controls}>
              <div className={styles.filters}>
                <button 
                  className={`${styles.filter_button} ${showOnlyDifferences ? styles.active : ''}`}
                  onClick={() => setShowOnlyDifferences(!showOnlyDifferences)}
                >
                  {showOnlyDifferences ? 'Показать все характеристики' : 'Показать только различия'}
                </button>
              </div>
            </div>

            <div className={styles.comparison_table}>
              <div className={styles.products_row}>
                <div className={styles.empty_cell} />
                {comparison.map(product => (
                  <motion.div 
                    key={product.id}
                    className={styles.product_card}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <button 
                      className={styles.remove_button}
                      onClick={() => handleRemoveFromComparison(product.id)}
                    >
                      <FaTrash />
                    </button>
                    <div className={styles.product_image}>
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        width={200} 
                        height={200}
                        className={styles.image}
                      />
                    </div>
                    <h3 className={styles.product_name}>{product.name}</h3>
                    <div className={styles.price_block}>
                      <span className={styles.current_price}>{product.price} ₽</span>
                      {product.oldPrice && (
                        <span className={styles.old_price}>{product.oldPrice} ₽</span>
                      )}
                    </div>
                    <button 
                      className={styles.cart_button}
                      onClick={() => handleAddToCart(product)}
                    >
                      <FaShoppingCart />
                      <span>В корзину</span>
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className={styles.specs_table}>
                {Object.entries(comparison[0]?.specifications || {}).map(([key, value]) => {
                  if (showOnlyDifferences && !differentSpecs.includes(key)) return null;

                  return (
                    <div key={key} className={styles.spec_row}>
                      <div className={styles.spec_name}>{key}</div>
                      {comparison.map(product => (
                        <div 
                          key={product.id} 
                          className={`${styles.spec_value} ${differentSpecs.includes(key) ? styles.different : ''}`}
                        >
                          {product.specifications[key]}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className={styles.empty_state}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaChartBar className={styles.empty_icon} />
            <h2>Нет товаров для сравнения</h2>
            <p>Добавьте товары для сравнения их характеристик</p>
            <Link href="/catalog" className={styles.catalog_link}>
              Перейти в каталог
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ComparisonComponent; 