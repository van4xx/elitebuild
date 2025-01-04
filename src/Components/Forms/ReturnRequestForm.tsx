import React, { useState } from 'react';
import styles from './Forms.module.css';

interface ReturnRequestFormProps {
  onClose: () => void;
}

const ReturnRequestForm = ({ onClose }: ReturnRequestFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orderNumber: '',
    reason: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_group}>
        <label>Ваше имя</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Иван Иванов"
          required
        />
      </div>
      <div className={styles.form_group}>
        <label>Номер телефона</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          placeholder="+7 (___) ___-__-__"
          required
        />
      </div>
      <div className={styles.form_group}>
        <label>Номер заказа</label>
        <input
          type="text"
          value={formData.orderNumber}
          onChange={(e) => setFormData({...formData, orderNumber: e.target.value})}
          placeholder="Например: 123456"
          required
        />
      </div>
      <div className={styles.form_group}>
        <label>Причина возврата</label>
        <select
          value={formData.reason}
          onChange={(e) => setFormData({...formData, reason: e.target.value})}
          required
        >
          <option value="">Выберите причину</option>
          <option value="defect">Брак/Дефект</option>
          <option value="size">Не подошел размер</option>
          <option value="appearance">Не соответствует описанию</option>
          <option value="other">Другое</option>
        </select>
      </div>
      <div className={styles.form_group}>
        <label>Описание проблемы</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          placeholder="Опишите подробнее причину возврата..."
          rows={4}
          required
        />
      </div>
      <button type="submit" className={styles.submit_button}>
        Отправить заявку
      </button>
    </form>
  );
};

export default ReturnRequestForm; 