import React, { useState } from 'react';
import design from './picture/design.png';
import design2 from './picture/design2.png';
import design3 from './picture/design3.png';
import design4 from './picture/design4.png';
import design5 from './picture/design5.png';
import design6 from './picture/design6.png';
import design7 from './picture/design7.png';
import design8 from './picture/design8.png';
import design9 from './picture/design9.png';

const references = [
  design,
  design2,
  design3,
  design4,
  design5,
  design6,
  design7,
  design8,
  design9,
];

const Archive = () => {
  const [selectedImage, setSelectedImage] = useState(references[0]); 

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Archive</h1>

      <div style={styles.gridContainer}>
        <div style={styles.references}>
          {references.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`ref-${i}`}
              style={styles.refImg}
              onClick={() => setSelectedImage(src)} 
            />
          ))}
        </div>

        <div style={styles.keyImageSection}>
          <img src={selectedImage} alt="Main Visual" style={styles.keyImage} />
        </div>

        <div style={styles.styleCards}>
          <div style={styles.card}><h3>Color</h3><p>#ececec, #f5eecb, #1d1b18</p></div>
          <div style={styles.card}><h3>Typography</h3><p>Helvetica</p></div>
          <div style={styles.card}><h3>Texture</h3><p>paper, grain</p></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f1f1f1',
    padding: '3rem 2rem',
    fontFamily: "'Helvetica Neue', sans-serif",
    color: '#1a1816',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gap: '2rem',
    maxWidth: '1300px',
    margin: '0 auto',
  },
  references: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
  },
  refImg: {
    width: '100%',
    aspectRatio: '1',
    objectFit: 'cover',
    borderRadius: '6px',
    cursor: 'pointer', 
    transition: 'transform 0.2s',
  },
  keyImageSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  keyImage: {
    width: '100%',
  },
  styleCards: {
    gridColumn: '1 / 3',
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '6px',
  },
};

export default Archive;
