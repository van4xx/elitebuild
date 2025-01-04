import React, { useState } from 'react';
import { useCart } from '@/src/context/CartContext';
import { IoClose } from 'react-icons/io5';
import styles from './OrderModal.module.css';

interface OrderFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  delivery: 'courier' | 'pickup';
  payment: 'card' | 'cash';
  comment?: string;
}

interface OrderModalProps {
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ onClose }) => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    delivery: 'courier',
    payment: 'card'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Здесь будет API запрос для отправки заказа
      await new Promise(resolve => setTimeout(resolve, 1500));
      clearCart();
      setStep(4); // Успешное завершение
    } catch (error) {
      console.error('Ошибка при оформлении заказа:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className={styles.step}>
            <h3>1. Контактные данные</h3>
            <div className={styles.fields}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя *"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Телефон *"
                required
              />
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
        );

      case 2:
        return (
          <div className={styles.step}>
            <h3>2. Способ доставки</h3>
            <div className={styles.delivery_options}>
              <label className={styles.radio_card}>
                <input
                  type="radio"
                  name="delivery"
                  value="courier"
                  checked={formData.delivery === 'courier'}
                  onChange={handleChange}
                />
                <div className={styles.radio_content}>
                  <h4>Курьером</h4>
                  <p>Доставка до двери</p>
                </div>
              </label>
              <label className={styles.radio_card}>
                <input
                  type="radio"
                  name="delivery"
                  value="pickup"
                  checked={formData.delivery === 'pickup'}
                  onChange={handleChange}
                />
                <div className={styles.radio_content}>
                  <h4>Самовывоз</h4>
                  <p>Из нашего магазина</p>
                </div>
              </label>
            </div>
            {formData.delivery === 'courier' && (
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Адрес доставки *"
                required
                className={styles.address_input}
              />
            )}
          </div>
        );

      case 3:
        return (
          <div className={styles.step}>
            <h3>3. Способ оплаты</h3>
            <div className={styles.payment_options}>
              <label className={styles.radio_card}>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={formData.payment === 'card'}
                  onChange={handleChange}
                />
                <div className={styles.radio_content}>
                  <h4>Картой онлайн</h4>
                  <p>Visa, MasterCard, Мир</p>
                </div>
              </label>
              <label className={styles.radio_card}>
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={formData.payment === 'cash'}
                  onChange={handleChange}
                />
                <div className={styles.radio_content}>
                  <h4>При получении</h4>
                  <p>Наличными или картой</p>
                </div>
              </label>
            </div>
          </div>
        );

      case 4:
        return (
          <div className={styles.success}>
            <h3>Заказ успешно оформлен!</h3>
            <p>Мы свяжемся с вами в ближайшее время для подтверждения заказа.</p>
            <button 
              className={styles.close_button}
              onClick={onClose}
            >
              Закрыть
            </button>
          </div>
        );
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.phone && formData.email;
      case 2:
        return formData.delivery === 'pickup' || (formData.delivery === 'courier' && formData.address);
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close_icon} onClick={onClose}>
          <IoClose />
        </button>

        <div className={styles.progress}>
          {[1, 2, 3].map(i => (
            <div 
              key={i}
              className={`${styles.progress_step} ${step >= i ? styles.active : ''}`}
            >
              <div className={styles.step_number}>{i}</div>
              <div className={styles.step_label}>
                {i === 1 ? 'Контакты' : i === 2 ? 'Доставка' : 'Оплата'}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.content}>
          {renderStep()}
        </div>

        {step < 4 && (
          <div className={styles.footer}>
            <div className={styles.total}>
              <span>Итого к оплате:</span>
              <span className={styles.price}>{totalPrice.toLocaleString()} ₽</span>
            </div>
            <div className={styles.buttons}>
              {step > 1 && (
                <button 
                  className={styles.back_button}
                  onClick={() => setStep(prev => prev - 1)}
                >
                  Назад
                </button>
              )}
              <button
                className={styles.next_button}
                onClick={() => step === 3 ? handleSubmit() : setStep(prev => prev + 1)}
                disabled={!canProceed() || isSubmitting}
              >
                {step === 3 
                  ? (isSubmitting ? 'Оформление...' : 'Оформить заказ')
                  : 'Далее'
                }
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderModal; 