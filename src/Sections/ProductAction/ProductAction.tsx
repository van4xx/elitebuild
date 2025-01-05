import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ProductAction.module.css';

const ProductAction = () => {
  return (
    <section className={styles.action}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.text_content}>
            <h2 className={styles.title}>Акции и спецпредложения</h2>
            <p className={styles.description}>
              Выгодные предложения на строительные материалы и инструменты
            </p>
          </div>

          <div className={styles.cards}>
            <motion.div 
              className={styles.card}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.card_image}>
                <Image
                  src="/images/инструменты 1_2.png"
                  alt="Инструменты со скидкой"
                  width={400}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className={styles.card_content}>
                <span className={styles.discount}>-20%</span>
                <h3>Электроинструменты</h3>
                <p>Скидки на профессиональные инструменты</p>
              </div>
            </motion.div>

            <motion.div 
              className={styles.card}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.card_image}>
                <Image
                  src="/images/Акция.png"
                  alt="Акция на стройматериалы"
                  width={400}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className={styles.card_content}>
                <span className={styles.discount}>-15%</span>
                <h3>Стройматериалы</h3>
                <p>Выгодные цены на популярные товары</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductAction;

