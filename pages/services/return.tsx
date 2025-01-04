import React from 'react';
import Layout from '@/src/Components/Layout/Layout';
import styles from '@/styles/Services.module.css';

const ReturnPage = () => {
  return (
    <Layout>
      <div className={styles.service}>
        <div className={styles.service__container}>
          <h1 className={styles.service__title}>Возврат товара</h1>
          
          <div className={styles.service__content}>
            <section className={styles.service__section}>
              <h2 className={styles.service__subtitle}>Условия возврата</h2>
              <p className={styles.service__text}>
                Вы можете вернуть товар в течение 14 дней с момента покупки при соблюдении следующих условий:
              </p>
              <ul className={styles.service__list}>
                <li>Сохранен товарный вид</li>
                <li>Не нарушена упаковка</li>
                <li>Сохранены все документы</li>
                <li>Товар не был в использовании</li>
              </ul>
            </section>

            <section className={styles.service__section}>
              <h2 className={styles.service__subtitle}>Порядок возврата</h2>
              <ol className={styles.service__steps}>
                <li>Заполните заявление на возврат</li>
                <li>Приложите чек и документы</li>
                <li>Доставьте товар в магазин</li>
                <li>Получите денежные средства</li>
              </ol>
            </section>

            <section className={styles.service__section}>
              <h2 className={styles.service__subtitle}>Важная информация</h2>
              <div className={styles.service__info}>
                <p>Некоторые категории товаров не подлежат возврату согласно законодательству:</p>
                <ul className={styles.service__list}>
                  <li>Товары, изготовленные на заказ</li>
                  <li>Строительные материалы с нарушенной упаковкой</li>
                  <li>Товары, бывшие в употреблении</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnPage; 