import React from 'react';
import styles from './About.module.css';
import Mohan from '../../Assets/Mohan.png';
import Jaga from '../../Assets/Jagadeesh.png';
import Hareesh from '../../Assets/HareeshPic.png';
import { animated } from 'react-spring';
import useAnimateOnScroll from '../../Utils/useAnimateOnScroll';

const About = () => {

    const [refHead, animationHeading] = useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
            transform: inView? 'translateX(0px)':'translateX(-50px)'
        })
    })

    const [refAim, animationAim] =useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.5,
        animationProps:(inView)=>({
             transform: inView? 'translateY(0px)':'translateY(50px)'
        })
    })

    const [refAboutPara, animationAboutPara] = useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
            transform:inView?'translateX(0px)':'translateX(-50px)'
        })
    })


    // Animated the Heading of the Our experience
    const [refEx, animteEx]= useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps: (inView)=>({
            transform:inView? 'translateY(0px)':'translateY(50px)'
        })
    })


    // stylng the list items in the section

    const [refli1, animteli1]=useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
             transform:inView?'translateX(0px)':'translateX(-50px)'
        })
    })

    
    const [refli2, animteli2]=useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
             transform:inView?'translateX(0px)':'translateX(50px)'
        })
    })

    
    const [refli3, animteli3]=useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
             transform:inView?'translateX(0px)':'translateX(-50px)'
        })
    })
    
    const [refli4, animteli4]=useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
             transform:inView?'translateX(0px)':'translateX(50px)'
        })
    })

    const [refEXP, animateEXP]=useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
             transform:inView?'translateX(0px)':'translateX(-50px)'
        })
    })


    const [refOffer, animateOffer]=useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
             transform:inView?'translateY(0px)':'translateY(50px)'
        })
    })

    const [refOfferli1, animateOfferli1]=useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
             transform:inView?'translateX(0px)':'translateX(-50px)'
        })
    })

    const [refOfferli2, animateOfferli2]=useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
             transform:inView?'translateX(0px)':'translateX(50px)'
        })
    })

    const [refOfferli3, animateOfferli3]=useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
             transform:inView?'translateX(0px)':'translateX(-50px)'
        })
    })

    const [refOfferli4, animateOfferli4]=useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
             transform:inView?'translateX(0px)':'translateX(50px)'
        })
    })

    const [refOfferli5, animateOfferli5]=useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
             transform:inView?'translateX(0px)':'translateX(-50px)'
        })
    })

    // animating the our team sections:-

    const [refMohan, animateMohan]=useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
             transform:inView?'translateX(0px)':'translateX(-50px)'
        })
    })

    const [refJaga, animateJaga]=useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
             transform:inView?'translateX(0px)':'translateX(50px)'
        })
    })

    const [refHareesh, animateHareesh]=useAnimateOnScroll({
        triggerOnce:false,
        threshold:0.1,
        animationProps:(inView)=>({
             transform:inView?'translateX(0px)':'translateX(-50px)'
        })
    })

  return (
    <div className={styles.AboutContainer} id='About'>
        <animated.div ref={refHead} style={animationHeading}  className={`${styles.AboutHeading} ${styles.Animated_section}`}>
            <p>About Jagadeesh It Solutions</p>
        </animated.div>


        <div   className={`${styles.AboutDatacontainer} `}>

            < div  className={`${styles.AboutDataSection}`}>
                <animated.p ref={refAim} style={animationAim} className={`${styles.SectionHeading} ${styles.Animated_section}`}>Our Aim</animated.p>
                <animated.p style={animationAboutPara}  ref={refAboutPara} className={`${styles.Animated_section}`}>As a passionate entrepreneur and digital enthusiast, I founded <b><i>Jagadeesh IT Soultions</i></b> with a mission to empower small businesses to establish a strong online presence. With a dedicated small team, we specialize in crafting tailored web solutions that help local businesses thrive in the digital landscape. Our journey began with a vision to bridge the gap between small businesses and their online potential, and we're committed to delivering personalized service, creative solutions, and exceptional support. With a keen eye for detail and a passion for innovation, we strive to build long-lasting relationships with our clients and help them achieve their online goals. When I'm not working, you can find me exploring the latest digital trends, hiking with friends, or enjoying a good book.</animated.p>
            </div>
            {/*   */}
            <div className={styles.AboutDataSection}>
                <animated.p ref={refEx} style={animteEx}  className={`${styles.SectionHeading} ${styles.Animated_section}`}>Our expertise in web development enables us to: </animated.p>
                <ul>
                    <animated.li ref={refli1} style={animteli1} className={`${styles.Animated_section}`}>Design and build a website that showcases your brand and services</animated.li >
                    <animated.li ref={refli2} style={animteli2} className={`${styles.Animated_section}`}>Develop an e-commerce solution to expand your customer reach</animated.li >
                    <animated.li ref={refli3} style={animteli3} className={`${styles.Animated_section}`}>Improve your online visibility through search engine optimization (SEO)</animated.li >
                    <animated.li ref={refli4} style={animteli4} className={`${styles.Animated_section}`}>Enhance your customer engagement through responsive and mobile-friendly design</animated.li >
                </ul>
                < animated.p ref={refEXP} style={animateEXP} className={styles.Animated_section}>Our goal is to help you grow your business and thrive in the online marketplace. Let us be your partner in this digital journey.</ animated.p>
            </div>
            <div className={styles.AboutDataSection}>
                <animated.p ref={refOffer} style={animateOffer} className={`${styles.SectionHeading} ${styles.Animated_section}` }>What We Offer: </animated.p>
                <ul>
                    <animated.li ref={refOfferli1} style={animateOfferli1} className={`${styles.Animated_section}`}>Custom Website Design and Development</animated.li>
                    <animated.li ref={refOfferli2} style={animateOfferli2} className={`${styles.Animated_section}`}>E-commerce Solutions</animated.li>
                    <animated.li ref={refOfferli3} style={animateOfferli3} className={`${styles.Animated_section}`}>Search Engine Optimization (SEO)</animated.li>
                    <animated.li ref={refOfferli4} style={animateOfferli4} className={`${styles.Animated_section}`}>Responsive and Mobile-Friendly Design</animated.li>
                    <animated.li ref={refOfferli5} style={animateOfferli5} className={`${styles.Animated_section}`}>Ongoing Support and Maintenance</animated.li>
                </ul>
            </div>
        </div>
        <div>
            <p className={styles.SectionHeading}>Our Team</p>
            <div className={styles.PhotoContainer}>
                <animated.div ref={refMohan} style={animateMohan} className={`${styles.profileContainer} ${styles.Animated_section}`}>
                    <img src={Mohan} className={styles.profilephoto} alt='Profile-Photo'/>
                    <p className={styles.profileName}>K Mohan Krishna</p>
                    <p className={styles.profileDesig}><i>Database Administrator</i></p>
                </animated.div>
                <animated.div ref={refJaga} style={animateJaga} className={`${styles.profileContainer} ${styles.Animated_section}`}>
                    <img src={Jaga} className={styles.profilephoto} alt='Profile-Photo'/>
                    <p className={styles.profileName}>B Jagadeesh</p>
                    <p className={styles.profileDesig}><i>Full Stack Developer</i></p>
                </animated.div>
                <animated.div ref={refHareesh} style={animateHareesh} className={`${styles.profileContainer} ${styles.Animated_section}`}>
                    <img src={Hareesh} className={styles.profilephoto} alt='Profile-Photo'/>
                    <p className={styles.profileName}>M Hareesh</p>
                    <p className={styles.profileDesig}><i>FontEnd Developer</i></p>
                </animated.div>
                
            </div>
        </div>
    </div>
  )
}

export default About
