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
                    <h3>For urgent and emergency treatment please call between 9am and 10am to be put on our daily priority list</h3>
                    <h3>Send us a message <img src={message} alt="message icon" /></h3>
                    <p>Feel free to recah out using our contact form to the right. Your feedback, questions and recommendations are important to us as we strive to provide the best possible service to our patients and clients. </p>
                    <h3>Opening Hours: </h3>
                    <p> Monday - Friday: 9:00am - 5:30pm</p>
                    <p> Weekday evenings & Saturdays by appointment</p>

                    <p><MdOutlineMessage /> haltondentist@gmail.com</p>
                    <p><FaPhoneAlt /> Tel: 01928 569293</p>
                    <p><IoLocationOutline /> Halton Road Dental Practice</p>
                    <p>254 Halton Road</p>
                    <p>Runcorn</p>
                    <p>Cheshire</p>
                    <p>WA7 5RL</p>


                </div>
                <div className="contact-col">
                    <h3 className='out-of-hours'>For out of hours emergencies please call
                        0161 476 9651. Available from 9am to 9.30pm every day, including weekends and Bank Holidays</h3>
                    <form onSubmit={onSubmit}>
                        <label>Your name</label>
                        <input type="text" name='name' placeholder='Enter your name' required />
                        <label>Phone number</label>
                        <input type="text" name='phone' placeholder='Enter your phone number' required />
                        <label> Write your message here</label>
                        <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                        <button type='submit' className='btn dark-btn'>Submit</button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        </section>
    )
}

export default Contact