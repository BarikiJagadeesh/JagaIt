import React from 'react';
import styles from './Works.module.css';
import Evm from '../../Assets/EVM.png';
import Raghu from '../../Assets/RaghuFarm.png';

const Works = () => {
  return (
    <div className={styles.WorksContainer} id='Works'>
      <div className={styles.WorksHeading}>
        <p>Our Works</p>
      </div>
      <div className={styles.Container}>
        
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
        <div className={styles.WorksDataContainer}>
          <div className={styles.WorksShowcaseSection}>
            <p className={styles.WorkHeading}><a href='https://barikijagadeesh.github.io/RaghuFarms/' target='_blank' rel="noreferrer" >Client Project</a></p>
            <strong>Project Objective:</strong>
            <div className={styles.WorkData}>
              <div>
                <p>Created a website for farmers to showcase their work and farming activities, share photos and stories, connect with the community, and promote sustainable practices.</p>

                <p>In this project, we have included the following sections: Home, About, Farming, and Contact Us. As per the client's request, we have developed a user-friendly UI to enhance the user experience. Each section is carefully designed to meet the needs of the users and provide an engaging and informative platform for showcasing the farmers' work and activities.</p>

                <a href='https://barikijagadeesh.github.io/RaghuFarms/' target='_blank' rel="noreferrer">Click Here</a> To Check Our Client website.
              </div>

              <div className={styles.WorkImg}>
                  <a href='https://barikijagadeesh.github.io/RaghuFarms/' target='_blank' rel="noreferrer"><img src={Raghu} alt='Evm Model' /></a>
              </div>
            </div>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Works
