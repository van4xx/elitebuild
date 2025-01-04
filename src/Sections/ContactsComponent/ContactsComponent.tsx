import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './ContactsComponent.module.css';

const ContactsComponent = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__container}>
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href="/">Главная</Link>
          <span className={styles.breadcrumbs_separator}>/</span>
          <span>Контакты</span>
        </div>

        <h1 className={styles.contacts__title}>Контакты</h1>

        {/* Info Grid */}
        <div className={styles.contacts__grid}>
          <div className={styles.contacts__card}>
            <FaPhone className={styles.contacts__icon} />
            <h3>Телефоны</h3>
            <div className={styles.contacts__info}>
              <a href="tel:+78001234567">8 (800) 123-45-67</a>
              <a href="tel:+78001234568">8 (800) 123-45-68</a>
              <p>Звонок бесплатный</p>
            </div>
          </div>

          <div className={styles.contacts__card}>
            <FaEnvelope className={styles.contacts__icon} />
            <h3>Email</h3>
            <div className={styles.contacts__info}>
              <a href="mailto:info@prestigstroy.ru">info@prestigstroy.ru</a>
              <a href="mailto:sales@prestigstroy.ru">sales@prestigstroy.ru</a>
              <p>Ответим в течение часа</p>
            </div>
          </div>

          <div className={styles.contacts__card}>
            <FaClock className={styles.contacts__icon} />
            <h3>Режим работы</h3>
            <div className={styles.contacts__info}>
              <p>Пн-Пт: 9:00 - 20:00</p>
              <p>Сб: 10:00 - 18:00</p>
              <p>Вс: выходной</p>
            </div>
          </div>

          <div className={styles.contacts__card}>
            <FaMapMarkerAlt className={styles.contacts__icon} />
            <h3>Адрес</h3>
            <div className={styles.contacts__info}>
              <p>г. Москва, ул. Строителей, д. 1</p>
              <p>Офис: 3 этаж, помещение 301</p>
              <p>Склад: территория А, корпус 2</p>
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className={styles.contacts__departments}>
          <h2 className={styles.contacts__subtitle}>Отделы</h2>
          <div className={styles.departments__grid}>
            <div className={styles.department__card}>
              <h3>Отдел продаж</h3>
              <p>По вопросам заказов и доставки</p>
              <a href="tel:+78001234567">8 (800) 123-45-67</a>
            </div>
            <div className={styles.department__card}>
              <h3>Техническая поддержка</h3>
              <p>Консультации по материалам</p>
              <a href="tel:+78001234568">8 (800) 123-45-68</a>
            </div>
            <div className={styles.department__card}>
              <h3>Бухгалтерия</h3>
              <p>Документы и оплата</p>
              <a href="tel:+78001234569">8 (800) 123-45-69</a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className={styles.contacts__map}>
          <h2 className={styles.contacts__subtitle}>Как добраться</h2>
          <div className={styles.map__container}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=..." 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsComponent;
