import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9hr63kp",
        "template_n0ug7cr",
        form.current,
        "KZCZbJ4hNgVcqghK1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon"></MdOutlineEmail>
            <h4>Email</h4>
            <h5>oahidzihad1@gmail.com</h5>
            <a href="mailto:oahidzihad1@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon"></RiMessengerLine>
            <h4>Messenger</h4>
            <h5>Oahid Zihad</h5>
            <a href="https://m.me/oahid.zihad" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"></BsWhatsapp>
            <h4>Whatsapp</h4>
            <h5>+8801752746973</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+8801752746973"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
