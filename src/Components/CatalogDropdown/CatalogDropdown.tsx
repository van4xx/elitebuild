import React, { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/src/data/categories';
import styles from './CatalogDropdown.module.css';

const CatalogDropdown: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(categories[0].id);
  const currentCategory = categories.find(c => c.id === activeCategory);

  return (
    <div className={styles.dropdown}>
      <div className={styles.categories_wrapper}>
        <div className={styles.main_categories}>
          {categories.map(category => (
            <div
              key={category.id}
              className={`${styles.category} ${activeCategory === category.id ? styles.active : ''}`}
              onMouseEnter={() => setActiveCategory(category.id)}
            >
              {category.name}
            </div>
          ))}
        </div>

        <div className={styles.subcategories_panel}>
          {currentCategory?.subcategories.map(subcategory => (
            <div key={subcategory.id} className={styles.subcategory}>
              <Link href={`/category/${subcategory.id}`}>
                {subcategory.name}
              </Link>
              {subcategory.items && (
                <div className={styles.items}>
                  {subcategory.items.map((item, index) => (
                    <Link
                      key={index}
                      href={`/category/${subcategory.id}/${index}`}
                      className={styles.item}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogDropdown; 