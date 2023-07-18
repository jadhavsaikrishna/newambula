import React from 'react';

function AboutPage() {
  const noteStyle = {
    fontSize: '26px',
    lineHeight: '2.5',
    marginBottom: '28px',
    color: '#334',
  };

  return (
    <div>
      <h2>About Us</h2>
      <p style={noteStyle}>
        Welcome to our company! We are dedicated to providing high-quality
        products and services to our customers. Our team is passionate about
        delivering exceptional experiences and ensuring customer satisfaction.
        With a focus on innovation and reliability, we strive to meet the needs
        and exceed the expectations of our valued clients. Thank you for
        choosing us and being a part of our journey. We look forward to serving
        you and building long-lasting relationships. For any inquiries or
        feedback, please feel free to reach out to us through the contact
        details provided.
      </p>
    </div>
  );
}

export default AboutPage;
