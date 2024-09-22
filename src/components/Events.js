import React, { useEffect, useState } from 'react';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [modalEvent, setModalEvent] = useState(null);

    useEffect(() => {
        const initialEvents = [
            {
                title: 'DevJams',
                startDate: '2024-09-20',
                endDate: '2024-09-22',
                description: "DevJams'24 is our flagship hackathon for tech enthusiasts to turn their ideas into reality.",
                location: 'Auditorium',
                time: '10:00 AM - 5:00 PM',
                club: 'Tech Club'
            },
            {
                title: 'Cultural Night',
                startDate: '2024-10-12',
                endDate: '2024-10-12',
                description: 'A celebration of diverse cultures with performances from around the world.',
                location: 'Open Grounds',
                time: '6:00 PM - 10:00 PM',
                club: 'Cultural Society'
            },
            {
                title: 'Hackathon 2024',
                startDate: '2024-10-20',
                endDate: '2024-10-21',
                description: 'A 24-hour hackathon event for budding developers to create innovative software solutions.',
                location: 'Tech Park',
                time: '9:00 AM - 9:00 PM',
                club: 'Developer\'s Guild'
            },
            {
                title: 'Sports Meet',
                startDate: '2024-11-05',
                endDate: '2024-11-07',
                description: 'Annual sports meet with various events like football, cricket, and athletics.',
                location: 'Sports Complex',
                time: '8:00 AM - 6:00 PM',
                club: 'Sports Club'
            },
            {
                title: 'Freshers\' Party',
                startDate: '2024-11-15',
                endDate: '2024-11-15',
                description: 'A welcome party for the new batch of students with music, dance, and fun activities.',
                location: 'Auditorium',
                time: '7:00 PM - 11:00 PM',
                club: 'Student Council'
            },
            {
                title: 'Alumni Meet',
                startDate: '2024-12-10',
                endDate: '2024-12-10',
                description: 'A reunion of former students to share memories and experiences.',
                location: 'Auditorium',
                time: '6:00 PM - 9:00 PM',
                club: 'Alumni Association'
            },
            {
                title: 'Tech Expo',
                startDate: '2025-01-05',
                endDate: '2025-01-07',
                description: 'An exhibition of the latest technology trends and innovations.',
                location: 'Tech Park',
                time: '10:00 AM - 6:00 PM',
                club: 'Tech Club'
            },
            {
                title: 'Auction Action',
                startDate: '2025-02-15',
                endDate: '2025-02-15',  
                description: 'A charity event to raise funds for social causes through auctions and donations.',
                location: 'Auditorium',
                time: '4:00 PM - 8:00 PM',
                club: 'Social Welfare Club'
            }
        ];
        setEvents(initialEvents);
        setFilteredEvents(initialEvents);
    }, []);

    const formatEventDate = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const startDay = start.getDate();
        const startMonth = start.toLocaleString('default', { month: 'short' });
        const endDay = end.getDate();
        const endMonth = end.toLocaleString('default', { month: 'short' });

        return startMonth === endMonth
            ? `${startDay} to ${endDay} ${startMonth}`
            : `${startDay} ${startMonth} to ${endDay} ${endMonth}`;
    };

    const handleFilter = () => {
        const filtered = events.filter(event => {
            const eventStart = new Date(event.startDate);
            const eventEnd = new Date(event.endDate);
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;

            if (start && end) {
                return eventStart <= end && eventEnd >= start;
            } else if (start) {
                return eventEnd >= start;
            } else if (end) {
                return eventStart <= end;
            }
            return true;
        }).filter(event => event.title.toLowerCase().includes(searchQuery.toLowerCase()));

        setFilteredEvents(filtered);
    };

    const handleReset = () => {
        setStartDate('');
        setEndDate('');
        setSearchQuery('');
        setFilteredEvents(events);
    };

    const openModal = (event) => {
        setModalEvent(event);
    };

    const closeModal = () => {
        setModalEvent(null);
    };

    return (
        <div className="container">
            <div className="header">
                <h1>College Events</h1>
            </div>

            <div className="filter-container">
                <div className="search-container">
                    <input
                        type="text"
                        id="search-bar"
                        placeholder="Search events..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="date-filters">
                    <label htmlFor="start-date">Filter by Start Date:</label>
                    <input
                        type="date"
                        id="start-date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <label htmlFor="end-date">to</label>
                    <input
                        type="date"
                        id="end-date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                    <button onClick={handleFilter}>Filter Events</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>

            <div id="events-container" className="events-container">
                {filteredEvents.map(event => (
                    <div className="event-card" key={event.title} onClick={() => openModal(event)}>
                        <div className="event-content">
                            <h3 className="event-title">{event.title}</h3>
                            <p className="event-range">{formatEventDate(event.startDate, event.endDate)}</p>
                            <p className="event-location">Location: {event.location}</p>
                            <p className="event-time">Time: {event.time}</p>
                            <p className="event-club">Club: {event.club}</p>
                        </div>
                    </div>
                ))}
            </div>

            {modalEvent && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()} style={{ color: 'black' }}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h3>{modalEvent.title}</h3>
                        <p><strong>Description:</strong> {modalEvent.description}</p>
                        <p><strong>Location:</strong> {modalEvent.location}</p>
                        <p><strong>Time:</strong> {modalEvent.time}</p>
                        <p><strong>Club:</strong> {modalEvent.club}</p>
                        <p><strong>Date:</strong> {formatEventDate(modalEvent.startDate, modalEvent.endDate)}</p>
                    </div>
                </div>
            )}

            <style>{`
                /* Global Styling */
                body {
                    font-family: 'Poppins', sans-serif;
                    background-color: #1a1a1a; /* Dark background */
                    color: #e2e8f0; /* Light text */
                    margin: 0;
                    padding: 0;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #0d0d0d; /* Dark background */
                    border-radius: 8px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
                }

                .header {
                    text-align: center;
                    padding: 20px;
                }

                h1 {
                    color: #86C232; /* Updated Title Color */
                    margin-bottom: 20px;
                }

                .filter-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 20px 0;
                }

                .search-container {
                    margin-right: 20px;
                }

                #search-bar {
                    padding: 10px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    width: 200px;
                    background-color: #1a1a1a; /* Dark input background */
                    color: white; /* White text color */
                }

                .date-filters {
                    display: flex;
                    align-items: center;
                }

                .date-filters input {
                    margin: 0 5px;
                    padding: 10px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    background-color: #1a1a1a; /* Dark input background */
                    color: white; /* White text color */
                }

                button {
                    margin-left: 10px;
                    padding: 10px 15px;
                    border: none;
                    border-radius: 5px;
                    background-color: #86C232; /* Updated Button Color */
                    color: white;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #6ba629; /* Darker green on hover */
                }

                .events-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 20px;
                }

                .event-card {
                    background-color: #222629; /* Dark card background */
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                    cursor: pointer;
                    transition: transform 0.2s;
                }

                .event-card:hover {
                    transform: scale(1.05);
                }

                .event-title {
                    color: #86C232; /* Title color */
                    margin: 0;
                }

                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                }

                .modal-content {
                    background-color: #474B4F; /* Dark modal background */
                    padding: 20px;
                    border-radius: 10px;
                    position: relative;
                    width: 80%;
                    max-width: 600px;
                    color: black; /* Black text in modal */
                }

                .close {
                    position: absolute;
                    top: 10px;
                    right: 20px;
                    font-size: 24px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default Events;
