import React from 'react';
import { FaUsers, FaWarehouse, FaTruck, FaMedal, FaHandshake, FaChartLine, FaCubes, FaTools } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { BiAbacus } from 'react-icons/bi';
import Link from 'next/link';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href="/">Главная</Link>
          <span className={styles.breadcrumbs_separator}>/</span>
          <span>О компании</span>
        </div>

        {/* Hero Section */}
        <div className={styles.about__hero}>
          <div className={styles.about__hero_content}>
            <h1 className={styles.about__title}>О компании ПрестижСтрой</h1>
            <p className={styles.about__subtitle}>
              Мы являемся ведущим поставщиком строительных материалов с 2008 года. 
              Наша компания специализируется на комплексных поставках строительных материалов 
              для частного и промышленного строительства.
            </p>
            <div className={styles.about__hero_stats}>
              <div className={styles.hero_stat}>
                <span className={styles.hero_stat_number}>15+</span>
                <span className={styles.hero_stat_text}>лет опыта</span>
              </div>
              <div className={styles.hero_stat}>
                <span className={styles.hero_stat_number}>50k+</span>
                <span className={styles.hero_stat_text}>клиентов</span>
              </div>
              <div className={styles.hero_stat}>
                <span className={styles.hero_stat_number}>10k+</span>
                <span className={styles.hero_stat_text}>товаров</span>
              </div>
            </div>
          </div>
          <div className={styles.about__hero_pattern}>
            <div className={styles.pattern_icon}>
              <FaCubes />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={styles.about__values}>
          <h2 className={styles.section_title}>Наши преимущества</h2>
          <div className={styles.values_grid}>
            <div className={styles.value_card}>
              <FaMedal className={styles.value_icon} />
              <h3>Гарантия качества</h3>
              <p>Все материалы сертифицированы и проходят строгий контроль качества</p>
            </div>
            <div className={styles.value_card}>
              <FaWarehouse className={styles.value_icon} />
              <h3>Собственные склады</h3>
              <p>Большие складские помещения позволяют поддерживать постоянное наличие товаров</p>
            </div>
            <div className={styles.value_card}>
              <FaTruck className={styles.value_icon} />
              <h3>Быстрая доставка</h3>
              <p>Доставляем заказы в течение 24 часов по городу и области</p>
            </div>
            <div className={styles.value_card}>
              <FaHandshake className={styles.value_icon} />
              <h3>Надёжное партнёрство</h3>
              <p>Прямые поставки от производителей и выгодные условия сотрудничества</p>
            </div>
            <div className={styles.value_card}>
              <MdSecurity className={styles.value_icon} />
              <h3>Гарантия цены</h3>
              <p>Предлагаем конкурентные цены и систему скидок для постоянных клиентов</p>
            </div>
            <div className={styles.value_card}>
              <FaUsers className={styles.value_icon} />
              <h3>Профессиональная команда</h3>
              <p>Опытные специалисты помогут с выбором материалов для вашего проекта</p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className={styles.about__info}>
          <div className={styles.info_content}>
            <h2 className={styles.section_title}>Почему выбирают нас</h2>
            <div className={styles.info_grid}>
              <div className={styles.info_item}>
                <FaTools className={styles.info_icon} />
                <h3>Комплексные поставки</h3>
                <p>Предлагаем полный спектр строительных материалов в одном месте</p>
              </div>
              <div className={styles.info_item}>
                <BiAbacus className={styles.info_icon} />
                <h3>Техническая поддержка</h3>
                <p>Консультации по подбору и использованию материалов</p>
              </div>
              <div className={styles.info_item}>
                <FaChartLine className={styles.info_icon} />
                <h3>Удобная оплата</h3>
                <p>Наличный и безналичный расчет, работа с НДС</p>
              </div>
            </div>
          </div>
          <div className={styles.info_pattern}>
            <div className={styles.pattern_icon}>
              <FaCubes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
