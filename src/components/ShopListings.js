import React from 'react';
// Include FontAwesome for icons
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome directly from the package

const ShopListings = () => {
  const shops = [
    {
      name: 'Medical Store',
      location: 'Near Women\'s Hostel',
      description: 'Medical essentials.',
      hours: '11 AM - 12 PM',
      price: '300',
      rating: 3.5,
      mobile: '123-456-7890', // Example mobile number
    },
    {
      name: 'Samsung Store',
      location: 'Near Foodies',
      description: 'Electronics.',
      hours: '12 AM - 8 PM',
      price: '5000',
      rating: 3,
      mobile: '098-765-4321',
    },
    {
      name: 'Optician',
      location: 'Men\'s Hostel Gate',
      description: 'Accessories.',
      hours: '9 AM - 8 PM',
      price: '3000',
      rating: 2.5,
      mobile: '987-654-3210',
    },
    {
      name: 'Shri Balaji Store',
      location: 'Near TT',
      description: 'Groceries & Stationery.',
      hours: '10 AM - 9 PM',
      price: '500',
      rating: 5,
      mobile: '123-456-7891',
    },
    {
      name: 'Enzo',
      location: 'Near A block Mens hostel',
      description: 'Groceries.',
      hours: '6 AM - 9 PM',
      price: '200',
      rating: 4,
      mobile: '321-654-9870',
    },
    {
      name: 'Lassi Shop',
      location: 'Near SMV',
      description: 'Lassi, shakes, etc.',
      hours: '10 AM - 9 PM',
      price: '100',
      rating: 5,
      mobile: '654-321-0987',
    },
    {
      name: 'All Mart Shop',
      location: 'Near Gate 2',
      description: 'Groceries & Stationery.',
      hours: '10 AM - 9 PM',
      price: '500',
      rating: 5,
      mobile: '789-012-3456',
    },
    {
      name: 'Xerox Shop',
      location: 'Near Anna Auditorium',
      description: 'Groceries & Stationery.',
      hours: '10 AM - 9 PM',
      price: '500',
      rating: 2,
      mobile: '456-789-0123',
    },
    {
      name: 'Darling Cafe',
      location: 'Near TT',
      description: 'Food.',
      hours: '10 AM - 9 PM',
      price: '500',
      rating: 4.5,
      mobile: '012-345-6789',
    },
    {
      name: 'Darling Restaurant',
      location: 'Near TT',
      description: 'Main Course.',
      hours: '10 AM - 9 PM',
      price: '250',
      rating: 4,
      mobile: '789-654-3210',
    },
  ];

  const [displayedShops, setDisplayedShops] = React.useState(shops);
  const [selectedShop, setSelectedShop] = React.useState(null);

  const handleToggleDetails = (index) => {
    const items = document.querySelectorAll('.shop-item');
    items[index].classList.toggle('active');
    setSelectedShop(shops[index].mobile);
  };

  const handleSearch = (event) => {
    const filter = event.target.value.toLowerCase();
    const items = document.querySelectorAll('.shop-item');
    items.forEach(item => {
      const shopName = item.querySelector('h2').textContent.toLowerCase();
      item.style.display = shopName.includes(filter) ? 'block' : 'none';
    });
  };

  const handleSort = (event) => {
    const sortBy = event.target.value;
    const sortedShops = [...shops];

    if (sortBy === 'price-low-high') {
      sortedShops.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
      sortedShops.sort((a, b) => b.price - a.price);
    }

    setDisplayedShops(sortedShops);
  };

  return (
    <div className="container">
      <h1>Shop Listings</h1>

      <div className="search-bar">
        <input 
          type="text" 
          id="search" 
          placeholder="Search for shops..." 
          onChange={handleSearch} 
          autoComplete="off" // Disable autocomplete
        />
        <select id="sort" className="sort-select" onChange={handleSort}>
          <option value="default">Sort by</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>

      <div id="shop-list">
        {displayedShops.map((shop, index) => (
          <div key={index} className="shop-item" data-price={shop.price} onClick={() => handleToggleDetails(index)}>
            <h2>{shop.name}</h2>
            <p>Location: {shop.location}</p>
            <p>Description: {shop.description}</p>
            <p className="price">Avg. Price: ₹{shop.price}</p>
            <div className="rating">
              {[...Array(5)].map((_, i) => {
                const starClass = i < Math.floor(shop.rating) ? 'fas fa-star' : (i < shop.rating ? 'fas fa-star-half-alt' : 'far fa-star');
                return <i key={i} className={starClass}></i>;
              })}
            </div>
            <div className="details">Opening Hours: {shop.hours}</div>
            {selectedShop === shop.mobile && <div className="mobile">Mobile: {shop.mobile}</div>}
          </div>
        ))}
      </div>

      <style>{`
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
          color: #86C232; /* Updated Title Color */
          margin-bottom: 20px;
        }
        h2 {
          text-align: center;
          color: #86C232; /* Updated Shop Title Color */
          margin: 0 0 10px;
          transition: color 0.3s ease;
        }
        .search-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .search-bar input {
          padding: 10px;
          width: 60%;
          max-width: 400px;
          border-radius: 5px;
          border: 1px solid #ccc;
          background-color: #0f0f1f; /* Darker input background */
          color: #e2e8f0; /* Light text */
        }
        .sort-select {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          background-color: #0f0f1f; /* Darker select background */
          color: #e2e8f0; /* Light text */
        }
        .shop-item {
          border: 1px solid #ccc;
          margin: 10px 0;
          padding: 15px;
          border-radius: 5px;
          background: #232526; /* Dark metallic */
          transition: all 0.3s ease;
          position: relative;
        }
        .shop-item:hover {
          background-color: #00a8ff; /* Neon blue */
          color: white;
          transform: scale(1.02);
        }
        .shop-item:hover h2 {
          color: white; /* Keep h2 white on hover */
        }
        .shop-item .price {
          font-weight: bold;
          color: #eef7f0;
        }
        .shop-item .details {
          display: block;
          margin-top: 10px;
          color: #f4f4f9; /* Light text */
        }
        .mobile {
          margin-top: 10px;
          color: #f4f4f9; /* Light text */
        }
        .rating {
          display: flex;
          margin: 10px 0;
        }
        .rating i {
          color: gold;
          margin-right: 3px;
        }
      `}</style>
    </div>
  );
};

export default ShopListings;
