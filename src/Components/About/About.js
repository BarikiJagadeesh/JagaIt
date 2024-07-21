import React from 'react';
import styles from './About.module.css';
import Mohan from '../../Assets/Mohan.png';
import Jaga from '../../Assets/Jagadeesh.png'


const About = () => {
  return (
    <div className={styles.AboutContainer} id='About'>
      <ul>
        <li>
            <h3>Our Aim</h3>
            <p>As a passionate entrepreneur and digital enthusiast, I founded <b><i>Jagadeesh IT Soultions</i></b> with a mission to empower small businesses to establish a strong online presence. With a dedicated small team, we specialize in crafting tailored web solutions that help local businesses thrive in the digital landscape. Our journey began with a vision to bridge the gap between small businesses and their online potential, and we're committed to delivering personalized service, creative solutions, and exceptional support. With a keen eye for detail and a passion for innovation, we strive to build long-lasting relationships with our clients and help them achieve their online goals. When I'm not working, you can find me exploring the latest digital trends, hiking with friends, or enjoying a good book.</p>
        </li>
        <li>
            <h3>Our expertise in web development enables us to:</h3>
            <ul>
                <li>Design and build a website that showcases your brand and services</li>
                <li>Develop an e-commerce solution to expand your customer reach</li>
                <li>Improve your online visibility through search engine optimization (SEO)</li>
                <li>Enhance your customer engagement through responsive and mobile-friendly design</li>
            </ul>
            <p>Our goal is to help you grow your business and thrive in the online marketplace. Let us be your partner in this digital journey.</p>
        </li>
        <li>
            <h3>What We Offer:</h3>
            <ul>
                <li>Custom Website Design and Development</li>
                <li>E-commerce Solutions</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Responsive and Mobile-Friendly Design</li>
                <li>Ongoing Support and Maintenance</li>
            </ul>
        </li>
        <li>
            <h3>Our Team:</h3>
            <div className={styles.PhotoContainer}>
                <div className={styles.profileContainer}>
                    <img src={Mohan} className={styles.profilephoto} alt='Profile-Photo'/>
                    <p className={styles.profileName}>K Mohan Krishna</p>
                    <p className={styles.profileDesig}><i>Database Administrator</i></p>
                </div>
                <div className={styles.profileContainer}>
                    <img src={Jaga} className={styles.profilephoto} alt='Profile-Photo'/>
                    <p className={styles.profileName}>B Jagadeesh</p>
                    <p className={styles.profileDesig}><i>Full Stack Developer</i></p>
                </div>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default About
