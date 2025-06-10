import React from "react";

const About = () => {
    return (
        <section style = {styles.section}>
            <h2>About Us</h2>
            <p>
                Kaywon is a small School in the heart of the city. We take pride in our students, locally sourced pasties, and relaxed atmosphere.
            </p>
        </section>
    );
};

const styles = {
    section: {
        padding: '2rem',
        backgroundColor: '#f7f3f0',
        textAlign: 'center'
    }
};

export default About;
