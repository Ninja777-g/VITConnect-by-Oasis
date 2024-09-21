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
      rating: 3.5,
      hours: '11 AM - 12 PM',
    },
    {
      name: 'Samsung Store',
      location: 'Near Foodies',
      description: 'Electronics.',
      price: '5000',
      rating: 3,
      hours: '12 AM - 8 PM',
    },
    {
      name: 'Optician',
      location: 'Men\'s Hostel Gate',
      description: 'Accessories.',
      price: '3000',
      rating: 2.5,
      hours: '9 AM - 8 PM',
    },
    {
      name: 'Shri Balaji Store',
      location: 'Near TT',
      description: 'Groceries & Stationery.',
      price: '500',
      rating: 5,
      hours: '10 AM - 9 PM',
    },
    {
      name: 'Enzo ',
      location: 'Near A block Mens hostel',
      description: 'Groceries .',
      price: '200',
      rating: 4,
      hours: '6 AM - 9 PM',
    },
    {
      name: 'Lassi Shop',
      location: 'Near SMV',
      description: 'lassi,shakes etc.',
      price: '100',
      rating: 5,
      hours: '10 AM - 9 PM',
    },
    {
      name: 'All mart shop',
      location: 'Near Gate 2',
      description: 'Groceries & Stationery.',
      price: '500',
      rating: 5,
      hours: '10 AM - 9 PM',
    },
    {
      name: 'Xerox shop',
      location: 'Near Anna Auditorium',
      description: 'Groceries & Stationery.',
      price: '500',
      rating: 2,
      hours: '10 AM - 9 PM',
    },
    {
      name: 'Darling Cafe',
      location: 'Near TT',
      description: 'Food.',
      price: '500',
      rating: 4.5,
      hours: '10 AM - 9 PM',
    },
    {
      name: 'Darling Restaurant',
      location: 'Near TT',
      description: 'Main Course.',
      price: '250',
      rating: 4,
      hours: '10 AM - 9 PM',
    },
  ];
  const [displayedShops, setDisplayedShops] = React.useState(shops);

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
          display: none;
          margin-top: 10px;
          color: #f4f4f9; /* Light text */
        }
        .shop-item.active .details {
          display: block;
          animation: fadeIn 0.5s ease;
        }
        .rating {
          display: flex;
          margin: 10px 0;
        }
        .rating i {
          color: gold;
          margin-right: 3px;
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
