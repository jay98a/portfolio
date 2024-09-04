import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

const user_details = { 
  phone_number: '+1 647-822-4489',
  email: 'jay98a@gmail.com'
}


const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Container>
        <Row>
          <Col md={6} className="contact-details">
            <h2>Contact</h2>
            <p>Looking forward to hearing from you</p>
            <h4>Phone</h4>
            <p>{user_details.phone_number}</p>
            <h4>Email</h4>
            <p>{user_details.email}</p>
          </Col>
          <Col md={6} className="contact-form">
            <form>
              <Row>
                <Col sm={6}>
                  <label className='label_formate'>First Name</label>
                  <input type="text" name="firstName" className="form-control" />
                  
                  <label className='label_formate'>Email</label>
                  <input type="email" name="email" className="form-control" />
                </Col>
                <Col sm={6}>
                  <label className='label_formate'>Last Name</label>
                  <input type="text" name="lastName" className="form-control" />
                  
                  <label className='label_formate'>Subject</label>
                  <input type="text" name="subject" className="form-control" />
                </Col>
                <Col sm={8}>
                  <label className='label_formate'>Message</label>
                  <textarea name="message" className='form-control'></textarea>
                </Col>
                <Col sm={4}>
                  <button type="submit">Submit</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
