import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import styles from './FeaturedProducts.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Перфоратор BOSCH GBH 2-26 DFR',
    price: 12990,
    image: '/images/products/perforator.jpg',
    category: 'Электроинструменты'
  },
  {
    id: 2,
    name: 'Шуруповерт MAKITA DDF484Z',
    price: 9990,
    image: '/images/products/drill.jpg',
    category: 'Электроинструменты'
  },
  {
    id: 3,
    name: 'Бетоносмеситель ЗУБР БС-120-600',
    price: 15990,
    image: '/images/products/mixer.jpg',
    category: 'Строительное оборудование'
  },
  {
    id: 4,
    name: 'Набор инструментов KRAFTOOL 27970-H131',
    price: 7990,
    image: '/images/products/toolkit.jpg',
    category: 'Ручной инструмент'
  },
  {
    id: 5,
    name: 'Сварочный аппарат РЕСАНТА САИ-190',
    price: 11990,
    image: '/images/products/welder.jpg',
    category: 'Сварочное оборудование'
  }
];

const FeaturedProducts = () => {
  return (
    <div className={styles.featured}>
      <h2 className={styles.title}>Популярные товары</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView="auto"
        navigation
        autoplay={{ delay: 5000 }}
        className={styles.slider}
      >
        {featuredProducts.map(product => (
          <SwiperSlide key={product.id} className={styles.slide}>
            <Link href={`/product/${product.id}`} className={styles.product}>
              <div className={styles.image_container}>
                <img src={product.image} alt={product.name} className={styles.image} />
              </div>
              <div className={styles.content}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.name}>{product.name}</h3>
                <span className={styles.price}>{product.price.toLocaleString()} ₽</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts; 