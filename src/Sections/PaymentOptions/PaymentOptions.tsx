import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaCreditCard, 
  FaMoneyBillWave, 
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaFileContract,
  FaPercent,
  FaBuilding
} from 'react-icons/fa';
import styles from './PaymentOptions.module.css';

const PaymentOptions = () => {
  return (
    <section className={styles.payment}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Способы оплаты</h2>
            <p className={styles.description}>
              Выберите удобный способ оплаты заказа
            </p>
          </div>

          <div className={styles.options}>
            <motion.div 
              className={styles.option_card}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.card_image}>
                <FaCreditCard className={styles.icon} />
              </div>
              <div className={styles.card_content}>
                <h3>Банковской картой</h3>
                <p>Visa, MasterCard, МИР</p>
                <ul className={styles.features}>
                  <li>
                    <FaClock className={styles.feature_icon} />
                    Моментальное зачисление
                  </li>
                  <li>
                    <FaShieldAlt className={styles.feature_icon} />
                    Безопасная оплата
                  </li>
                  <li>
                    <FaPercent className={styles.feature_icon} />
                    Без комиссии
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className={styles.option_card}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.card_image}>
                <FaMoneyBillWave className={styles.icon} />
              </div>
              <div className={styles.card_content}>
                <h3>Наличными</h3>
                <p>При получении заказа</p>
                <ul className={styles.features}>
                  <li>
                    <FaCheckCircle className={styles.feature_icon} />
                    Оплата при доставке
                  </li>
                  <li>
                    <FaShieldAlt className={styles.feature_icon} />
                    Проверка при получении
                  </li>
                  <li>
                    <FaMoneyBillWave className={styles.feature_icon} />
                    Наличный расчет
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className={styles.option_card}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.card_image}>
                <FaFileInvoiceDollar className={styles.icon} />
              </div>
              <div className={styles.card_content}>
                <h3>Безналичный расчет</h3>
                <p>Для юридических лиц</p>
                <ul className={styles.features}>
                  <li>
                    <FaFileContract className={styles.feature_icon} />
                    Оплата по счету
                  </li>
                  <li>
                    <FaFileInvoiceDollar className={styles.feature_icon} />
                    Полный пакет документов
                  </li>
                  <li>
                    <FaBuilding className={styles.feature_icon} />
                    Работаем с НДС
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className={styles.cta}>
            <Link href="/Payment" className={styles.cta_button}>
              Подробнее об оплате
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentOptions;
