import React from 'react';
import AvocardioLogo from '../../Image/Avocardio.png';

const About = ({ title }) => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '20px',
    padding: '20px',
    backgroundColor: '#d2f5d2',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '100%',
    maxWidth: '1200px', 
    margin: '0 auto'
  };
  

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
  };

  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#444',
    fontSize: '1.2rem',
    lineHeight: '1.5'
  };
  
  

  // const headingStyle = {
  //   fontSize: '36px',
  //   fontWeight: 'bold',
  //   marginBottom: '20px',
  //   color: '#222'
  // };

  // const paragraphStyle = {
  //   marginBottom: '20px',
  //   lineHeight: '1.5'
  // };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src={AvocardioLogo} alt="Avocardio Logo" style={imageStyle} />
      </div>
      <div style={textStyle}>
        <h1>Welcome to Avocardio</h1>

        <p>Welcome to Avocardio, the fitness app that helps you go from soft pulp to strong core. Our team of four talented coders created this website with the belief that everyone has the potential to transform themselves into something amazing with a little bit of effort and the right tools, just like the mighty avocado.</p>

        <p> Our user-friendly website allows you to search for any body part and see a corresponding Giphy that demonstrates how to target that specific area. We have a wide variety of Giphys for different body parts, making it easy for beginners and seasoned athletes alike to find the exercises that suit them best. Our website is also constantly updated with new content, providing you with fresh inspiration for your workouts. </p>

        <p> At Avocardio, we believe that fitness should be accessible to all. We put a lot of hard work into making our website user-friendly and accessible for everyone, so that you can achieve your fitness goals. Our slogan, "from soft pulp to strong core," encapsulates our belief that everyone has the potential to transform themselves into something amazing.</p>

        <p> We hope you enjoy using Avocardio as much as we enjoyed creating it. If you have any feedback or suggestions for us, please don't hesitate to get in touch. We are always looking for ways to improve our website and make it even better for our users. Thank you for choosing Avocardio for your fitness needs.</p>

        <p> Let's get moving!</p>
      </div>
    </div>
  );
};

export default About;
