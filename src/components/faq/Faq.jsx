import React from 'react'
import styles from './faq.module.css'
import Image from 'next/image'
import { ArrowDown } from 'react-feather'

const Faq = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Frequently Asked Questions
      </div>
      <div className={styles.cont}> 
        <div className={styles.img}>
            <Image src='/faq.png' alt='pic' width={300} height={300}/>
        </div>
        <div className={styles.faq}>
            <div className={styles.ques}>
                How to find a topic?
                <ArrowDown className={styles.arrow} size={18} />
            </div>
            <div className={styles.ques}>
                How to find a topic?
                <ArrowDown className={styles.arrow} size={18} />
            </div>
            <div className={styles.ques}>
                How to find a topic?
                <ArrowDown className={styles.arrow} size={18} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
