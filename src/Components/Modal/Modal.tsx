import React from 'react';
import { IoClose } from 'react-icons/io5';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modal_header}>
          <h2>{title}</h2>
          <button className={styles.close_button} onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <div className={styles.modal_content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 