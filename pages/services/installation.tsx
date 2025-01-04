import React from 'react';
import Layout from '@/src/Components/Layout/Layout';
import styles from '@/styles/Services.module.css';

const InstallationPage = () => {
  return (
    <Layout>
      <div className={styles.service}>
        <div className={styles.service__container}>
          <h1 className={styles.service__title}>Монтаж</h1>
          
          <div className={styles.service__content}>
            <section className={styles.service__section}>
              <h2 className={styles.service__subtitle}>Наши услуги</h2>
              <p className={styles.service__text}>
                Мы предоставляем профессиональные услуги по монтажу:
              </p>
              <ul className={styles.service__list}>
                <li>Напольных покрытий</li>
                <li>Сантехники</li>
                <li>Электрики</li>
                <li>Дверей и окон</li>
                <li>Потолков</li>
              </ul>
            </section>

            <section className={styles.service__section}>
              <h2 className={styles.service__subtitle}>Преимущества</h2>
              <div className={styles.service__cards}>
                <div className={styles.service__card}>
                  <h3>Гарантия</h3>
                  <p>2 года на все работы</p>
                </div>
                <div className={styles.service__card}>
                  <h3>Опыт</h3>
                  <p>Более 10 лет на рынке</p>
                </div>
                <div className={styles.service__card}>
                  <h3>Специалисты</h3>
                  <p>Сертифицированные мастера</p>
                </div>
              </div>
            </section>

            <section className={styles.service__section}>
              <h2 className={styles.service__subtitle}>Как заказать</h2>
              <ol className={styles.service__steps}>
                <li>Оставьте заявку на сайте или позвоните нам</li>
                <li>Наш специалист свяжется с вами для уточнения деталей</li>
                <li>Мы рассчитаем стоимость работ</li>
                <li>Согласуем удобное время монтажа</li>
                <li>Выполним работы точно в срок</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InstallationPage; 