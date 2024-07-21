import React from 'react'
import styles from './Home.module.css';
import Jaga from '../../Assets/Jagadeesh.png'

const Home = () => {
  return (
    <div className={styles.HomeContainer} id='Home'>
      <p className={styles.HomeHeading}>Professional Website Design for Your Business</p>
      <p className={styles.subHeading}><h3>Welcome to Jagadeesh IT Solutions</h3> <br/>Transforming Your Online Presence with Custom, Professional Web Design</p>
      <p>We believe that every small business deserves a strong online presence. Our mission is to help you succeed in the digital landscape by creating a professional and effective online platform.</p>
      <div className={styles.HomePhotos}>
          <img src={Jaga} alt='Jagadeesh-Photo' className={styles.JagaPhoto}/>
          <p className={styles.photoName}>B Jagadeesh (MCA)</p>
          <p className={styles.photoDesig}><i>Web Developer</i></p>
      </div>
      
    </div>
  )
}

export default Home
