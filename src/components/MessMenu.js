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
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const displayMenu = () => {
    if (menuType && selectedDay) {
      const menuForDay = menus[menuType][selectedDay];
      if (menuForDay) {
        return (
          <div>
            <h3>{menuType} - {selectedDay}</h3>
            <ul>
              {menuForDay.map((item, index) => (
                <li key={index} className="menu-item">{item}</li>
              ))}
            </ul>
          </div>
        );
      }
    }
    return <p>Please select a menu and a day to view the items.</p>;
  };

  return (
    <div className="container">
      <h1>Mess Menu</h1>

      <div className="menu-selector">
        <button onClick={() => { setMenuType('Veg Menu'); setSelectedDay(''); setIsPopupVisible(true); }}>Veg Menu</button>
        <button onClick={() => { setMenuType('Non-Veg Menu'); setSelectedDay(''); setIsPopupVisible(true); }}>Non-Veg Menu</button>
        <button onClick={() => { setMenuType('Special Menu'); setSelectedDay(''); setIsPopupVisible(true); }}>Special Menu</button>
      </div>

      {menuType && <h2>Selected Menu: {menuType}</h2>}

      <label htmlFor="daySelect">Select Day:</label>
      <div className="dropdown-container">
        <select 
          id="daySelect" 
          value={selectedDay} 
          onChange={(e) => setSelectedDay(e.target.value)}
          disabled={!menuType}
        >
          <option value="">-- Select a Day --</option>
          <option value="Day 1">Day 1</option>
          <option value="Day 2">Day 2</option>
        </select>
      </div>

      <div className="menu-display">
        {displayMenu()}
      </div>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Popup</h2>
            <p>{menuType} menu selected!</p>
            <button onClick={() => setIsPopupVisible(false)}>Close</button>
          </div>
        </div>
      )}

      <style>{`
        body {
          font-family: 'Poppins', sans-serif;
          background-color: #0d0d0d;
          color: #e2e8f0;
          margin: 0;
          padding: 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background-color: #0d0d0d;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        }

        h1 {
          text-align: center;
          color: #00ffc6;
          margin-bottom: 20px;
        }

        .menu-selector {
          text-align: center;
          margin: 20px 0;
        }

        button {
          background-color: #00ffc6;
          color: #0d0d0d;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
          margin: 0 10px;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #00a8ff;
        }

        label {
          display: block;
          margin: 20px 0 5px;
          font-weight: bold;
          text-align: center;
          color: #00ffc6;
        }

        select {
          padding: 10px;
          border-radius: 5px;
          width: 200px;
          display: block;
          margin: 0 auto;
          background-color: #1a1a2e;
          color: #e2e8f0;
        }

        .menu-display {
          margin: 20px auto;
          padding: 20px;
          background-color: #232526;
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
          background-color: #00a8ff;
          color: white;
        }

        .menu-item:hover {
          background-color: #084a92;
          transform: scale(1.02);
        }

        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .popup-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
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