import React from 'react';
import Link from 'next/link';
import styles from './CatalogComponent.module.css';
import { categories } from '@/src/source';

const CatalogComponent = () => {
  if (!categories || categories.length === 0) {
    return (
      <div className={styles.catalog_list}>
        <div className={styles.catalog_loading}>
          Загрузка категорий...
        </div>
      </div>
    );
  }

  return (
    <div className={styles.catalog_list}>
      {categories.map((category, index) => (
        <Link 
          href={`/category/${category.id}`} 
          key={index}
          className={styles.catalog_item}
        >
          <div className={styles.catalog_item_icon}>
            {category.icon ? (
              <img 
                src={category.icon} 
                alt={category.name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/default-category-icon.svg';
                }}
              />
            ) : (
              <div className={styles.catalog_item_icon_placeholder} />
            )}
          </div>
          <span className={styles.catalog_item_text}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CatalogComponent;



