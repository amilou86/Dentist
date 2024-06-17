import React from 'react'
import './Reviews.css'

const Reviews = () => {
    return (
        <div className='reviews'>
            <div className="slider">
                <ul>
                    <li>
                        <div className="slide">
                            <div className="userInfo">
                                <div>
                                    <h3>John D</h3>
                                </div>
                            </div>
                            <p>"I was looking for a dental practice that I felt comfortable with and could trust.
                                My treatment for crowns was over two appointments.<b />
                                From the moment I walked through the door. I was very impressed with the friendliness of the staff and the skill, attention to detail, and professionalism of the dentist who carried out the treatment.
                                As a customer, I experienced the highest level of customer care and I left the surgery very impressed.
                                I would not hesitate to recommend Halton Road Dental Practice."</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userInfo">
                                <div>
                                    <h3>Julie C</h3>
                                </div>
                            </div>
                            <p>"I chose Halton Road as I had only ever heard good things spoken about them. I can honestly say, I wish I had joined years ago. From the moment you walk through the door you are met by nice friendly staff, the receptionist has remembered my name, therefore I don't feel like 'just a patient' and it's not just me, they greet everyone who enters by their first name. It's a lovely touch. The reception area is clean and bright with plenty of places to sit. My dentist is amazing, they put me at ease straight away, spent time to listen to me and my anxieties. I was told what would happen on each visit so there has been no unnecessary anxiety at all. I can honestly say it's a pleasure to visit the dentist. If you're reading this review and considering joining the practice, just do it."</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userInfo">
                                <div>
                                    <h3>Jane B</h3>
                                </div>
                            </div>
                            <p>"Halton Road Dental Practice is a very friendly, professional surgery, I have been a patient at the surgery since childhood and despite a fear of the dentist I attend regularly for my checks, this is mainly down to the staff and the way they treat me. Today I needed an emergency appointment and treatment, everything was explained to me, time given for me to psych myself up. Treatment was delivered in a timely and professional manner. I would have no hesitation in recommending the surgery or the staff. Keep up the good work."</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Reviews