import React, { useState, useEffect } from 'react';

const Clubs = () => {
    const [name, setName] = useState('');
    const [regno, setRegno] = useState('');
    const [email, setEmail] = useState('');
    const [club, setClub] = useState('');
    const [description, setDescription] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const [popupVisible, setPopupVisible] = useState(false); 

    const openClubs = ['Tech Club', 'Developer\'s Guild', 'Art Club', 'Photography Club', 'Entrepreneurship Cell'];

    const clubDescriptions = {
        'Tech Club': 'A community of tech enthusiasts...',
        'Cultural Society': 'Celebrate and engage with various cultural activities...',
        'Developer\'s Guild': 'If coding is your passion...',
        'Art Club': 'A haven for creative minds...',
        'Music Society': 'Whether you play an instrument or sing...',
        'Robotics Club': 'Explore the fascinating world of robotics...',
        'Photography Club': 'For those who see the world through a lens...',
        'Entrepreneurship Cell': 'Nurture your entrepreneurial spirit...',
        'Debate Club': 'If you love to discuss...',
        'Literature Society': 'For lovers of literature...'
    };

    const handleClubChange = (e) => {
        const selectedClub = e.target.value;
        setClub(selectedClub);
        setDescription(clubDescriptions[selectedClub] || '');
    };

    const submitRegistration = () => {
        if (name && regno && email && club) {
            if (openClubs.includes(club)) {
                setPopupMessage(`Congratulations, ${name}! You have successfully registered for the ${club}.`);
            } else {
                setPopupMessage(`Sorry, ${name}. Registration for the ${club} is currently closed.`);
            }
            setPopupVisible(true);
        }
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    useEffect(() => {
        // Any additional initialization if needed
    }, []);

    return (
        <div className="container">
            <h1 style={{ color: '#86C232' }}>Join a Club</h1>
            <p>Fill out the form to register for your preferred club. Choose wisely!</p>

            <form id="registrationForm">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

                <label htmlFor="regno">Registration No:</label>
                <input type="text" id="regno" value={regno} onChange={(e) => setRegno(e.target.value)} required />

                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="club">Select Your Club:</label>
                <select id="club" value={club} onChange={handleClubChange} required>
                    <option value="">-- Select a Club --</option>
                    {Object.keys(clubDescriptions).map((clubName) => (
                        <option key={clubName} value={clubName}>{clubName}</option>
                    ))}
                </select>

                {description && (
                    <div className="club-description" style={{ display: description ? 'block' : 'none' }}>
                        {description}
                    </div>
                )}

                <button type="button" className="button" onClick={submitRegistration}>Register Now</button>
            </form>

            <div className="popup" style={{ display: popupVisible ? 'flex' : 'none' }}>
                <div className="popup-content">
                    <h2 style={{ color: '#86C232' }}>Registration Status</h2>
                    <p>{popupMessage}</p>
                    <button className="close-button" onClick={closePopup}>Close</button>
                </div>
            </div>

            <table className="registration-table">
                <thead>
                    <tr>
                        <th style={{ color: '#86C232' }}>Club Name</th>
                        <th style={{ color: '#86C232' }}>Registration Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(clubDescriptions).map((clubName) => (
                        <tr key={clubName}>
                            <td>{clubName}</td>
                            <td style={{ fontWeight: 'bold', color: openClubs.includes(clubName) ? 'red' : 'green' }}>
                                {openClubs.includes(clubName) ? 'Open' : 'Closed'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <style>
                {`
                    .container {
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                        font-family: 'Poppins', sans-serif;
                        background-color: #222629; /* Dark background */
                        border-radius: 8px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
                    }
                    h1, h2 {
                        text-align: center;
                        color: #86C232; /* Neon green */
                        margin-bottom: 20px;
                    }
                    label {
                        display: block;
                        margin-top: 15px;
                        font-weight: bold;
                        color: #ccc;
                        font-size: 0.9rem;
                    }
                    input[type="text"], input[type="email"], select {
                        width: 100%;
                        padding: 12px;
                        margin-top: 5px;
                        border: 1px solid #ccc;
                        border-radius: 8px;
                        background-color: #474B4F; /* Darker background */
                        color: #e2e8f0; /* Light text */
                    }
                    input[type="text"]:focus, input[type="email"]:focus, select:focus {
                        border-color: #00ffc6; /* Neon aqua */
                        outline: none;
                    }
                    .button {
                        margin-top: 25px;
                        padding: 15px;
                        background-color: #86C232; /* Neon green */
                        color: #0d0d0d; /* Dark text */
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                        font-size: 1.1rem;
                        transition: background-color 0.3s, box-shadow 0.3s;
                        width: 100%;
                        text-align: center;
                    }
                    .button:hover {
                        background-color: #00a8ff; /* Neon blue on hover */
                    }
                    .popup {
                        display: none;
                        position: fixed;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.7);
                        justify-content: center;
                        align-items: center;
                    }
                    .popup-content {
                        background: #474B4F; /* Darker background */
                        padding: 30px;
                        border-radius: 12px;
                        text-align: center;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                        color: #f4f4f9; /* Light text */
                    }
                    .close-button {
                        margin-top: 15px;
                        padding: 10px 20px;
                        background-color: #86C232; /* Neon green */
                        color: #0d0d0d;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                        transition: background-color 0.3s;
                    }
                    .close-button:hover {
                        background-color: #00a8ff; /* Neon blue on hover */
                    }
                    .registration-table {
                        width: 100%;
                        margin-top: 30px;
                        border-collapse: collapse;
                    }
                    .registration-table th, .registration-table td {
                        border: 1px solid #ddd;
                        padding: 10px;
                        text-align: center;
                        color: #f4f4f9; /* Light text */
                    }
                `}
            </style>
        </div>
    );
};

export default Clubs;
