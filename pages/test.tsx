import React from 'react';
import Layout from '@/src/Components/Layout/Layout';
import { testProducts } from '@/src/data/testProducts';
import ProductCard from '@/src/Components/ProductCard/ProductCard';
import styles from '@/styles/Test.module.css';

const TestPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Тестовая страница</h1>
        <div className={styles.products_grid}>
          {testProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TestPage; 