import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Payment.module.css';

const PaymentFail = () => {
  const router = useRouter();
  const { orderNumber, error } = router.query;

  useEffect(() => {
    // Отправляем уведомление о неудачной оплате
    if (orderNumber) {
      sendEmailNotification(orderNumber as string, 'fail');
    }
  }, [orderNumber]);

  return (
    <div className={styles.paymentResult}>
      <div className={styles.failCard}>
        <div className={styles.icon}>
          <svg viewBox="0 0 24 24" className={styles.failIcon}>
            <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </div>
        <h1>Ошибка оплаты</h1>
        <p>К сожалению, произошла ошибка при оплате заказа {orderNumber}</p>
        <p className={styles.errorMessage}>{error}</p>
        <div className={styles.actions}>
          <button 
            className={styles.secondaryButton}
            onClick={() => router.back()}
          >
            Попробовать снова
          </button>
          <button 
            className={styles.primaryButton}
            onClick={() => router.push('/')}
          >
            На главную
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail; 