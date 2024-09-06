import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>Marg-Darshan</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo debitis veritatis doloremque hic? Facilis placeat incidunt voluptate distinctio voluptatem nihil quasi totam exercitationem voluptatibus provident. Perspiciatis labore error ipsa!
        </p>
        <div className={styles.icons}>
          
        </div>
      </div>
      <div className={styles.links}>
      <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Services</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Download App</span>
          <Link href="/">Google Play</Link>
          <Link href="/">Apple Store</Link>
          <Link href="/">Desktop</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Contact Info</span>
          <Link href="/">email@gmail.com</Link>
          <Link href="/">123456789</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer