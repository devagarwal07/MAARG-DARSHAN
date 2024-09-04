import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
import Carousel from '../carousel/Carousel'


const HomePage = () => {
    const images = [
        { src: '/innerbg.png', alt: 'Image 1' },
        { src: '/bg.png', alt: 'Image 2' },
        { src: '/innerbg.png', alt: 'Image 3' },
      ];


  return (
    <div className={styles.image}>
      <Image src='/bg.png' alt='background' width={1365} height={720}/>
      <div className={styles.innerImage}>
        <Carousel/> 
        <div className={styles.text}>
            DISCOVER.LEARN.ENJOY
            <span className={styles.subtext}>
                with Marg-Darshan
            </span>
        </div>
      </div>
    </div>
  )
}

export default HomePage
