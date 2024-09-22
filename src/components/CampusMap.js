import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';

const CampusMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([12.9716, 79.1595], 16);
    let routingControl;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const locations = {
      "Main Gate": [12.9716, 79.1595],
      "Library": [12.9728, 79.1635],
      "Men's Hostel": [12.9735, 79.1580],
      "Auditorium": [12.9722, 79.1620],
      "Food Court": [12.9742, 79.1618],
      "Admin Block": [12.9750, 79.1610],
      "Technology Tower": [12.9760, 79.1605],
      "Women's Hostel": [12.9705, 79.1590],
      "Sports Complex": [12.9740, 79.1585]
    };

    const startSelect = document.getElementById('start');
    const endSelect = document.getElementById('end');

    Object.entries(locations).forEach(([name, coords]) => {
      startSelect.add(new Option(name, coords));
      endSelect.add(new Option(name, coords));
    });

    const calculateRoute = (start, end) => {
      if (routingControl) {
        map.removeControl(routingControl);
      }

      routingControl = L.Routing.control({
        waypoints: [
          L.latLng(start[0], start[1]),
          L.latLng(end[0], end[1])
        ],
        routeWhileDragging: true,
        createMarker: () => null,
      }).addTo(map);
    };

    document.getElementById('getDirections').addEventListener('click', () => {
      const startCoords = startSelect.value.split(',').map(Number);
      const endCoords = endSelect.value.split(',').map(Number);
      calculateRoute(startCoords, endCoords);
    });

    document.getElementById('resetMap').addEventListener('click', () => {
      if (routingControl) {
        map.removeControl(routingControl);
        routingControl = null;
      }
      startSelect.selectedIndex = 0;
      endSelect.selectedIndex = 0;
      map.setView([12.9716, 79.1595], 16);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Campus Directions</h1>
        <p>Find your way around the campus with ease</p>
      </div>

      <div className="form-container">
        <label htmlFor="start">Start Location:</label>
        <select id="start"></select>

        <label htmlFor="end">Destination:</label>
        <select id="end"></select>

        <button id="getDirections">Get Directions</button>
        <button id="resetMap">Reset Map</button>
      </div>

      <div id="map" style={{ height: '50vh', width: '100%', borderRadius: '12px' }}></div>

      <style>
        {`
          .body {
            background-color: #1a1a1a; /* Dark Grey */
            color: #f4f4f9; /* Light text color */
            margin: 0;
            font-family: 'Poppins', sans-serif;
          }
          .container {
            max-width: 1200px;
            margin: auto;
            padding: 20px;
            background-color: #6B6E70; /* Grey background */
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }
          .header {
            background-color: black; /* Black background for the top part */
            padding: 40px 20px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            animation: fadeIn 0.5s ease-in;
          }
          .header h1 {
            color: #86C232;
            font-size: 3rem;
            font-weight: bold;
            letter-spacing: 2px;
            margin: 0;
          }
          .header p {
            color: #86C232;
            font-size: 1.2rem;
            margin: 10px 0 0 0;
          }
          .form-container {
            padding: 20px;
            background-color: #474B4F;
            border-radius: 12px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
            animation: slideIn 0.5s ease-in;
          }
          label {
            font-weight: bold;
            margin-bottom: 5px;
            display: block;
            color: #ffffff;
          }
          select, button {
            padding: 12px;
            margin-bottom: 15px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 16px;
            width: 100%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: border-color 0.3s, box-shadow 0.3s;
            background-color: #6B6E70;
            color: #ffffff;
          }
          button {
            background-color: #86C232;
            color: white;
            cursor: pointer;
            font-weight: bold;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
          }
          button:hover {
            background-color: #61892F;
          }
          .leaflet-popup-content {
            color: black !important;
          }
          .leaflet-routing-container {
            color: black !important;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default CampusMap;
