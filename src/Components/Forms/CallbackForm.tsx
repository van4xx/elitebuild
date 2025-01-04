import React, { useState } from 'react';
import styles from './Forms.module.css';

interface CallbackFormProps {
  onClose: () => void;
}

const CallbackForm = ({ onClose }: CallbackFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    time: ''
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
        <label>Удобное время для звонка</label>
        <select
          value={formData.time}
          onChange={(e) => setFormData({...formData, time: e.target.value})}
          required
        >
          <option value="">Выберите время</option>
          <option value="morning">9:00 - 12:00</option>
          <option value="afternoon">12:00 - 15:00</option>
          <option value="evening">15:00 - 18:00</option>
        </select>
      </div>
      <button type="submit" className={styles.submit_button}>
        Заказать звонок
      </button>
    </form>
  );
};

export default CallbackForm; 