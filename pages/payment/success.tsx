import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Payment.module.css';

const PaymentSuccess = () => {
  const router = useRouter();
  const { orderNumber } = router.query;

  useEffect(() => {
    // Отправляем уведомление на почту
    if (orderNumber) {
      sendEmailNotification(orderNumber as string, 'success');
    }
  }, [orderNumber]);

  return (
    <div className={styles.paymentResult}>
      <div className={styles.successCard}>
        <div className={styles.icon}>
          <svg viewBox="0 0 24 24" className={styles.successIcon}>
            <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </div>
        <h1>Оплата прошла успешно!</h1>
        <p>Номер заказа: {orderNumber}</p>
        <p>Мы отправили подтверждение на вашу почту</p>
        <div className={styles.actions}>
          <button 
            className={styles.primaryButton}
            onClick={() => router.push('/')}
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess; 