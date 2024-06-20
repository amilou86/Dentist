import React, { useState, useEffect } from 'react';
import './Reviews.css';

const Reviews = () => {
    const reviewsPerPage = 1;
    const [currentPage, setCurrentPage] = useState(1);
    const reviews = [
        {
            name: "John D",
            text: `"I was looking for a dental practice that I felt comfortable with and could trust. My treatment for crowns was over two appointments. From the moment I walked through the door, I was very impressed with the friendliness of the staff and the skill, attention to detail, and professionalism of the dentist who carried out the treatment. As a customer, I experienced the highest level of customer care and I left the surgery very impressed. I would not hesitate to recommend Halton Road Dental Practice."`
        },
        {
            name: "Julie C",
            text: `"I chose Halton Road as I had only ever heard good things spoken about them. I can honestly say, I wish I had joined years ago. From the moment you walk through the door you are met by nice friendly staff, the receptionist has remembered my name, therefore I don't feel like 'just a patient' and it's not just me, they greet everyone who enters by their first name. It's a lovely touch. The reception area is clean and bright with plenty of places to sit. My dentist is amazing, they put me at ease straight away, spent time to listen to me and my anxieties. I was told what would happen on each visit so there has been no unnecessary anxiety at all. I can honestly say it's a pleasure to visit the dentist. If you're reading this review and considering joining the practice, just do it."`
        },
        {
            name: "Jane B",
            text: `"Halton Road Dental Practice is a very friendly, professional surgery, I have been a patient at the surgery since childhood and despite a fear of the dentist I attend regularly for my checks, this is mainly down to the staff and the way they treat me. Today I needed an emergency appointment and treatment, everything was explained to me, time given for me to psych myself up. Treatment was delivered in a timely and professional manner. I would have no hesitation in recommending the surgery or the staff. Keep up the good work."`
        }
    ];

    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        // Handle pagination visibility based on screen size
        const handleResize = () => {
            if (window.innerWidth > 600) {
                setCurrentPage(1); // Reset to first page if screen size is larger
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const startIndex = (currentPage - 1) * reviewsPerPage;
    const selectedReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

    return (
        <div className='reviews'>
            <div className="slider">
                <ul>
                    {selectedReviews.map((review, index) => (
                        <li key={index}>
                            <div className="slide">
                                <div className="userInfo">
                                    <div>
                                        <h3>{review.name}</h3>
                                    </div>
                                </div>
                                <p>{review.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pagination-controls">
                <button onClick={handlePrevClick} disabled={currentPage === 1}>Previous</button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button onClick={handleNextClick} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default Reviews;
