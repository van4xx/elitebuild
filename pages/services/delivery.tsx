import React from 'react';
import Layout from '@/src/Components/Layout/Layout';
import styles from '@/styles/Services.module.css';

const DeliveryPage = () => {
  return (
    <Layout>
      <div className={styles.service}>
        <div className={styles.service__container}>
          <h1 className={styles.service__title}>Доставка</h1>
          
          <div className={styles.service__content}>
            <section className={styles.service__section}>
              <h2 className={styles.service__subtitle}>Условия доставки</h2>
              <p className={styles.service__text}>
                Мы осуществляем доставку строительных материалов по городу и области. 
                Стоимость доставки рассчитывается индивидуально и зависит от:
              </p>
              <ul className={styles.service__list}>
                <li>Веса и объема заказа</li>
                <li>Адреса доставки</li>
                <li>Необходимости в разгрузке</li>
                <li>Типа транспортного средства</li>
              </ul>
            </section>

            <section className={styles.service__section}>
              <h2 className={styles.service__subtitle}>Сроки доставки</h2>
              <p className={styles.service__text}>
                Доставка осуществляется в течение 1-3 рабочих дней с момента подтверждения заказа.
                При наличии товара на складе возможна доставка в день заказа.
              </p>
            </section>

            <section className={styles.service__section}>
              <h2 className={styles.service__subtitle}>Способы доставки</h2>
              <div className={styles.service__cards}>
                <div className={styles.service__card}>
                  <h3>Газель</h3>
                  <p>До 1.5 тонн</p>
                  <p>Идеально для небольших заказов</p>
                </div>
                <div className={styles.service__card}>
                  <h3>Манипулятор</h3>
                  <p>До 10 тонн</p>
                  <p>С функцией самопогрузки</p>
                </div>
                <div className={styles.service__card}>
                  <h3>Фура</h3>
                  <p>До 20 тонн</p>
                  <p>Для крупных заказов</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeliveryPage; 