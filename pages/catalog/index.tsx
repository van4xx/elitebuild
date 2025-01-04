import React from 'react';
import dynamic from 'next/dynamic';
import CatalogPage from '@/src/Sections/CatalogPage/CatalogPage';

// Динамический импорт Layout для избежания проблем с серверным рендерингом
const Layout = dynamic(() => import('@/src/Components/Layout/Layout'), {
  ssr: false
});

const Catalog = () => {
  return (
    <Layout>
      <CatalogPage />
    </Layout>
  );
};

export default Catalog; 