import React, { useState } from 'react';
import Link from 'next/link';
import { FaBoxOpen, FaClipboardList, FaClock, FaPhoneAlt, FaFileAlt, FaTruck, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';
import { MdAssignment, MdLocalShipping, MdSecurity, MdTimeline } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import styles from './ReturnComponent.module.css';
import Modal from '@/src/Components/Modal/Modal';
import CallbackForm from '@/src/Components/Forms/CallbackForm';
import ReturnRequestForm from '@/src/Components/Forms/ReturnRequestForm';

const ReturnComponent = () => {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [isReturnModalOpen, setIsReturnModalOpen] = useState(false);

  return (
    <div className={styles.return}>
      <div className={styles.return__container}>
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href="/">Главная</Link>
          <span className={styles.breadcrumbs_separator}>/</span>
          <span>Возврат товара</span>
        </div>

        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.hero__content}>
            <div className={styles.hero__text}>
              <h1 className={styles.hero__title}>Возврат и обмен товара</h1>
              <p className={styles.hero__subtitle}>
                Мы делаем процесс возврата максимально простым и удобным для вас
              </p>
            </div>
            <div className={styles.hero__stats}>
              <div className={styles.stat_card}>
                <BiTime className={styles.stat_icon} />
                <div className={styles.stat_info}>
                  <span className={styles.stat_number}>14</span>
                  <span className={styles.stat_text}>дней на возврат</span>
                </div>
              </div>
              <div className={styles.stat_card}>
                <FaMoneyBillWave className={styles.stat_icon} />
                <div className={styles.stat_info}>
                  <span className={styles.stat_number}>24ч</span>
                  <span className={styles.stat_text}>на возврат денег</span>
                </div>
              </div>
              <div className={styles.stat_card}>
                <FaShieldAlt className={styles.stat_icon} />
                <div className={styles.stat_info}>
                  <span className={styles.stat_number}>100%</span>
                  <span className={styles.stat_text}>гарантия возврата</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className={styles.timeline}>
          <h2 className={styles.section_title}>
            <MdTimeline className={styles.title_icon} />
            Процесс возврата
          </h2>
          <div className={styles.timeline_container}>
            <div className={styles.timeline_item}>
              <div className={styles.timeline_icon}>
                <FaPhoneAlt />
              </div>
              <div className={styles.timeline_content}>
                <h3>Заявка на возврат</h3>
                <p>Позвоните нам или оформите заявку онлайн</p>
                <button 
                  className={styles.action_button}
                  onClick={() => setIsReturnModalOpen(true)}
                >
                  Оформить заявку
                </button>
              </div>
            </div>
            <div className={styles.timeline_item}>
              <div className={styles.timeline_icon}>
                <FaClipboardList />
              </div>
              <div className={styles.timeline_content}>
                <h3>Проверка товара</h3>
                <p>Подготовьте товар и документы к проверке</p>
                <div className={styles.requirements}>
                  <span>Сохранность упаковки</span>
                  <span>Товарный вид</span>
                  <span>Комплектация</span>
                </div>
              </div>
            </div>
            <div className={styles.timeline_item}>
              <div className={styles.timeline_icon}>
                <FaTruck />
              </div>
              <div className={styles.timeline_content}>
                <h3>Доставка</h3>
                <p>Привезите товар сами или мы заберем его</p>
                <div className={styles.delivery_options}>
                  <div className={styles.option}>
                    <MdLocalShipping />
                    <span>Курьером</span>
                  </div>
                  <div className={styles.option}>
                    <FaBoxOpen />
                    <span>Самовывоз</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className={styles.info_section}>
          <div className={styles.info_card}>
            <div className={styles.info_header}>
              <FaClock className={styles.info_icon} />
              <h3>Сроки возврата</h3>
            </div>
            <ul className={styles.info_list}>
              <li>14 дней на возврат товара надлежащего качества</li>
              <li>До 30 дней при обнаружении брака</li>
              <li>Возврат денег в течение 24 часов</li>
            </ul>
          </div>
          <div className={styles.info_card}>
            <div className={styles.info_header}>
              <FaFileAlt className={styles.info_icon} />
              <h3>Необходимые документы</h3>
            </div>
            <ul className={styles.info_list}>
              <li>Чек или накладная</li>
              <li>Паспорт</li>
              <li>Заявление на возврат</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.contact}>
          <div className={styles.contact_content}>
            <MdAssignment className={styles.contact_icon} />
            <div className={styles.contact_text}>
              <h2>Нужна помощь?</h2>
              <p>Наши специалисты ответят на все ваши вопросы</p>
            </div>
            <div className={styles.contact_buttons}>
              <a href="tel:+78001234567" className={styles.phone_button}>
                8 (800) 123-45-67
              </a>
              <button 
                className={styles.callback_button}
                onClick={() => setIsCallbackModalOpen(true)}
              >
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
        title="Заказать звонок"
      >
        <CallbackForm onClose={() => setIsCallbackModalOpen(false)} />
      </Modal>

      <Modal
        isOpen={isReturnModalOpen}
        onClose={() => setIsReturnModalOpen(false)}
        title="Оформление возврата"
      >
        <ReturnRequestForm onClose={() => setIsReturnModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default ReturnComponent; 