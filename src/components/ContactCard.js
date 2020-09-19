import React from 'react'

const ContactCard = () => (
  <section className="{ComponentStyles.body}">
    <div className="contact-card-container">
      <div className="contact-card-front contact-card-side">
        <div className="content">
          <h1>Phillip Sylvain</h1>
          <p>
            {' '}
            I am a front and backend web developer. I specialize in the backend
            but have more recently worked client side. Throughout my career, I
            have adapted my skills through a constant continual learning
            mentality.
          </p>
        </div>
      </div>
      <div className="contact-card-back contact-card-side">
        <div className="contact-card-content">
          <h1>Contact Me</h1>
          <form>
            <label>Your Name :</label>
            <input type="text" placeholder="Philip Sylvain"></input>
            <label>Your E-mail :</label>
            <input type="text" placeholder="Example@mail.com"></input>
            <label>Your message :</label>
            <textarea placeholder="The Subject"></textarea>
            <input type="submit" value="Done"></input>
          </form>
        </div>
      </div>
    </div>
  </section>
)
export default ContactCard
