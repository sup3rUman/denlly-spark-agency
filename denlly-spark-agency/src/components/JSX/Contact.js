import React from 'react';
import styles from '../CSS/Contact.module.css';
function Contact() {
  return (
    <>
      <section id="contact" className={styles.contactSection}>
        <h2 className={styles.contactHeader}>Contact Us</h2>
        <p className={styles.contactInfo}>Phone: 0729 994 794</p>
        <p className={styles.contactInfo}>
          Email: <a href="mailto:denlly07@gmail.com" className={styles.contactLink}>denlly07@gmail.com</a>
        </p>
      </section>
      <div className={styles.whatsappFloatingIcon}>
        <a href="https://wa.me/c/254729994794" target="_blank" rel="noopener noreferrer"></a>
      </div>
    </>
  );
}

export default Contact;