import React from 'react'
import './Contact.css'
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import message from '../../assets/message.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "2778e7c3-15d4-46e3-a004-55d19f4bcb6e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section id="contact">
            <div className='contact'>
                <div className="contact-col">
                    <div className="contact-hours">
                        <h2>Urgent & Emergency:</h2>
                        <p>Please call between 9am and 10am to be put on our daily priority list.</p>
                        <h2>Out of Hours Emergencies </h2>
                        <p>Please call
                            0161 476 9651. Available from 9am to 9.30pm every day, including weekends and Bank Holidays</p>
                    </div>
                    <h3>Application Form</h3>
                    <p>To apply for registration, please complete and submit the form opposite. Please note that NHS capacity is currently very limited. </p>
                    <h3>Opening Hours: </h3>
                    <p> Monday - Friday: 9:00am - 5:30pm</p>
                    <p> Weekday evenings & Saturdays by appointment</p>

                    <p><MdOutlineMessage /> haltondentist@gmail.com</p>
                    <p><FaPhoneAlt /> Tel: 01928 569293</p>
                    <p><IoLocationOutline /> Halton Road Dental Practice
                        <br />
                        254 Halton Road
                        <br />
                        Runcorn
                        <br />
                        Cheshire <br />
                        WA7 5RL <br />
                    </p >


                </div >
                <div className="contact-col">

                    <form onSubmit={onSubmit}>
                        <h3>Application Form</h3>
                        <label>First name *</label>
                        <input type="text" name='first-name' placeholder='Enter your first name' required />
                        <label>Last name *</label>
                        <input type="text" name='last-name' placeholder='Enter last your name' required />
                        <label>Email *</label>
                        <input type="text" name='email' placeholder='Enter email address' required />
                        <label>Phone number *</label>
                        <input type="text" name='phone' placeholder='Enter your phone number' required />
                        <label>Date of Brth *</label>
                        <input type="text" name='dob' placeholder='Enter your date of birth' required />
                        <label for="payable">
                            <input type="checkbox" id="pay" name="payable" required /> Do you pay for NHS Dental Treatment?
                        </label>
                        <br />
                        <p style={{ fontSize: 'smaller', display: 'inline-block' }}>
                            You do not have to pay for NHS dental services if you're:
                            under 18, or under 19 and in full-time education
                            pregnant or have had a baby in the last 12 months
                            receiving low income benefits such as Income Support, Income-related Employment and Support Allowance,  Jobseeker's Allowance, Pension Credit Guarantee Credit and/or Universal Credit
                            named on an NHS tax credit exemption, HC2, HC3 or maternity exemption certificate
                        </p>
                        <br />
                        <label>What services & treatments are you interested in? </label>
                        <textarea name="message" rows="6" placeholder='Enter your message, include any additional comments you wish to support your application' required></textarea>
                        <button type='submit' className='btn dark-btn'>Submit</button>
                    </form>
                    <span>{result}</span>
                </div>
            </div >
        </section >
    )
}

export default Contact