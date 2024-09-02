import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}>
          <Image src='/people.png' alt='pic' width={1355} height={250}/>
        </div>
        <div className={styles.stat}>
          STATS
        </div>
      </div>
      <div>
        hgajhwdjdasdfafawdawd
      </div>

    </>
    
    
  )
}

export default About