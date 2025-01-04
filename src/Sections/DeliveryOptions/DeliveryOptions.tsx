import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaTruck, FaBox, FaWarehouse, FaCalculator } from 'react-icons/fa';
import styles from './DeliveryOptions.module.css';

const DeliveryOptions = () => {
  return (
    <section className={styles.delivery}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Варианты доставки</h2>
            <p className={styles.description}>
              Выберите удобный способ получения заказа
            </p>
          </div>

          <div className={styles.options}>
            <motion.div 
              className={styles.option_card}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.icon_wrapper}>
                <FaTruck className={styles.icon} />
              </div>
              <h3>Доставка по городу</h3>
              <p>Доставим ваш заказ в любую точку города</p>
              <ul className={styles.features}>
                <li>Доставка в день заказа</li>
                <li>Подъем на этаж</li>
                <li>Оплата при получении</li>
              </ul>
            </motion.div>

            <motion.div 
              className={styles.option_card}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.icon_wrapper}>
                <FaWarehouse className={styles.icon} />
              </div>
              <h3>Самовывоз со склада</h3>
              <p>Заберите заказ с нашего склада</p>
              <ul className={styles.features}>
                <li>Без очередей</li>
                <li>Проверка при получении</li>
                <li>Помощь с погрузкой</li>
              </ul>
            </motion.div>

            <motion.div 
              className={styles.option_card}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.icon_wrapper}>
                <FaBox className={styles.icon} />
              </div>
              <h3>Доставка по области</h3>
              <p>Доставим в любой населенный пункт области</p>
              <ul className={styles.features}>
                <li>Доставка до двери</li>
                <li>Отслеживание заказа</li>
                <li>Страховка груза</li>
              </ul>
            </motion.div>

            <motion.div 
              className={styles.option_card}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.icon_wrapper}>
                <FaCalculator className={styles.icon} />
              </div>
              <h3>Расчет стоимости</h3>
              <p>Узнайте точную стоимость доставки</p>
              <ul className={styles.features}>
                <li>Онлайн калькулятор</li>
                <li>Учет габаритов</li>
                <li>Выбор даты</li>
              </ul>
            </motion.div>
          </div>

          <div className={styles.cta}>
            <Link href="/Delivery" className={styles.cta_button}>
              Подробнее о доставке
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryOptions;
