import React from 'react';
import ReactDOM from 'react-dom'; // Updated import
import App from './App';
import './styles.css'; // Ensure this path is correct

const container = document.getElementById('root');

if (container) {
  ReactDOM.render( // Updated method
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container // Pass container as the second argument
  );
} else {
  console.error('Root element not found. Ensure your index.html has <div id="root"></div>');
}
