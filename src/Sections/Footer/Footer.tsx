import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__column}>
            <h3 className={styles.footer__title}>О компании</h3>
            <Link href="/AboutCompany" className={styles.footer__link}>О нас</Link>
            <Link href="/Contacts" className={styles.footer__link}>Контакты</Link>
            <Link href="/ForCustomers" className={styles.footer__link}>Для клиентов</Link>
          </div>
          
          <div className={styles.footer__column}>
            <h3 className={styles.footer__title}>Сервисы</h3>
            <Link href="/services/delivery" className={styles.footer__link}>Доставка</Link>
            <Link href="/services/installation" className={styles.footer__link}>Монтаж</Link>
            <Link href="/services/return" className={styles.footer__link}>Возврат</Link>
          </div>
          
          <div className={styles.footer__column}>
            <h3 className={styles.footer__title}>Контакты</h3>
            <a href="tel:+79009999999" className={styles.footer__link}>+7 (900) 999-99-99</a>
            <p className={styles.footer__text}>Ежедневно с 9:00 до 20:00</p>
          </div>
        </div>
        
        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>© 2024 ПрестижСтрой. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  
  