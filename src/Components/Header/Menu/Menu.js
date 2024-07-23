import React from 'react';
import styles from './Menu.module.css';
import MenuData from '../../../Assets/MenuData.json';

const Menu = () => {


  const [ativeInd, setIsActiveIndex] = React.useState(window.location.hash.slice(1) || "/home")

  const fnClick=(Mitem)=>{
    setIsActiveIndex(Mitem);
    console.log(window.location.hash)
  }
  return (
    <div className={styles.MenuContainer}>
      <ul>
        {
            MenuData.map((obj, ind)=>{
                return <li className={ativeInd === obj.MItem ? styles.active: " "} onClick={()=>fnClick(obj.MItem)} key={ind}><a href={obj.link}>{obj.MItem}</a></li>
            })
        }
      </ul>
    </div>
  )
}

export default Menu
