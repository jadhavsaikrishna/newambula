import React from 'react';
import { Link } from 'react-router-dom';

const paragraphStyle = {
    fontSize: '25px',
    lineHeight: '2.5',
    marginBottom: '30px',
    color: '#333',
  };

function HomePage() {
  return (

<div>
      <h2>Welcome to Our App</h2>
      <p style={paragraphStyle}>
      The app is a React-based to-do list and shopping cart. Users can add, mark as completed, 
      and remove tasks from the to-do list. They can also add and remove items from the shopping cart. 
      The app integrates with an API to display fetched data in a visually appealing format. 
      It includes multiple pages using React Router: a home page with a welcome message, 
      an about page providing information about the project, and a contact page with a form for user inquiries.
       The app implements form validation, error handling, and styling using CSS..
      </p>
<div>
        <Link to="/about" style={buttonStyle}>About</Link>
        <Link to="/cart" style={buttonStyle}>ShoppingCart</Link>
        <Link to="/todo" style={buttonStyle}>TodoList</Link>
        <Link to="/contact" style={buttonStyle}>ContactPage</Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  background: '#3498db',
  color: '#fff',
  textDecoration: 'none',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer',
  margin: '5px',
};

export default HomePage;
