import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import CatalogDropdown from '../CatalogDropdown/CatalogDropdown';
import styles from './CatalogButton.module.css';

const CatalogButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div 
      className={styles.catalog_wrapper} 
      ref={menuRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href="/catalog">
        <button
          className={`${styles.catalog_button} ${isOpen ? styles.active : ''}`}
        >
          <FaBars />
          <span>Каталог</span>
        </button>
      </Link>

      {isOpen && <CatalogDropdown />}
    </div>
  );
};

export default CatalogButton; 