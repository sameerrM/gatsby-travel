import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="contact" subtitle="us" />
            <div className={styles.center}>
                <form action="https://formspree.io/samir_nox@hotmail.com" method="POST" className={styles.form}>
                    <div>
                        <input type="text" name="name" id="name" className={styles.formControl} placeholder="Name" />
                    </div>
                    <div>
                        <input type="email" name="email" id="email" className={styles.formControl} placeholder="Email" />
                    </div>
                    <div>
                        <textarea name="message" id="message" rows="10" className={styles.formControl} placeholder="Message"></textarea>
                    </div>
                    <div>
                        <button type="submit" className={styles.submit}>Submit</button>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Contact
