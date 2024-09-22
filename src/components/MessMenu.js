import React, { useState } from 'react';

function MessMenu() {
  const menus = {
    "Veg Menu": {
        "Day 1": ["Breakfast - Veg Curry, Pancakes, Hash Browns", "Lunch - Rice, Dal Fry, Veg Pizza", "Snacks - Salad, French Fries", "Dinner - Paneer Butter Masala, Garlic Bread, Ice Cream"],
        "Day 2": ["Breakfast - Paneer Butter Masala, Toast with Avocado, Scrambled Eggs", "Lunch - Naan, Jeera Rice, Veg Pasta", "Snacks - Raita, Veg Sandwich", "Dinner - Veg Biryani, Phulka, Chocolate Mousse"],
        "Day 3": ["Breakfast - Dal Tadka, Waffles, Masala Omelette", "Lunch - Jeera Rice, Mixed Veg Curry, Veg Burger", "Snacks - Papad, Nachos", "Dinner - Palak Paneer, Phulka, Ice Cream"],
        "Day 4": ["Breakfast - Veg Biryani, Croissant, Smoothie", "Lunch - Phulka, Veg Fried Rice, Veg Lasagna", "Snacks - Dal Maharani, Cheese Sticks", "Dinner - Matar Paneer, Garlic Bread, Brownie"],
        "Day 5": ["Breakfast - Aloo Gobi, Bagel with Cream Cheese, Pancakes", "Lunch - Chapati, Veg Pulao, Veg Grilled Sandwich", "Snacks - Raita, Chips & Salsa", "Dinner - Dal Tadka, Veg Wrap, Ice Cream"],
        "Day 6": ["Breakfast - Palak Paneer, Cereal with Milk, Fruit Salad", "Lunch - Jeera Rice, Mixed Veg Curry, Veg Quiche", "Snacks - Salad, Veg Spring Rolls", "Dinner - Veg Biryani, Phulka, Cheesecake"],
        "Day 7": ["Breakfast - Veg Pulao, Waffles, Veg Sausages", "Lunch - Raita, Jeera Rice, Veg Tacos", "Snacks - Papad, Veg Bruschetta", "Dinner - Paneer Butter Masala, Naan, Ice Cream"],
        "Day 8": ["Breakfast - Matar Paneer, Toast with Peanut Butter, Smoothie", "Lunch - Phulka, Veg Fried Rice, Veg Burrito", "Snacks - Dal Tadka, Potato Wedges", "Dinner - Veg Pulao, Phulka, Apple Pie"],
        "Day 9": ["Breakfast - Veg Korma, Cereal with Almond Milk, Hash Browns", "Lunch - Jeera Rice, Dal Fry, Veg Enchiladas", "Snacks - Salad, Veg Nuggets", "Dinner - Veg Biryani, Phulka, Ice Cream"],
        "Day 10": ["Breakfast - Veg Fried Rice, Bagel with Cream Cheese, Scrambled Eggs", "Lunch - Manchurian, Rice, Veg Pizza", "Snacks - Soup, Veg Nachos", "Dinner - Palak Paneer, Garlic Bread, Chocolate Cake"]
    },
    "Non-Veg Menu": {
        "Day 1": ["Breakfast - Chicken Curry, Scrambled Eggs, Toast", "Lunch - Rice, Butter Chicken, Garlic Naan", "Snacks - Salad, French Fries", "Dinner - Ice Cream, Chicken Tikka"],
        "Day 2": ["Breakfast - Fish Fry, Omelette, Avocado Toast", "Lunch - Naan, Paneer Butter Masala, Chicken Korma", "Snacks - Soup, Veg Spring Rolls", "Dinner - Ice Cream, Grilled Salmon"],
        "Day 3": ["Breakfast - Mutton Biryani, Masala Omelette, Paratha", "Lunch - Raita, Chicken Salad, Jeera Rice", "Snacks - Salad, Nachos", "Dinner - Ice Cream, Fish Curry"],
        "Day 4": ["Breakfast - Chicken Korma, Bagel with Cream Cheese, Smoothie", "Lunch - Chapati, Mutton Rogan Josh, Mixed Veg Curry", "Snacks - Soup, Veg Pakora", "Dinner - Ice Cream, Garlic Chicken"],
        "Day 5": ["Breakfast - Fish Curry, Pancakes, Fruit Salad", "Lunch - Rice, Tandoori Chicken, Dal Tadka", "Snacks - Salad, Veg Nuggets", "Dinner - Ice Cream, Butter Chicken"],
        "Day 6": ["Breakfast - Mutton Curry, Toast with Jam, Cereal", "Lunch - Naan, Chicken Biryani, Raita", "Snacks - Veg Sandwich, Soup", "Dinner - Ice Cream, Chicken Shawarma"],
        "Day 7": ["Breakfast - Chicken Biryani, Waffles, Chicken Sausages", "Lunch - Mysore Pak, Tandoori Roti, Chicken Tikka Masala", "Snacks - Raita, Papad", "Dinner - Ice Cream, Mutton Seekh Kebab"],
        "Day 8": ["Breakfast - Fish Fry, Smoothie Bowl, Hash Browns", "Lunch - Chapati, Grilled Chicken, Veg Stir-Fry", "Snacks - Soup, Veg Samosa", "Dinner - Ice Cream, Fish Tacos"],
        "Day 9": ["Breakfast - Mutton Korma, Cereal with Milk, Fruit Smoothie", "Lunch - Rice, Chicken Curry, Veg Biryani", "Snacks - Salad, Hummus and Pita", "Dinner - Ice Cream, Lamb Chops"],
        "Day 10": ["Breakfast - Chicken Fried Rice, Omelette, Croissant", "Lunch - Manchurian, Grilled Fish, Naan", "Snacks - Soup, Cheese Sticks", "Dinner - Ice Cream, Mutton Biryani"]
      ,
    },
    "Special Menu": {
      "Day 1": ["Breakfast - Pasta, Scrambled Eggs, Fruit Salad", "Lunch - Garlic Bread, Chicken Alfredo, Caesar Salad", "Snacks - Caesar Salad, Veggie Sticks with Hummus", "Dinner - Ice Cream, Chocolate Cake"],
      "Day 2": ["Breakfast - Biryani, Boiled Eggs, Yogurt", "Lunch - Raita, Paneer Tikka, Garlic Naan", "Snacks - Chocolate Mousse, Fresh Fruit", "Dinner - Ice Cream, Brownie Sundae"],
      "Day 3": ["Breakfast - Pizza, Hash Browns, Fruit Smoothie", "Lunch - Garlic Bread, Veggie Pizza, Greek Salad", "Snacks - Salad, Mini Caprese Skewers", "Dinner - Ice Cream, Tiramisu"],
      "Day 4": ["Breakfast - Noodles, Spring Rolls, Pineapple Chunks", "Lunch - Manchurian, Fried Rice, Sweet and Sour Soup", "Snacks - Tomato Soup, Breadsticks", "Dinner - Ice Cream, Cheesecake"],
      "Day 5": ["Breakfast - Burger, Sweet Potato Fries, Fruit Salad", "Lunch - Fries, Chicken Nuggets, Coleslaw", "Snacks - Salad, Nachos with Salsa", "Dinner - Ice Cream, Fruit Tart"],
      "Day 6": ["Breakfast - Pulao, Aloo Tikki, Yogurt", "Lunch - Raita, Chicken Curry, Mixed Veggies", "Snacks - Salad, Vegetable Soup", "Dinner - Ice Cream, Mocha Mousse"],
      "Day 7": ["Breakfast - Fried Rice, Egg Rolls, Fresh Fruit", "Lunch - Manchurian, Steamed Buns, Hot and Sour Soup", "Snacks - Tomato Soup, Veggie Chips", "Dinner - Ice Cream, Apple Pie"],
      "Day 8": ["Breakfast - Pasta, Frittata, Fruit Smoothie", "Lunch - Garlic Bread, Spinach Lasagna, Mixed Salad", "Snacks - Salad, Cheese Platter", "Dinner - Ice Cream, Lemon Sorbet"],
      "Day 9": ["Breakfast - Biryani, Paneer Pakora, Raita", "Lunch - Raita, Vegetable Korma, Pulao", "Snacks - Chocolate Brownies, Fresh Fruit", "Dinner - Ice Cream, Vanilla Pudding"],
      "Day 10": ["Breakfast - Pizza, Sausages, Fruit Salad", "Lunch - Garlic Bread, Beef Stroganoff, Caesar Salad", "Snacks - Salad, Creamy Mushroom Soup", "Dinner - Ice Cream, Tiramisu"]
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
