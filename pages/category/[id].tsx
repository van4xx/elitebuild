import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/src/Components/Layout/Layout';
import CategoryPage from '@/src/Sections/CategoryPage/CategoryPage';
import { categories } from '@/src/data/categories';
import Breadcrumbs from '@/src/Components/Breadcrumbs/Breadcrumbs';

const Category = () => {
  const router = useRouter();
  const { id } = router.query;

  const currentCategory = categories.find(category => 
    category.subcategories.some(sub => sub.id === Number(id))
  );

  const currentSubcategory = currentCategory?.subcategories.find(
    sub => sub.id === Number(id)
  );

  const breadcrumbItems = currentCategory ? [
    { label: 'Каталог', href: '/catalog' },
    { label: currentCategory.name, href: `/catalog#category-${currentCategory.id}` },
    { label: currentSubcategory?.name || '' }
  ] : [];

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="container">
        <CategoryPage 
          categoryName={currentSubcategory?.name || 'Все товары'} 
          categoryId={Number(id)}
        />
      </div>
    </Layout>
  );
};

export default Category;


/*
http://localhost:3000/Category
*/