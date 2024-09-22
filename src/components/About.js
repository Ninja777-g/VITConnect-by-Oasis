import React, { useEffect, useState } from 'react';

const About = () => {
  return (
    <div>
      <div className="container">
        <section className="introduction">
          <h2>Who We Are</h2>
          <p>
            Welcome to VIT Connect! We are a dedicated team of passionate individuals committed to enhancing the campus experience for VIT students. Our platform centralizes vital information into a single, easy-to-navigate hub. Since our founding in 2024, we have focused on developing innovative solutions that empower students to efficiently manage their academic and extracurricular activities, making campus life more enjoyable and accessible.
          </p>
          <p>
            Our commitment to excellence drives us to continually evolve and adapt our services. Whether it's providing real-time updates on campus events or offering resources that simplify day-to-day activities, we strive to ensure that every student has the tools they need to succeed.
          </p>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to create a comprehensive digital platform that brings together a multitude of services for the VIT student community. From interactive campus maps and detailed mess menus to curated shop listings and a dynamic events calendar, our goal is to centralize everything students need into one convenient hub.
          </p>
          <p>
            We aim to streamline access to information, reduce the time spent searching for resources, and ultimately foster a more connected and engaged campus community. By bridging the gap between students and available services, we hope to enhance the overall college experience.
          </p>
        </section>

        <section className="values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Innovation:</strong> We are dedicated to continuously improving our platform and embracing new technologies to meet the evolving needs of our users.</li>
            <li><strong>Collaboration:</strong> We believe in fostering a collaborative environment, both within our team and in our interactions with students, ensuring that everyone's voice is heard.</li>
            <li><strong>Integrity:</strong> We uphold transparency and accountability in all our actions, ensuring that we serve the best interests of our community.</li>
            <li><strong>Inclusivity:</strong> We strive to create a welcoming platform that caters to the diverse needs of all students, promoting a sense of belonging.</li>
          </ul>
        </section>

        <section className="team">
          <h3>Meet the Team</h3>
          <div className="team-members">
            <div className="team-member">
              <h4>Kaven Singh</h4>
              <p>FullStack Developer</p>
              <p>Kaven leads the team and is a skilled developer with a focus on creating dynamic, responsive, and user-friendly web applications. His passion for technology and design drives him to explore innovative solutions that enhance user experience and functionality.</p>
            </div>
            <div className="team-member">
              <h4>Adarsh Jha</h4>
              <p>Backend Developer</p>
              <p>Adarsh specializes in building scalable web solutions with a keen eye on performance and user experience. With a strong background in server-side programming, he ensures that our platform operates seamlessly and efficiently.</p>
            </div>
            <div className="team-member">
              <h4>Anmol Bajaj</h4>
              <p>Backend Developer</p>
              <p>Anmol has a deep passion for problem-solving and implementing cutting-edge technologies. His expertise in data management and integration plays a crucial role in enhancing our platform's capabilities.</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions, feedback, or suggestions, we would love to hear from you! Feel free to reach out to us at:</p>
          <p><strong>Email:</strong> support@vitconnect.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p>We value your input and are committed to responding to all inquiries promptly. Your feedback helps us improve and better serve the VIT community.</p>
        </section>
      </div>

      <style>{`
        /* Global Styling */
        body {
          font-family: 'Poppins', sans-serif;
          background-color: #1a1a1a; /* Dark background */
          color: #e2e8f0; /* Light text */
          margin: 0;
          padding: 0;
          line-height: 1.6; /* Increased line spacing */
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
