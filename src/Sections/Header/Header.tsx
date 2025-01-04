import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Основные категории */}
          <div className={styles.main_categories}>
            <motion.div 
              className={styles.category_card}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.card_content}>
                <h2>Стройматериалы</h2>
                <p>Широкий выбор материалов для строительства</p>
                <Link href={`/category/строительные-материалы`} className={styles.card_button}>
                  Перейти в каталог
                </Link>
              </div>
              <div className={styles.card_image}>
                <Image
                  src="/images/стройматериалы 2.png"
                  alt="Стройматериалы"
                  width={300}
                  height={200}
                  objectFit="cover"
                />
              </div>
            </motion.div>

            <motion.div 
              className={styles.category_card}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.card_content}>
                <h2>Инструменты</h2>
                <p>Профессиональные инструменты для любых задач</p>
                <Link href={`/category/инструменты`} className={styles.card_button}>
                  Перейти в каталог
                </Link>
              </div>
              <div className={styles.card_image}>
                <Image
                  src="/images/инструменты 1.png"
                  alt="Инструменты"
                  width={300}
                  height={200}
                  objectFit="cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Преимущества */}
          <div className={styles.advantages}>
            <motion.div 
              className={styles.advantage_card}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.advantage_icon}>
                <Image 
                  src="/images/доставка.png" 
                  alt="Быстрая доставка" 
                  width={48} 
                  height={48}
                />
              </div>
              <h3>Быстрая доставка</h3>
              <p>Доставим ваш заказ в кратчайшие сроки</p>
            </motion.div>

            <motion.div 
              className={styles.advantage_card}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.advantage_icon}>
                <Image 
                  src="/images/ассортимент.png" 
                  alt="Большой ассортимент" 
                  width={48} 
                  height={48}
                />
              </div>
              <h3>Большой ассортимент</h3>
              <p>Более 10 000 товаров в наличии</p>
            </motion.div>

            <motion.div 
              className={styles.advantage_card}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.advantage_icon}>
                <Image 
                  src="/images/цены.png" 
                  alt="Выгодные цены" 
                  width={48} 
                  height={48}
                />
              </div>
              <h3>Выгодные цены</h3>
              <p>Регулярные акции и специальные предложения</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
