import React from 'react';

export default function ContactScreen() {

  return (
    <div>
      <h2>Contact Us By Phone</h2>
          <p>
          <a href="callto://+1604111111X"  style={{color: "blue"}}>Call: 604-111-111X</a>
          </p>
      
      <h2>Reach Us Via Email</h2>
          <p> 
             <a href="mailto:support@luxeshop.com" style={{color: "blue"}} >Email: support@luxeshop.com </a>
          </p> <br></br>
          
      <h2 >Visit Us At Our Location (disclaimer: this is a placeholder address)</h2>
      <p align="center">
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.5717439780096!2d-123.11379028431047!3d49.284511579331564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671785ce9e143%3A0x4b36144b6ef7362!2s515%20W%20Hastings%20St%2C%20Vancouver%2C%20BC%20V6B%205K3!5e0!3m2!1sen!2sca!4v1607902414654!5m2!1sen!2sca" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      
      </p>
      </div>
  );
}
