import React from 'react';
import Link from 'next/link';
import { FaTruck, FaBoxOpen, FaMapMarkedAlt, FaCalculator, FaClock, FaShieldAlt } from 'react-icons/fa';
import { MdLocalShipping, MdPayment, MdLocationOn } from 'react-icons/md';
import { BiPackage } from 'react-icons/bi';
import styles from './DeliveryComponent.module.css';

const DeliveryComponent = () => {
  return (
    <div className={styles.delivery}>
      <div className={styles.delivery__container}>
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href="/">Главная</Link>
          <span className={styles.breadcrumbs_separator}>/</span>
          <span>Доставка</span>
        </div>

        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>Доставка строительных материалов</h1>
            <p className={styles.hero__subtitle}>
              Быстрая и надежная доставка по городу и области. Собственный автопарк, 
              профессиональные водители и грузчики.
            </p>
            <div className={styles.hero__stats}>
              <div className={styles.stat}>
                <span className={styles.stat__number}>24/7</span>
                <span className={styles.stat__text}>Работаем без выходных</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.stat__number}>2ч</span>
                <span className={styles.stat__text}>Минимальное время доставки</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.stat__number}>500+</span>
                <span className={styles.stat__text}>Доставок ежедневно</span>
              </div>
            </div>
          </div>
          <div className={styles.hero__pattern}>
            <FaTruck className={styles.pattern__icon} />
          </div>
        </div>

        {/* Services */}
        <div className={styles.services}>
          <h2 className={styles.section_title}>Виды доставки</h2>
          <div className={styles.services_grid}>
            <div className={styles.service_card}>
              <MdLocalShipping className={styles.service_icon} />
              <h3>Экспресс-доставка</h3>
              <p>Доставка в течение 2-4 часов по городу</p>
              <span className={styles.service_price}>от 1500 ₽</span>
            </div>
            <div className={styles.service_card}>
              <FaTruck className={styles.service_icon} />
              <h3>Стандартная доставка</h3>
              <p>Доставка на следующий день</p>
              <span className={styles.service_price}>от 900 ₽</span>
            </div>
            <div className={styles.service_card}>
              <BiPackage className={styles.service_icon} />
              <h3>Самовывоз</h3>
              <p>Бесплатно со склада компании</p>
              <span className={styles.service_price}>0 ₽</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className={styles.features}>
          <div className={styles.features_grid}>
            <div className={styles.feature}>
              <FaBoxOpen className={styles.feature_icon} />
              <h3>Бережная погрузка</h3>
              <p>Профессиональные грузчики и специальное оборудование</p>
            </div>
            <div className={styles.feature}>
              <FaMapMarkedAlt className={styles.feature_icon} />
              <h3>GPS-мониторинг</h3>
              <p>Отслеживание доставки в реальном времени</p>
            </div>
            <div className={styles.feature}>
              <FaCalculator className={styles.feature_icon} />
              <h3>Точный расчет</h3>
              <p>Стоимость доставки рассчитывается автоматически</p>
            </div>
            <div className={styles.feature}>
              <FaClock className={styles.feature_icon} />
              <h3>Доставка по времени</h3>
              <p>Выбор удобного временного интервала</p>
            </div>
          </div>
        </div>

        {/* Zones */}
        <div className={styles.zones}>
          <h2 className={styles.section_title}>Зоны доставки</h2>
          <div className={styles.zones_content}>
            <div className={styles.zones_info}>
              <div className={styles.zone_card}>
                <div className={styles.zone_marker} style={{backgroundColor: '#4CAF50'}}></div>
                <div className={styles.zone_details}>
                  <h3>Зеленая зона</h3>
                  <p>Доставка в течение дня</p>
                  <span>900 ₽</span>
                </div>
              </div>
              <div className={styles.zone_card}>
                <div className={styles.zone_marker} style={{backgroundColor: '#FFC107'}}></div>
                <div className={styles.zone_details}>
                  <h3>Желтая зона</h3>
                  <p>Доставка на следующий день</p>
                  <span>1200 ₽</span>
                </div>
              </div>
              <div className={styles.zone_card}>
                <div className={styles.zone_marker} style={{backgroundColor: '#FF5722'}}></div>
                <div className={styles.zone_details}>
                  <h3>Красная зона</h3>
                  <p>Доставка через 2-3 дня</p>
                  <span>от 1500 ₽</span>
                </div>
              </div>
            </div>
            <div className={styles.zones_map}>
              <div className={styles.map_placeholder}>
                <MdLocationOn className={styles.map_icon} />
                <span>Карта зон доставки</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={styles.info_blocks}>
          <div className={styles.info_block}>
            <FaShieldAlt className={styles.info_icon} />
            <h3>Гарантии</h3>
            <ul>
              <li>Страхование груза</li>
              <li>Возмещение при повреждении</li>
              <li>Гарантия сохранности</li>
            </ul>
          </div>
          <div className={styles.info_block}>
            <MdPayment className={styles.info_icon} />
            <h3>Оплата</h3>
            <ul>
              <li>Наличный расчет</li>
              <li>Банковской картой</li>
              <li>Безналичный расчет</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryComponent; 