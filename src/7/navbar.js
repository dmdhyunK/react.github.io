import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <h2 style = {styles.logo}>Massimo Vignelli</h2>
            <ul style={styles.menu}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>Modernism</Link></li>
                <li><Link to='/location'>Location</Link></li>
            </ul>
        </nav>
    );
};

const styles = {
    nav:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#6f4e37',
        color: '#fff',
        padding: '1rem 2rem'
    },
    logo: {
        margin:0
    },

    menu:{
        listStyle:'none',
        display: 'flex',
        gap: '1.5rem',
        margin: 0
    }
};

export default Navbar;