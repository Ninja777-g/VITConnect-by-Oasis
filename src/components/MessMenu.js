import React, { useState } from 'react';

function MessMenu() {
  const menus = {
    "Veg Menu": {
      "Day 1": ["Breakfast - Veg Curry", "Lunch - Rice", "Snacks - Salad", "Dinner - Ice Cream"],
      "Day 2": ["Breakfast - Paneer Butter Masala", "Lunch - Naan", "Snacks - Raita", "Dinner - Ice Cream"],
      "Day 3": ["Breakfast - Dal Tadka", "Lunch - Jeera Rice", "Snacks - Papad", "Dinner - Ice Cream"],
      "Day 4": ["Breakfast - Veg Biryani", "Lunch - Phulka", "Snacks - Dal Maharani", "Dinner - Ice Cream"],
      "Day 5": ["Breakfast - Aloo Gobi", "Lunch - Chapati", "Snacks - Raita", "Dinner - Ice Cream"],
      "Day 6": ["Breakfast - Palak Paneer", "Lunch - Jeera Rice", "Snacks - Salad", "Dinner - Ice Cream"],
      "Day 7": ["Breakfast - Veg Pulao", "Lunch - Raita", "Snacks - Papad", "Dinner - Ice Cream"],
      "Day 8": ["Breakfast - Matar Paneer", "Lunch - Phulka", "Snacks - Dal Tadka", "Dinner - Ice Cream"],
      "Day 9": ["Breakfast - Veg Korma", "Lunch - Jeera Rice", "Snacks - Salad", "Dinner - Ice Cream"],
      "Day 10": ["Breakfast - Veg Fried Rice", "Lunch - Manchurian", "Snacks - Soup", "Dinner - Ice Cream"]
    },
    "Non-Veg Menu": {
      "Day 1": ["Breakfast - Chicken Curry", "Lunch - Rice", "Snacks - Salad", "Dinner - Ice Cream"],
      "Day 2": ["Breakfast - Fish Fry", "Lunch - Naan", "Snacks - Soup", "Dinner - Ice Cream"],
      "Day 3": ["Breakfast - Mutton Biryani", "Lunch - Raita", "Snacks - Salad", "Dinner - Ice Cream"],
      "Day 4": ["Breakfast - Chicken Korma", "Lunch - Chapati", "Snacks - Soup", "Dinner - Ice Cream"],
      "Day 5": ["Breakfast - Fish Curry", "Lunch - Rice", "Snacks - Salad", "Dinner - Ice Cream"],
      "Day 6": ["Breakfast - Mutton Curry", "Lunch - Naan", "Snacks - Raita", "Dinner - Ice Cream"],
      "Day 7": ["Breakfast - Chicken Biryani", "Lunch - Mysore Pak", "Snacks - Raita", "Dinner - Ice Cream"],
      "Day 8": ["Breakfast - Fish Fry", "Lunch - Chapati", "Snacks - Soup", "Dinner - Ice Cream"],
      "Day 9": ["Breakfast - Mutton Korma", "Lunch - Rice", "Snacks - Salad", "Dinner - Ice Cream"],
      "Day 10": ["Breakfast - Chicken Fried Rice", "Lunch - Manchurian", "Snacks - Soup", "Dinner - Ice Cream"],
    },
    "Special Menu": {
      "Day 1": ["Breakfast - Pasta", "Lunch - Garlic Bread", "Snacks - Caesar Salad", "Dinner - Ice Cream"],
      "Day 2": ["Breakfast - Biryani", "Lunch - Raita", "Snacks - Dessert", "Dinner - Ice Cream"],
      "Day 3": ["Breakfast - Pizza", "Lunch - Garlic Bread", "Snacks - Salad", "Dinner - Ice Cream"],
      "Day 4": ["Breakfast - Noodles", "Lunch - Manchurian", "Snacks - Soup", "Dinner - Ice Cream"],
      "Day 5": ["Breakfast - Burger", "Lunch - Fries", "Snacks - Salad", "Dinner - Ice Cream"],
      "Day 6": ["Breakfast - Pulao", "Lunch - Raita", "Snacks - Salad", "Dinner - Ice Cream"],
      "Day 7": ["Breakfast - Fried Rice", "Lunch - Manchurian", "Snacks - Soup", "Dinner - Ice Cream"],
      "Day 8": ["Breakfast - Pasta", "Lunch - Garlic Bread", "Snacks - Salad", "Dinner - Ice Cream"],
      "Day 9": ["Breakfast - Biryani", "Lunch - Raita", "Snacks - Dessert", "Dinner - Ice Cream"],
      "Day 10": ["Breakfast - Pizza", "Lunch - Garlic Bread", "Snacks - Salad", "Dinner - Ice Cream"],
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
            <h3 style={styles.menuTitle}>{menuType} - {selectedDay}</h3>
            <ul>
              {menuForDay.map((item, index) => (
                <li key={index} style={styles.popupMenuItem}>{item}</li>
              ))}
            </ul>
          </div>
        );
      }
    }
    return <p style={styles.message}>Please select a day to view the items.</p>;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Mess Menu</h1>

      <div style={styles.menuSelector}>
        <button onClick={() => { setMenuType('Veg Menu'); setSelectedDay(''); setIsPopupVisible(true); }} style={styles.button}>Veg Menu</button>
        <button onClick={() => { setMenuType('Non-Veg Menu'); setSelectedDay(''); setIsPopupVisible(true); }} style={styles.button}>Non-Veg Menu</button>
        <button onClick={() => { setMenuType('Special Menu'); setSelectedDay(''); setIsPopupVisible(true); }} style={styles.button}>Special Menu</button>
      </div>

      {menuType && <h2 style={styles.selectedMenu}>Selected Menu: {menuType}</h2>}

      <label htmlFor="daySelect" style={styles.label}>Select Day:</label>
      <div style={styles.dropdownContainer}>
        <select 
          id="daySelect" 
          value={selectedDay} 
          onChange={(e) => setSelectedDay(e.target.value)}
          disabled={!menuType}
          style={styles.select}
        >
          <option value="">-- Select a Day --</option>
          <option value="Day 1">Day 1</option>
          <option value="Day 2">Day 2</option>
          <option value="Day 3">Day 3</option>
          <option value="Day 4">Day 4</option>
          <option value="Day 5">Day 5</option>
          <option value="Day 6">Day 6</option>
          <option value="Day 7">Day 7</option>
          <option value="Day 9">Day 8</option>
          <option value="Day 9">Day 9</option>
          <option value="Day 10">Day 10</option>
        </select>
      </div>

      <div style={styles.menuDisplay}>
        {displayMenu()}
      </div>

      {isPopupVisible && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <h2 style={styles.popupHeader}>Menu Selected</h2>
            <p>{menuType} selected!</p>
            <div style={styles.popupMenu}>
              {displayMenu()}
            </div>
            <button onClick={() => setIsPopupVisible(false)} style={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#222629',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
    color: '#fff',
  },
  header: {
    textAlign: 'center',
    color: '#86C232',
    marginBottom: '20px',
  },
  menuSelector: {
    textAlign: 'center',
    margin: '20px 0',
  },
  button: {
    backgroundColor: '#86C232',
    color: '#0d0d0d',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 10px',
    transition: 'background-color 0.3s ease',
  },
  selectedMenu: {
    textAlign: 'center',
    color: '#86C232',
  },
  label: {
    display: 'block',
    margin: '20px 0 5px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#86C232',
  },
  dropdownContainer: {
    textAlign: 'center',
  },
  select: {
    padding: '10px',
    borderRadius: '5px',
    width: '200px',
    display: 'block',
    margin: '0 auto',
    backgroundColor: '#1a1a2e',
    color: '#e2e8f0',
  },
  menuDisplay: {
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#474B4F',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    maxWidth: '600px',
  },
  popup: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popupContent: {
    backgroundColor: '#222629', // Dark background to match theme
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    color: '#e2e8f0',
  },
  popupHeader: {
    color: '#00ffc6', // Neon aqua for header
    marginBottom: '10px',
  },
  popupMenu: {
    margin: '20px 0',
  },
  popupMenuItem: {
    margin: '5px 0',
    fontSize: '1.1em',
    fontWeight: 'bold',
    padding: '10px',
    border: '1px solid #00a8ff', // Neon blue border
    borderRadius: '5px',
    backgroundColor: '#86C232', // Neon green for items
    color: 'white',
  },
  message: {
    color: '#e2e8f0',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#86C232',
    color: '#0d0d0d',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  }
};

export default MessMenu;
