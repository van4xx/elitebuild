import React from 'react';
import Link from 'next/link';
import { FaCreditCard, FaMoneyBillWave, FaUniversity, FaShieldAlt, FaHistory, FaReceipt } from 'react-icons/fa';
import { MdPayment, MdSecurity, MdAccountBalance } from 'react-icons/md';
import { RiSecurePaymentLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import styles from './PaymentComponent.module.css';

const PaymentComponent = () => {
  return (
    <div className={styles.payment}>
      <div className={styles.payment__container}>
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href="/">Главная</Link>
          <span className={styles.breadcrumbs_separator}>/</span>
          <span>Оплата</span>
        </div>

        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>Способы оплаты</h1>
            <p className={styles.hero__subtitle}>
              Выбирайте удобный способ оплаты. Мы гарантируем безопасность всех платежей 
              и прозрачность условий.
            </p>
          </div>
          <div className={styles.hero__cards}>
            <div className={styles.payment_method}>
              <FaCreditCard className={styles.method_icon} />
              <span>Банковской картой</span>
            </div>
            <div className={styles.payment_method}>
              <FaMoneyBillWave className={styles.method_icon} />
              <span>Наличными</span>
            </div>
            <div className={styles.payment_method}>
              <FaUniversity className={styles.method_icon} />
              <span>Безналичный расчет</span>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className={styles.options}>
          <h2 className={styles.section_title}>Варианты оплаты</h2>
          <div className={styles.options_grid}>
            <div className={styles.option_card}>
              <div className={styles.option_header}>
                <FaCreditCard className={styles.option_icon} />
                <h3>Банковской картой</h3>
              </div>
              <div className={styles.option_content}>
                <p>Принимаем карты всех банков:</p>
                <ul>
                  <li>Visa</li>
                  <li>MasterCard</li>
                  <li>МИР</li>
                </ul>
                <div className={styles.option_footer}>
                  <span className={styles.commission}>Без комиссии</span>
                </div>
              </div>
            </div>

            <div className={styles.option_card}>
              <div className={styles.option_header}>
                <FaMoneyBillWave className={styles.option_icon} />
                <h3>Наличными</h3>
              </div>
              <div className={styles.option_content}>
                <p>Оплата при получении:</p>
                <ul>
                  <li>В магазине</li>
                  <li>Курьеру</li>
                  <li>На складе</li>
                </ul>
                <div className={styles.option_footer}>
                  <span className={styles.commission}>Без комиссии</span>
                </div>
              </div>
            </div>

            <div className={styles.option_card}>
              <div className={styles.option_header}>
                <FaUniversity className={styles.option_icon} />
                <h3>Безналичный расчет</h3>
              </div>
              <div className={styles.option_content}>
                <p>Для юридических лиц:</p>
                <ul>
                  <li>Счет на оплату</li>
                  <li>НДС 20%</li>
                  <li>Полный пакет документов</li>
                </ul>
                <div className={styles.option_footer}>
                  <span className={styles.commission}>Без комиссии</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className={styles.features}>
          <div className={styles.features_grid}>
            <div className={styles.feature}>
              <RiSecurePaymentLine className={styles.feature_icon} />
              <h3>Безопасные платежи</h3>
              <p>Защищенное SSL-соединение</p>
            </div>
            <div className={styles.feature}>
              <FaHistory className={styles.feature_icon} />
              <h3>История платежей</h3>
              <p>Отслеживание всех операций</p>
            </div>
            <div className={styles.feature}>
              <FaReceipt className={styles.feature_icon} />
              <h3>Документы</h3>
              <p>Чеки и акты выполненных работ</p>
            </div>
            <div className={styles.feature}>
              <RiMoneyDollarCircleLine className={styles.feature_icon} />
              <h3>Возврат средств</h3>
              <p>Быстрое оформление возврата</p>
            </div>
          </div>
        </div>

        {/* Info Blocks */}
        <div className={styles.info_blocks}>
          <div className={styles.info_block}>
            <MdSecurity className={styles.info_icon} />
            <div className={styles.info_content}>
              <h3>Безопасность платежей</h3>
              <p>Все платежи проходят через защищенное соединение и соответствуют стандартам безопасности PCI DSS</p>
            </div>
          </div>
          <div className={styles.info_block}>
            <MdAccountBalance className={styles.info_icon} />
            <div className={styles.info_content}>
              <h3>Прозрачность операций</h3>
              <p>Предоставляем полный пакет документов и чеки для бухгалтерской отчетности</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent; 