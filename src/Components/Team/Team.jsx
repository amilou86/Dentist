import React from 'react'
import './Team.css'
import jon from '../../assets/jon.png'
import scott from '../../assets/scott.png'
import carl from '../../assets/carl.webp'
import laurenS from '../../assets/laurenS.webp'
import laurenW from '../../assets/laurenW.webp'
import paola from '../../assets/paola.webp'
import manuela from '../../assets/manuela.webp'
import lydia from '../../assets/lydia.webp'
import dawn from '../../assets/dawn.webp'
import sheena from '../../assets/sheena.webp'
import sian from '../../assets/sian.webp'
import jennifer from '../../assets/jennifer.webp'
import natalie from '../../assets/natalie.webp'
import lowansa from '../../assets/lowansa.webp'
import laura from '../../assets/laura.webp'
import sammie from '../../assets/sammie.webp'
import rebecca from '../../assets/rebecca.webp'
import georgia from '../../assets/georgia.webp'
import kayleigh from '../../assets/kayleigh.webp'
import millie from '../../assets/millie.webp'
import michyla from '../../assets/michyla.webp'
import tayla from '../../assets/tayla.webp'
import karla from '../../assets/karla.webp'
import holly from '../../assets/holly.webp'
import anna from '../../assets/anna.webp'

const teamMembers = [
    { id: 1, name: 'Dr Jonathon Westall', position: 'Practice Owner & Dentist', image: jon },
    { id: 2, name: 'Mr Scott Rimmer', position: 'Dentist', image: scott },
    { id: 3, name: 'Mr Carl Rumble', position: 'Dentist', image: carl },
    { id: 4, name: 'Ms Lauren Smith', position: 'Dentist', image: laurenS },
    { id: 5, name: 'Ms Lauren Walker', position: 'Dentist', image: laurenW },
    { id: 6, name: 'Ms Paola De Rogatis', position: 'Dentist', image: paola },
    { id: 7, name: 'Ms Manuela Guevara cano', position: 'Hygienist & Therapist', image: manuela },
    { id: 8, name: 'Ms Lydia Bleasdale', position: 'Hygienist & Therapist', image: lydia },
    { id: 9, name: 'Ms Dawn Flaherty', position: 'Hygienist & Therapist', image: dawn },
    { id: 10, name: 'Sheena Pennignton', position: 'Practice Manager', image: sheena },
    { id: 11, name: 'Sian Kennedy', position: 'Dental Nurse', image: sian },
    { id: 12, name: 'Jennifer Strong', position: 'Dental Nurse', image: jennifer },
    { id: 13, name: 'Natalie Williams', position: 'Dental Nurse', image: natalie },
    { id: 14, name: 'Lowansa Moore', position: 'Dental Nurse', image: lowansa },
    { id: 15, name: 'Laura Burton', position: 'Dental Nurse', image: laura },
    { id: 16, name: 'Sammie McCormick', position: 'Dental Nurse', image: sammie },
    { id: 17, name: 'Rebecca Sanders', position: 'Dental Nurse', image: rebecca },
    { id: 18, name: 'Georgia Walton', position: 'Dental Nurse', image: georgia },
    { id: 19, name: 'Kayleigh Earwalker', position: 'Apprentice Dental Nurse', image: kayleigh },
    { id: 20, name: 'Millie Corry', position: 'Apprentice Dental Nurse', image: millie },
    { id: 21, name: 'Michyla Hughes', position: 'Apprentice Dental Nurse', image: michyla },
    { id: 22, name: 'Talya Keogh', position: 'Apprentice Dental Nurse', image: tayla },
    { id: 23, name: 'Karla McKeirnon', position: 'Apprentice Dental Nurse', image: karla },
    { id: 24, name: 'Holly Wynne', position: 'Receptionist', image: holly },
    { id: 25, name: 'Anna Fletcher', position: 'Receptionist', image: anna },
]

const Team = () => {
    return (
        <section className='team'>
            <h2>Meet Our Team</h2>
            <div className="team-grid">
                {teamMembers.map((member) => (
                    <div key={member.id} className='team-grid'>
                        <img src={member.image} alt={member.name + 'profile pic'}
                            className='profile-pic'
                        />
                        <p className='member-name'>{member.name}</p>
                        <p className='member-position'>{member.position}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team