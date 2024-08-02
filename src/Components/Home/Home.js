import React from 'react'
import styles from './Home.module.css';
// import Jaga from '../../Assets/Jagadeesh.png'
import ShopKeeper from '../../Assets/HomeBackground.png'

const Home = () => {
  console.log("Home component rendered")
  return (
    <div className={styles.HomeContainer} id='Home'>
      <p className={styles.HomeHeading}>Professional Website Design for Your Business </p>
      <div className={styles.HomeDataContainer}>
        <div className={styles.HomeTextData}>
        
          <p className={styles.subHeading}> <br/>Transforming Your Online Presence with Custom, Professional Web Design</p>

          <a href='https://wa.me/916300963789?text=Hello%2C%20I%20am%20interested%20in%20your%20services%21' className={styles.GetButton} target='_blank' rel="noreferrer">Get Started </a>
         
          </div>
        <div className={styles.HomeImageContainer}>
          <img src={ShopKeeper} alt='Shop Keeper'/>
        </div>
      </div>
      {/* <div className={styles.HomePhotos}>
          <img src={Jaga} alt='Jagadeesh-Photo' className={styles.JagaPhoto}/>
          <p className={styles.photoName}>B Jagadeesh (MCA)</p>
          <p className={styles.photoDesig}><i>Web Developer</i></p>
      </div> */}
      
    </div>
  )
}

export default Home
