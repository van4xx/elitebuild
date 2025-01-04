import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';
import styles from './LeaveRequestForm.module.css';

const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div 
      className={styles.form_container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.form_header}>
        <h2>Оставить заявку</h2>
        <p>Заполните форму, и мы свяжемся с вами в ближайшее время</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_group}>
          <div className={styles.input_wrapper}>
            <FaUser className={styles.input_icon} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше имя"
              required
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.form_group}>
          <div className={styles.input_wrapper}>
            <FaPhone className={styles.input_icon} />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Номер телефона"
              required
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.form_group}>
          <div className={styles.input_wrapper}>
            <FaEnvelope className={styles.input_icon} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.form_group}>
          <div className={styles.input_wrapper}>
            <FaComments className={styles.input_icon} />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ваше сообщение"
              className={`${styles.input} ${styles.textarea}`}
              rows={4}
            />
          </div>
        </div>

        <motion.button
          type="submit"
          className={styles.submit_button}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Отправить заявку
        </motion.button>

        <p className={styles.privacy_notice}>
          Нажимая кнопку «Отправить заявку», вы соглашаетесь с условиями обработки персональных данных
        </p>
      </form>
    </motion.div>
  );
};

export default LeaveRequestForm;

  
  