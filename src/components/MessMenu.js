import React, { useState } from 'react';

function MessMenu() {
  const menus = {
    "Veg Menu": {
      "Day 1": ["Veg Curry", "Rice", "Salad"],
      "Day 2": ["Paneer Butter Masala", "Naan", "Raita"]
    },
    "Non-Veg Menu": {
      "Day 1": ["Chicken Curry", "Rice", "Salad"],
      "Day 2": ["Fish Fry", "Naan", "Soup"]
    },
    "Special Menu": {
      "Day 1": ["Pasta", "Garlic Bread", "Caesar Salad"],
      "Day 2": ["Biryani", "Raita", "Dessert"]
    }
  };

  const [menuType, setMenuType] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const displayMenu = () => {
    if (menuType && selectedDay && menus[menuType][selectedDay]) {
      return menus[menuType][selectedDay].map((item, index) => (
        <div key={index} className="menu-item">
          {item}
        </div>
      ));
    } else {
      return <p>Please select a day to view the menu.</p>;
    }
  };

  return (
    <div className="container">
      <h1>Mess Menu</h1>

      <div className="menu-selector">
        <button onClick={() => setMenuType('Veg Menu')}>Veg Menu</button>
        <button onClick={() => setMenuType('Non-Veg Menu')}>Non-Veg Menu</button>
        <button onClick={() => setMenuType('Special Menu')}>Special Menu</button>
      </div>

      <label htmlFor="daySelect">Select Day:</label>
      <div className="dropdown-container">
        <select id="daySelect" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
          <option value="">-- Select a Day --</option>
          <option value="Day 1">Day 1</option>
          <option value="Day 2">Day 2</option>
        </select>
      </div>

      <div className="menu-display">
        {displayMenu()}
      </div>

      {/* Inline styling */}
      <style>{`
        /* Global Styling */
        body {
          font-family: 'Poppins', sans-serif;
          background-color: #0d0d0d; /* Dark background */
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

        h1 {
          text-align: center;
          color: #00ffc6; /* Neon aqua */
          margin-bottom: 20px;
        }

        .menu-selector {
          text-align: center;
          margin: 20px 0;
        }

        button {
          background-color: #00ffc6; /* Neon aqua */
          color: #0d0d0d; /* Dark button text */
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #00a8ff; /* Neon blue on hover */
        }

        label {
          display: block;
          margin: 20px 0 5px;
          font-weight: bold;
          text-align: center;
          color: #00ffc6; /* Neon aqua */
        }

        select {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          width: 200px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
          display: block;
          background-color: #1a1a2e; /* Consistent dark background */
          color: #e2e8f0; /* Light text */
        }

        .menu-display {
          margin: 20px auto;
          padding: 20px;
          background-color: #232526; /* Dark metallic */
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          max-width: 600px;
        }

        .menu-item {
          margin: 5px 0;
          font-size: 1.1em;
          font-weight: bold;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #00a8ff; /* Neon blue */
          transition: background-color 0.3s, transform 0.2s;
          color: white; /* Light text for menu items */
        }

        .menu-item:hover {
          background-color: #084a92; /* Darker blue on hover */
          transform: scale(1.02);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 24px;
          }

          .menu-item {
            font-size: 1em;
          }

          button {
            padding: 8px 15px;
          }

          select {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default MessMenu;