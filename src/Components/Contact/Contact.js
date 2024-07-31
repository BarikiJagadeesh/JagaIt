import React from 'react';
import styles from './Contact.module.css';
import contactData from "../../Assets/Contacts.json";
import { animated } from 'react-spring';
import useAnimateOnScroll from '../../Utils/useAnimateOnScroll';


const Contact = () => {

  const [refContact, animateContact] = useAnimateOnScroll({
    triggerOnce:false,
    threshold:0.1,
    animationProps:(inView)=>({
      transform:inView?'translateX(0px)':'translateX(-50px)'
    })
  })


  const [refLocation, animteLocation] =useAnimateOnScroll({
    triggerOnce:false,
    threshold:0.1,
    animationProps:(inView)=>({
      transform:inView?'translateX(0px)':'translateX(50px)'
    })
  })

  const [refForm, animateForm] =useAnimateOnScroll({
    triggerOnce:false,
    threshold:0.1,
    animationProps:(inView)=>({
      transform:inView?'translateX(0px)':'translateX(-50px)'
    })
  })
    
  return (
    <div className={styles.contactContainer  }  id='Contact'>
      <p className={styles.ContactHeading}>Contact Us</p>

      <div className={styles.contactBody}>
        
        <div className={styles.contactDetails}>
          <animated.ul ref={refContact} style={animateContact} className={`${styles.Animated_section}`}>
            {
              contactData.map((obj, ind)=>{
                return (
                  <li key={ind}><img className={styles.conIcon} src={obj.Icon_URL} alt={obj.alt}/><b>{obj.Name}</b>: <a rel="noreferrer" href={obj.href}  target='_blank' >{obj.Value1}</a> {obj.Value2}</li>
                )
              })
            }
          </animated.ul>
          <animated.iframe ref={refLocation} style={animteLocation} className={`${styles.Animated_section}`} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d420.595199811748!2d77.10396796620796!3d15.633023935573219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1721461388772!5m2!1sen!2sin" width="400" height="300"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Map Location'></animated.iframe>
        </div>
        <div>
          <animated.iframe ref={refForm} style={animateForm} className={` ${styles.ContactForm} ${styles.Animated_section}`} title='Contact Us' width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAATTaHyVUQVhHVVlPSlNYWlpZOTVGUUY2MjZSSVg1Wi4u&embed=true" frameBorder="0" marginWidth="0" marginHeight="0"  allowFullScreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </animated.iframe>
      </div>
      </div>
      
    </div>
  )
}

export default Contact
