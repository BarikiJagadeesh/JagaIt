import React from 'react'
import styles from './Header.module.css';
import Logo from '../../Assets/LogoImg1.png';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.logo}>
        <img src={Logo} alt='LOGO' className={styles.logoImg}/>
        <p className={styles.logoText}>JAGADEESH IT SOLUTIONS</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Header
