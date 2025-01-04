import React from 'react';
import Layout from '@/src/Components/Layout/Layout';
import ProductPageComponent from '@/src/Sections/ProductPageComponent/ProductPageComponent';
import { testProducts } from '@/src/data/testProducts';
import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Находим продукт по ID
  const product = testProducts.find(p => p.id === Number(id));

  if (!product) {
    return (
      <Layout>
        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
          <h1>Товар не найден</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ProductPageComponent product={product} />
    </Layout>
  );
};

export default ProductPage;



