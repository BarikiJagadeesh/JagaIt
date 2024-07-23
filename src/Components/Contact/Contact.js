import React from 'react';
import styles from './Contact.module.css';
import contactData from "../../Assets/Contacts.json";

const Contact = () => {
    
  return (
    <div className={styles.contactContainer  }  id='ContactUs'>
      <p className={styles.ContactHeading}>Contact Us</p>

      <div className={styles.contactBody}>
        
        <div className={styles.contactDetails}>
          <ul>
            {
              contactData.map((obj, ind)=>{
                return (
                  <li key={ind}><img className={styles.conIcon} src={obj.Icon_URL} alt={obj.alt}/><b>{obj.Name}</b>: <a rel="noreferrer" href={obj.href}  target='_blank' >{obj.Value1}</a> {obj.Value2}</li>
                )
              })
            }
          </ul>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d420.595199811748!2d77.10396796620796!3d15.633023935573219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1721461388772!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Map Location'></iframe>
        </div>
        <div>
          <iframe title='Contact Us' width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAATTaHyVUQVhHVVlPSlNYWlpZOTVGUUY2MjZSSVg1Wi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{border: "none", 'max-width':'100%',' max-height':'100vh'}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
      </div>
      </div>
      
    </div>
  )
}

export default Contact
