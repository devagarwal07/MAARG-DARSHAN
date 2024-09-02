import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>

      <div className={styles.logo}>Marg-Darshan</div>

      <div className={styles.links}>
        
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>About Us</Link>
        <Link href="/" className={styles.link}>Services</Link>
        <Link href="/" className={styles.btn}>Enroll Now</Link>

        
      </div>
    </div>
  )
}

export default Navbar
