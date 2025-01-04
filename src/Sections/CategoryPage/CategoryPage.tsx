import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSort, FaTools, FaWarehouse, FaCogs, FaTruck, FaChevronRight, FaFilter } from 'react-icons/fa';
import ProductCard from '@/src/Components/ProductCard/ProductCard';
import { testProducts } from '@/src/data/testProducts';
import styles from './CategoryPage.module.css';
import { categories } from '@/src/data/categories';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';

const sortOptions = [
  { value: 'popular', label: 'По популярности' },
  { value: 'price-asc', label: 'Сначала дешевле' },
  { value: 'price-desc', label: 'Сначала дороже' },
  { value: 'new', label: 'Сначала новые' },
];

const filters = {
  brands: ['Makita', 'DeWalt', 'Bosch', 'ЕвроЦемент'],
  priceRanges: [
    { min: 0, max: 1000, label: 'До 1 000 ₽' },
    { min: 1000, max: 5000, label: '1 000 - 5 000 ₽' },
    { min: 5000, max: 10000, label: '5 000 - 10 000 ₽' },
    { min: 10000, max: Infinity, label: 'Более 10 000 ₽' },
  ],
  availability: ['В наличии', 'Под заказ'],
};

const categoryIcons = {
  1: <FaTools />,
  2: <FaWarehouse />,
  3: <FaCogs />,
  4: <FaTruck />
};

const CategoryPage = ({ categoryName, categoryId }: CategoryPageProps) => {
  const [selectedSort, setSelectedSort] = useState('popular');
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [] as string[],
    priceRanges: [] as string[],
    availability: [] as string[],
  });
  const [filteredProducts, setFilteredProducts] = useState(testProducts);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const applyFilters = () => {
    let filtered = [...testProducts];

    if (selectedFilters.brands.length > 0) {
      filtered = filtered.filter(product => 
        selectedFilters.brands.includes(product.specifications['Производитель'])
      );
    }

    if (selectedFilters.priceRanges.length > 0) {
      filtered = filtered.filter(product => {
        return selectedFilters.priceRanges.some(range => {
          const [min, max] = range.split(' - ').map(price => 
            parseInt(price.replace(/[^0-9]/g, ''))
          );
          if (range.includes('Более')) {
            return product.price >= min;
          } else if (range.includes('До')) {
            return product.price <= max;
          } else {
            return product.price >= min && product.price <= max;
          }
        });
      });
    }

    if (selectedFilters.availability.length > 0) {
      filtered = filtered.filter(product => {
        const status = product.inStock ? 'В наличии' : 'Под заказ';
        return selectedFilters.availability.includes(status);
      });
    }

    switch (selectedSort) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'new':
        filtered = filtered.filter(product => product.isNew).concat(
          filtered.filter(product => !product.isNew)
        );
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedSort, selectedFilters]);

  const toggleFilter = (type: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      brands: [],
      priceRanges: [],
      availability: [],
    });
    setSelectedSort('popular');
  };

  const activeFiltersCount = 
    selectedFilters.brands.length + 
    selectedFilters.priceRanges.length + 
    selectedFilters.availability.length;

  return (
    <div className={styles.category}>
      <div className={styles.category__container}>
        <div className={styles.subcategories}>
          {categories.map((category) => (
            <div key={category.id} className={styles.category_group}>
              <h3 className={styles.category_title}>
                {categoryIcons[category.id as keyof typeof categoryIcons]}
                {category.name}
              </h3>
              <div className={styles.subcategories_list}>
                {category.subcategories.map((subcategory) => (
                  <Link 
                    key={subcategory.id}
                    href={`/category/${subcategory.id}`}
                    className={styles.subcategory_link}
                  >
                    <span>{subcategory.name}</span>
                    <FaChevronRight />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.category__header}>
          <h1 className={styles.category__title}>
            Каталог товаров
            {activeFiltersCount > 0 && (
              <span className={styles.results_count}>
                Найдено: {filteredProducts.length}
              </span>
            )}
          </h1>
          <div className={styles.sort_select}>
            <FaSort />
            <select 
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              aria-label="Сортировка товаров"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.category__content}>
          <div className={`${styles.filters_panel} ${isFiltersOpen ? styles.active : ''}`}>
            <div className={styles.filters_header}>
              <h2>Фильтры</h2>
              <button 
                className={styles.filters_close}
                onClick={() => setIsFiltersOpen(false)}
              >
                <IoClose />
              </button>
            </div>

            <div className={styles.filters_content}>
              <div className={styles.filter_group}>
                <h3>Бренд</h3>
                {filters.brands.map(brand => (
                  <label key={brand} className={styles.filter_checkbox}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.brands.includes(brand)}
                      onChange={() => toggleFilter('brands', brand)}
                    />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>

              <div className={styles.filter_group}>
                <h3>Цена</h3>
                {filters.priceRanges.map(range => (
                  <label key={range.label} className={styles.filter_checkbox}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.priceRanges.includes(range.label)}
                      onChange={() => toggleFilter('priceRanges', range.label)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>

              <div className={styles.filter_group}>
                <h3>Наличие</h3>
                {filters.availability.map(option => (
                  <label key={option} className={styles.filter_checkbox}>
                    <input
                      type="checkbox"
                      checked={selectedFilters.availability.includes(option)}
                      onChange={() => toggleFilter('availability', option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.filters_apply}>
              <button 
                className={styles.apply_button}
                onClick={() => {
                  applyFilters();
                  setIsFiltersOpen(false);
                }}
              >
                Показать результаты
              </button>
            </div>
          </div>

          <div className={styles.products_container}>
            <button 
              className={styles.mobile_filters_button}
              onClick={() => setIsFiltersOpen(true)}
            >
              <FaFilter />
              Фильтры
            </button>

            <div className={styles.products_grid}>
              <AnimatePresence>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ProductCard {...product} />
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    className={styles.no_results}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p>Товары не найдены</p>
                    <button 
                      className={styles.clear_filters}
                      onClick={clearFilters}
                    >
                      Сбросить фильтры
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div 
            className={`${styles.filters_overlay} ${isFiltersOpen ? styles.active : ''}`}
            onClick={() => setIsFiltersOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage; 