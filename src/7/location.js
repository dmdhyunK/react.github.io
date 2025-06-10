import React from "react";

const Location = () => {
    return(
        <section style= {styles.section}>
            <h2>Visit Us</h2>
            <p>경기도 의왕시 계원대학로 66</p>
            <iframe title="cafe Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.4735762871933!2d126.97572151153292!3d37.378631234764065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5fd3a22f1807%3A0x9bc35489a1c1e763!2z6rOE7JuQ7JiI7Iig64yA7ZWZ6rWQ!5e0!3m2!1sko!2skr!4v1744879762827!5m2!1sko!2skr"
            width="100%"
            height="300"
            style={{border:0,marginTop: '1rem'}}
            allowFullScreen=""
            loading="lazy"></iframe>
        </section>
    );
};

const styles ={
    section:{
        padding: '2rem',
        textAlign: 'center'
    }
};

export default Location;