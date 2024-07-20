import React from 'react';
import styles from './Footer.module.css';
import Footerdata from '../../Assets/FooterData.json'

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <p>&copy; By Jagadeesh</p>
      <ul>
        {
            Footerdata.map((obj, ind)=>{
                return <li key={ind}><a href={obj.href} target='_blank' rel="noreferrer"><img className={styles.FooterIcons} src={obj.Icon_URL} alt={obj.Alt}/></a></li>
            })
        }
      </ul>
    </div>
  )
}

export default Footer
