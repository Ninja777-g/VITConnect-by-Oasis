import React from 'react';

const About = () => {
  return (
    <div>
      <header>
        <h1>About Us</h1>
      </header>

      <div className="container">
        <section className="introduction">
          <h2>Who We Are</h2>
          <p>
            Welcome to VIT Connect! We are a team of passionate individuals committed to providing the best services to VIT students by centralizing vital information into a single platform. Since our founding in 2024, we've been dedicated to creating solutions that help students navigate their day-to-day campus life more efficiently.
          </p>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide a comprehensive platform that centralizes services like maps, mess menus, shop listings, FAQs, and events into one convenient hub, streamlining information for the VIT student community.
          </p>
        </section>

        <section className="team">
          <h3>Meet the Team</h3>
          <div className="team-members">
            <div className="team-member">
              <h4>Kaven Singh</h4>
              <p>FullStack Developer</p>
              <p>Kaven is a skilled developer with a focus on creating dynamic, responsive, and user-friendly web applications.</p>
            </div>
            <div className="team-member">
              <h4>Adarsh Jha</h4>
              <p>Backend Developer</p>
              <p>Adarsh specializes in building scalable web solutions with a keen eye on performance and user experience.</p>
            </div>
            <div className="team-member">
              <h4>Anmol Bajaj</h4>
              <p>Backend Developer</p>
              <p>Anmol leads the team with a deep passion for problem-solving and implementing cutting-edge technologies.</p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        /* Global Styling */
        body {
          font-family: 'Poppins', sans-serif;
          background-color: #0d0d0d; /* Dark background */
          color: #e2e8f0; /* Light text */
          margin: 0;
          padding: 0;
        }

        header {
          background-color: black; /* Black background for header */
          color: #00ffc6; /* Neon aqua text */
          padding: 20px;
          text-align: center;
          position: sticky;
          top: 0;
          z-index: 10;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        }

        h1, h2 {
          text-align: center;
          color: #86C232; /* Updated to #86C232 */
          margin-bottom: 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background-color: #232526; /* Dark metallic */
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        }

        .team {
          margin-top: 30px;
        }

        .team h3 {
          color: #86C232; /* Updated to #86C232 */
          margin-bottom: 20px;
        }

        .team-members {
          display: flex;
          overflow-x: auto; /* Allow horizontal scrolling */
          scrollbar-width: thin; /* For Firefox */
        }

        .team-member {
          flex: 0 0 30%; /* Adjust width to fit three members in the row */
          margin: 0 10px; /* Margin between team members */
          background-color: #0d0d0d; /* Dark background */
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease;
          text-align: center;
          color: #e2e8f0; /* Light text */
        }

        .team-member:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .team-member h4 {
          color: #86C232; /* Updated to #86C232 */
        }

        footer {
          text-align: center;
          padding: 20px;
          background-color: black; /* Black background */
          color: #00ffc6; /* Neon aqua text */
          position: relative;
          width: 100%;
          bottom: 0;
        }

        @media (max-width: 600px) {
          .team-members {
            flex-direction: column; /* Stack team members on smaller screens */
          }

          .team-member {
            margin: 10px 0; /* Adjust margin for stacked layout */
          }
        }
      `}</style>
    </div>
  );
};

export default About;
