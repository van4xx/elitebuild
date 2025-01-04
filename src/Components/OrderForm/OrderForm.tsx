import React, { useState } from 'react';
import { useCart } from '@/src/context/CartContext';
import styles from './OrderForm.module.css';

interface OrderFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  delivery: 'courier' | 'pickup';
  payment: 'card' | 'cash';
  comment?: string;
}

const OrderForm: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    delivery: 'courier',
    payment: 'card'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Здесь будет API запрос для отправки заказа
      await new Promise(resolve => setTimeout(resolve, 1500)); // Имитация запроса
      
      // Очищаем корзину после успешного заказа
      clearCart();
      setOrderComplete(true);
    } catch (error) {
      console.error('Ошибка при оформлении заказа:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderComplete) {
    return (
      <div className={styles.success}>
        <h2>Заказ успешно оформлен!</h2>
        <p>Мы свяжемся с вами в ближайшее время для подтверждения заказа.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.section}>
        <h3>Контактные данные</h3>
        <div className={styles.field}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше имя *"
            required
          />
        </div>
        <div className={styles.field}>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Телефон *"
            required
          />
        </div>
        <div className={styles.field}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            required
          />
        </div>
      </div>

      <div className={styles.section}>
        <h3>Способ доставки</h3>
        <div className={styles.radio_group}>
          <label>
            <input
              type="radio"
              name="delivery"
              value="courier"
              checked={formData.delivery === 'courier'}
              onChange={handleChange}
            />
            Курьером
          </label>
          <label>
            <input
              type="radio"
              name="delivery"
              value="pickup"
              checked={formData.delivery === 'pickup'}
              onChange={handleChange}
            />
            Самовывоз
          </label>
        </div>

        {formData.delivery === 'courier' && (
          <div className={styles.field}>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Адрес доставки *"
              required
            />
          </div>
        )}
      </div>

      <div className={styles.section}>
        <h3>Способ оплаты</h3>
        <div className={styles.radio_group}>
          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={formData.payment === 'card'}
              onChange={handleChange}
            />
            Картой онлайн
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={formData.payment === 'cash'}
              onChange={handleChange}
            />
            Наличными при получении
          </label>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Комментарий к заказу</h3>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Дополнительная информация к заказу"
          rows={4}
        />
      </div>

      <div className={styles.summary}>
        <div className={styles.total}>
          <span>Итого к оплате:</span>
          <span className={styles.price}>{totalPrice.toLocaleString()} ₽</span>
        </div>
        <button 
          type="submit" 
          className={styles.submit_button}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Оформление...' : 'Оформить заказ'}
        </button>
      </div>
    </form>
  );
};

export default OrderForm; 