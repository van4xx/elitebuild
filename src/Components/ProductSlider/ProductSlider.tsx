import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductSlider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

interface ProductSliderProps {
  title: string;
  products: any[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products }) => {
  return (
    <div className={styles.slider_section}>
      <h2 className={styles.title}>{title}</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView="auto"
        navigation
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        loop={true}
        className={styles.slider}
        breakpoints={{
          320: {
            slidesPerView: 'auto',
            spaceBetween: 10
          },
          480: {
            slidesPerView: 'auto',
            spaceBetween: 15
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 20
          }
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className={styles.slide}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider; 