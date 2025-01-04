import React from 'react';
import Link from 'next/link';
import { FaTruck, FaShieldAlt, FaCreditCard, FaBoxOpen, FaHandshake, FaTools, FaQuestionCircle, FaFileAlt } from 'react-icons/fa';
import { MdLocalShipping, MdSecurity, MdPayment } from 'react-icons/md';
import styles from './ForCustomersComponent.module.css';

const ForCustomersComponent = () => {
  return (
    <div className={styles.customers}>
      <div className={styles.customers__container}>
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href="/">Главная</Link>
          <span className={styles.breadcrumbs_separator}>/</span>
          <span>Покупателям</span>
        </div>

        {/* Hero Section */}
        <div className={styles.hero}>
          <h1 className={styles.hero__title}>Информация для покупателей</h1>
          <p className={styles.hero__subtitle}>
            Всё, что нужно знать о покупках в нашем магазине: от выбора товаров до их получения
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.quick_links}>
          <div className={styles.quick_link}>
            <MdLocalShipping className={styles.quick_link__icon} />
            <span>Доставка</span>
          </div>
          <div className={styles.quick_link}>
            <MdSecurity className={styles.quick_link__icon} />
            <span>Гарантии</span>
          </div>
          <div className={styles.quick_link}>
            <MdPayment className={styles.quick_link__icon} />
            <span>Оплата</span>
          </div>
        </div>

        {/* Info Cards */}
        <div className={styles.info_grid}>
          <div className={styles.info_card}>
            <FaTruck className={styles.info_card__icon} />
            <h3>Доставка</h3>
            <ul>
              <li>Доставка по городу от 2 часов</li>
              <li>Бесплатная доставка от 30 000 ₽</li>
              <li>Доставка в регионы от 1 дня</li>
              <li>Собственный автопарк</li>
            </ul>
          </div>

          <div className={styles.info_card}>
            <FaShieldAlt className={styles.info_card__icon} />
            <h3>Гарантии</h3>
            <ul>
              <li>Гарантия производителя до 5 лет</li>
              <li>Проверка товара при получении</li>
              <li>Возврат в течение 14 дней</li>
              <li>Оригинальная продукция</li>
            </ul>
          </div>

          <div className={styles.info_card}>
            <FaCreditCard className={styles.info_card__icon} />
            <h3>Оплата</h3>
            <ul>
              <li>Наличный и безналичный расчет</li>
              <li>Оплата картой онлайн</li>
              <li>Рассрочка и кредит</li>
              <li>Работаем с НДС</li>
            </ul>
          </div>
        </div>

        {/* Features */}
        <div className={styles.features}>
          <h2 className={styles.section_title}>Наши преимущества</h2>
          <div className={styles.features_grid}>
            <div className={styles.feature}>
              <FaBoxOpen className={styles.feature__icon} />
              <h3>Широкий ассортимент</h3>
              <p>Более 10 000 товаров в наличии</p>
            </div>
            <div className={styles.feature}>
              <FaHandshake className={styles.feature__icon} />
              <h3>Индивидуальный подход</h3>
              <p>Персональный менеджер для каждого клиента</p>
            </div>
            <div className={styles.feature}>
              <FaTools className={styles.feature__icon} />
              <h3>Техническая поддержка</h3>
              <p>Консультации специалистов 24/7</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.faq}>
          <h2 className={styles.section_title}>Частые вопросы</h2>
          <div className={styles.faq_grid}>
            <div className={styles.faq_item}>
              <FaQuestionCircle className={styles.faq_icon} />
              <h3>Как оформить заказ?</h3>
              <p>Добавьте товары в корзину, заполните форму заказа или позвоните нам</p>
            </div>
            <div className={styles.faq_item}>
              <FaQuestionCircle className={styles.faq_icon} />
              <h3>Сроки доставки?</h3>
              <p>По городу 2-24 часа, по области 1-2 дня, в другие регионы 3-7 дней</p>
            </div>
            <div className={styles.faq_item}>
              <FaQuestionCircle className={styles.faq_icon} />
              <h3>Условия возврата?</h3>
              <p>14 дней на возврат товара надлежащего качества</p>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className={styles.documents}>
          <h2 className={styles.section_title}>Документы</h2>
          <div className={styles.documents_grid}>
            <a href="#" className={styles.document}>
              <FaFileAlt className={styles.document__icon} />
              <span>Политика конфиденциальности</span>
            </a>
            <a href="#" className={styles.document}>
              <FaFileAlt className={styles.document__icon} />
              <span>Пользовательское соглашение</span>
            </a>
            <a href="#" className={styles.document}>
              <FaFileAlt className={styles.document__icon} />
              <span>Условия доставки</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForCustomersComponent;
