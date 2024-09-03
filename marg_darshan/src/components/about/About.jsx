import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'

const About = () => {
  return (
    <>
      <div>
        <div className={styles.img}>
          <Image src='/people.png' alt='pic' width={1355} height={250}/>
        </div>
        <div className={styles.stat}>
          <div className={styles.statbox}>
            <div className={styles.icon}>
              <Image src='/icon1.png' alt='icon' width={25} height={25}/>
            </div>
            STATS
          </div>
          <div className={styles.statbox}>
            <div className={styles.icon}>
              <Image src='/icon2.png' alt='icon' width={25} height={25}/>
            </div>
            STATS
          </div>
          <div className={styles.statbox}>
            <div className={styles.icon}>
              <Image src='/icon3.png' alt='icon' width={25} height={25}/>
            </div>
            STATS
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.aboutimage}>
              <Image src='/about.png' alt='aboutus' width={530} height={630}/>
          </div>
          <div className={styles.aboutus}>
            ABOUT US
            <p className={styles.aboutdesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi ad repudiandae mollitia inventore, maxime officiis possimus adipisci voluptatibus? Esse id numquam doloremque deserunt impedit sapiente ratione natus placeat porro.</p>
            <div className={styles.division}>
              <div className={styles.divisionp}>
                <div className={styles.abouticon}>
                  <Image src='/abouticon1.png' alt='abouticon' width={25} height={25}/>
                </div>
                ABOUT US
                <p className={styles.aboutdesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</p>
              </div>
              <div className={styles.divisionp}>
                <div className={styles.abouticon}>
                  <Image src='/abouticon2.png' alt='abouticon' width={25} height={25}/>
                </div>
                 ABOUT US
                 <p className={styles.aboutdesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facere quam suscipit magnam.</p>
              </div>
            </div>
            <div className={styles.btn}>
              <p className={styles.read}>Read More</p>
            </div>
          </div>
        </div>
      </div>
      

    </>
    
    
  )
}

export default About