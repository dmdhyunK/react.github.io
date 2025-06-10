import React from "react";

const Home = () => {
    return (
        <section style={styles.section}>
            <h1>Welcome to Our website</h1>
            <p>Handcrafted coffee, cozy vibes, and good people</p>
            <img src="https://design.co.kr/wp-content/uploads/2024/05/140630000000436_O-832x557.jpg" alt="Modern"style={styles.image}></img>
        </section>
    );
};

const styles = {
    section: {
        textAlign: 'center',
        padding: '2rem'
    },
    image: {
        width: '80%',
        maxWidth: '600px',
        marginTop: '1rem',
        borderRadius: '10px'
    }
};

export default Home;