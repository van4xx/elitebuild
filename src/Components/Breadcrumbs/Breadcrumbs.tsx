import React from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <Link href="/" className={styles.item}>
          Главная
        </Link>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <IoIosArrowForward className={styles.arrow} />
            {item.href ? (
              <Link href={item.href} className={styles.item}>
                {item.label}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.active}`}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs; 