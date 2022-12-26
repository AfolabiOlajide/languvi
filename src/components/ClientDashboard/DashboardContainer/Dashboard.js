import React, { useState } from 'react';
import WelcomeImg from "../../../assets/welImg.png"

const Dashboard = () => {
    const [welcomeImgAvailable, setWelcomeImgAvailable] = useState(true);

    const toggleWelcomeImgHandler = () =>{
        setWelcomeImgAvailable(!welcomeImgAvailable);
    }

    return (
        <div className='px-6 py-3'>
            <div className="welcome">
                <img src={WelcomeImg} className={`w-full lg:w-[50%] ${welcomeImgAvailable ? "block" : "hidden"}`} alt="Welcome" onClick={toggleWelcomeImgHandler} />
            </div>
        </div>
    )
}

export default Dashboard