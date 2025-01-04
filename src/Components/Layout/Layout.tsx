import React, { ReactNode } from 'react';
import Navbar from '@/src/Sections/Navbar/Navbar';
import Footer from '@/src/Sections/Footer/Footer';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 