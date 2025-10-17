'use client';

import { useState, useRef, type FormEvent } from 'react';

export default function ContactCard() {
  const [status, setStatus] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const name = nameRef.current?.value.trim() || '';
    const email = emailRef.current?.value.trim() || '';
    const message = messageRef.current?.value.trim() || '';

    if (name.length < 2) {
      setStatus('Please enter a valid name');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setStatus('Please enter a valid email address');
      return;
    }

    if (message.length < 10) {
      setStatus('Message must be at least 10 characters long');
      return;
    }

    setStatus('Message sent successfully!');
    e.currentTarget.reset();
  }

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <form id="contactForm" onSubmit={handleSubmit}>
          <input type="text" id="name" placeholder="Your Name" required ref={nameRef} />
          <input type="email" id="email" placeholder="Your Email" required ref={emailRef} />
          <textarea id="message" placeholder="Your Message" required ref={messageRef}></textarea>
          <button type="submit">Send Message</button>
        </form>
        <p id="formStatus">{status}</p>
      </div>
    </div>
  );
}