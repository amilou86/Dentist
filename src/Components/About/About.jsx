import React from 'react'
import './About.css'
import about2 from '../../assets/about2.png'
// import play from '../../assets/play.png'

const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about2} className='about-img' alt="about-image" />
                {/* <img src={play} className='about-img' alt="play-image" /> */}
            </div>
            <div className='about-right'>
                <h3>About us</h3>
                <h2>Welcome to Halton Road Dental Practice</h2>
                <p>Halton Road Dental Practice is the longest established practice in the area - we are proud to continue to provide high quality NHS and private dental care using modern, safe and effective techniques for over 45 years.<br />
                    Above all, you, the patient, take top priority amongst our staff. We take great strides to ensure that each visit you experience with us is comfortable, convenient and professional. From the moment you arrive, our friendly staff will welcome you and attend to your needs for the duration of your visit with us.<br /> </p>
                <p>We aim to provide every patient with the highest level of service by delivering quality care in a warm setting that makes every patient feel at home. Our skilled team is dedicated to making each visit stress free and accommodating to your individual needs.<b />
                    Whether it is designing a new smile, restoring your existing smile, or simply maintaining optimal oral health, we have the experience, passion, and technical skill to suit every budget.<b />
                    If you would like to make an appointment, please contact us by phone or e-mail, or visit us in person.  We look forward to hearing from you!<b />
                </p>
            </div>

        </div>
    )
}

export default About