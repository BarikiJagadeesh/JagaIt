import React from 'react';
import styles from './Works.module.css';
import Evm from '../../Assets/EVM.png'

const Works = () => {
  return (
    <div className={styles.WorksContainer} id='Works'>
      <div className={styles.WorksHeading}>
        <p>Our Works</p>
      </div>
      <div className={styles.WorksDataContainer}>
        <div className={styles.WorksShowcaseSection}>
            <p className={styles.WorkHeading}><a href='https://main--evmmodel.netlify.app/' target='_blank' rel="noreferrer" >Volunteer work</a></p>
            <strong>Project Objective:</strong>
            <div className={styles.WorkData}>
                <div>
                    <p>Empower rural Indian villagers to effectively use Electronic Voting Machines (EVMs) in elections through an intuitive education model, promoting inclusive participation and confident voting.</p>

                    <p>The project aims to bridge the knowledge gap and ensure that all citizens, regardless of their socio-economic background or geographical location, can exercise their right to vote with confidence. By creating an intuitive and user-friendly EVM education model, I hope to contribute to the democratization of the voting process and promote inclusive participation in India's electoral system</p>

                    <a href='https://main--evmmodel.netlify.app/' target='_blank' rel="noreferrer">Click Here</a> To Check EVM Model
                 </div>

                <div className={styles.WorkImg}>
                    <a href='https://main--evmmodel.netlify.app/' target='_blank' rel="noreferrer"><img src={Evm} alt='Evm Model' /></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Works
