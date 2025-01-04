import React, { useState } from 'react';
import styles from './PaymentModal.module.css';
import { IoClose } from "react-icons/io5";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
}

interface ContactData {
  name: string;
  phone: string;
  email: string;
}

interface PickupPoint {
  id: number;
  address: string;
  coordinates: [number, number];
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, totalAmount }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [contactData, setContactData] = useState<ContactData>({
    name: '',
    phone: '',
    email: ''
  });
  const [selectedPoint, setSelectedPoint] = useState<PickupPoint | null>(null);

  // Примерные данные пунктов выдачи (замените на реальные)
  const pickupPoints: PickupPoint[] = [
    { id: 1, address: "ул. Ленина, 1", coordinates: [55.755819, 37.617644] },
    { id: 2, address: "ул. Пушкина, 10", coordinates: [55.753215, 37.622504] },
    // Добавьте больше пунктов
  ];

  const handleContactDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    // Валидация перед переходом на следующий шаг
    if (currentStep === 1) {
      if (!contactData.name || !contactData.phone || !contactData.email) {
        alert('Пожалуйста, заполните все поля');
        return;
      }
    }
    if (currentStep === 2 && !selectedPoint) {
      alert('Пожалуйста, выберите пункт выдачи');
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handlePaymentClick = () => {
    // Здесь будет логика отправки данных на сервер и интеграция с платежной системой
    console.log('Отправка данных:', {
      contactData,
      selectedPoint,
      totalAmount
    });
    
    // Пример перехода на страницу оплаты
    // window.location.href = '/payment';
  };

  const handlePointSelect = (point: PickupPoint) => {
    setSelectedPoint(point);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Контактные данные</h3>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                value={contactData.name}
                onChange={handleContactDataChange}
                placeholder="Ваше имя"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                value={contactData.phone}
                onChange={handleContactDataChange}
                placeholder="Телефон"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                value={contactData.email}
                onChange={handleContactDataChange}
                placeholder="Email"
                className={styles.input}
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Выберите пункт выдачи</h3>
            <div className={styles.mapContainer}>
              <YMaps>
                <Map
                  defaultState={{
                    center: [55.755819, 37.617644],
                    zoom: 10
                  }}
                  width="100%"
                  height="100%"
                >
                  {pickupPoints.map(point => (
                    <Placemark
                      key={point.id}
                      geometry={point.coordinates}
                      options={{
                        preset: selectedPoint?.id === point.id 
                          ? 'islands#blueCircleDotIcon'
                          : 'islands#circleDotIcon'
                      }}
                      onClick={() => handlePointSelect(point)}
                    />
                  ))}
                </Map>
              </YMaps>
            </div>
            {selectedPoint && (
              <div className={styles.selectedPoint}>
                <p>Выбранный пункт выдачи:</p>
                <p>{selectedPoint.address}</p>
              </div>
            )}
          </div>
        );
      case 3:
        return (
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Оплата</h3>
            <div className={styles.vtbPaymentWidget}>
              {/* Здесь будет платежный виджет */}
              <div className={styles.vtbWidget}>
                <p>Платежный модуль</p>
                <p>Сумма к оплате: {totalAmount} ₽</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoClose />
        </button>
        
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Оформление заказа</h2>
          <div className={styles.steps}>
            <div className={`${styles.step} ${currentStep >= 1 ? styles.active : ''}`}>1</div>
            <div className={`${styles.stepLine} ${currentStep >= 2 ? styles.active : ''}`}></div>
            <div className={`${styles.step} ${currentStep >= 2 ? styles.active : ''}`}>2</div>
            <div className={`${styles.stepLine} ${currentStep >= 3 ? styles.active : ''}`}></div>
            <div className={`${styles.step} ${currentStep >= 3 ? styles.active : ''}`}>3</div>
          </div>
        </div>

        {renderStep()}
        
        <div className={styles.modalFooter}>
          <div className={styles.totalAmount}>
            <span>Итого к оплате:</span>
            <span className={styles.amount}>{totalAmount} ₽</span>
          </div>

          <div className={styles.buttonGroup}>
            {currentStep > 1 && (
              <button 
                className={styles.backButton}
                onClick={handlePrevStep}
              >
                Назад
              </button>
            )}
            <button 
              className={styles.nextButton}
              onClick={currentStep === 3 ? handlePaymentClick : handleNextStep}
            >
              {currentStep === 3 ? 'Оплатить' : 'Далее'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;



