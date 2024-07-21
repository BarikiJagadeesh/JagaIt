import React from 'react';
import styles from './Menu.module.css';
import MenuData from '../../../Assets/MenuData.json';

const Menu = () => {
  return (
    <div className={styles.MenuContainer}>
      <ul>
        {
            MenuData.map((obj, ind)=>{
                return <li key={ind}><a href={obj.link}>{obj.MItem}</a></li>
            })
        }
      </ul>
    </div>
  )
}

export default Menu
