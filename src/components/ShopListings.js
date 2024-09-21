import React from 'react';
// Include FontAwesome for icons
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome directly from the package

const ShopListings = () => {
  const shops = [
    {
      name: 'Medical Store',
      location: 'Near Women\'s Hostel',
      description: 'Medical essentials.',
      price: '300',
      hours: '11 AM - 12 PM',
    },
    {
      name: 'Samsung Store',
      location: 'Near Foodies',
      description: 'Electronics.',
      price: '5000',
      hours: '12 AM - 8 PM',
    },
    {
      name: 'Optician',
      location: 'Men\'s Hostel Gate',
      description: 'Accessories.',
      price: '3000',
      hours: '9 AM - 8 PM',
    },
    {
      name: 'Shri Balaji Store',
      location: 'Near TT',
      description: 'Groceries & Stationery.',
      price: '500',
      hours: '10 AM - 9 PM',
    },
  ];

  const handleToggleDetails = (index) => {
    const items = document.querySelectorAll('.shop-item');
    items[index].classList.toggle('active');
  };

  const handleFavoriteToggle = (event) => {
    event.stopPropagation();
    event.currentTarget.classList.toggle('liked');
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

  const [displayedShops, setDisplayedShops] = React.useState(shops);

  return (
    <div className="container">
      <h1>Shop Listings</h1>

      <div className="search-bar">
        <input type="text" id="search" placeholder="Search for shops..." onChange={handleSearch} />
        <select id="sort" className="sort-select" onChange={handleSort}>
          <option value="default">Sort by</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>

      <div id="shop-list">
        {displayedShops.map((shop, index) => (
          <div key={index} className="shop-item" data-price={shop.price} onClick={() => handleToggleDetails(index)}>
            <i className="favorite far fa-heart" onClick={handleFavoriteToggle}></i>
            <h2>{shop.name}</h2>
            <p>Location: {shop.location}</p>
            <p>Description: {shop.description}</p>
            <p className="price">Avg. Price: ₹{shop.price}</p>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={`fas fa-star${i < Math.floor(shop.rating) ? '' : (i === Math.floor(shop.rating) ? '-half-alt' : '-o')}`}></i>
              ))}
            </div>
            <div className="details">Opening Hours: {shop.hours}</div>
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
        h1, h2 {
          text-align: center;
          color: #00ffc6; /* Neon aqua */
          margin-bottom: 20px;
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
        .shop-item h2 {
          margin: 0 0 10px;
          color: #00ffc6; /* Neon aqua */
          transition: color 0.3s ease;
        }
        .shop-item:hover h2 {
          color: white;
        }
        .shop-item .price {
          font-weight: bold;
          color: #eef7f0;
        }
        .shop-item .details {
          display: none;
          margin-top: 10px;
          color: #f4f4f9; /* Light text */
        }
        .shop-item.active .details {
          display: block;
          animation: fadeIn 0.5s ease;
        }
        .favorite {
          position: absolute;
          top: 10px;
          right: 15px;
          cursor: pointer;
          font-size: 24px;
        }
        .favorite.liked {
          color: red;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ShopListings;
