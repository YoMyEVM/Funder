import React from 'react';
import styles from './ButtonRow.module.css';

interface ButtonRowProps {
  setSelectedButton: React.Dispatch<React.SetStateAction<string | null>>;
}

const ButtonRow: React.FC<ButtonRowProps> = ({ setSelectedButton }) => {
  return (
    <div className={styles.wrap}>
      <a href="#" className={`${styles.button} ${styles.blue}`} onClick={() => setSelectedButton('Yield Lotto')}>Yield Lotto</a>
      <a href="#" className={styles.button} onClick={() => setSelectedButton('Open Source')}>Open Source</a>
      <a href="#" className={`${styles.button} ${styles.green}`} onClick={() => setSelectedButton('Projects')}>Projects</a>
      <a href="#" className={`${styles.button} ${styles.purple}`} onClick={() => setSelectedButton('Research')}>Research</a>
      <a href="#" className={`${styles.button} ${styles.yellow}`} onClick={() => setSelectedButton('NFTs')}>NFTs</a>
      <a href="#" className={`${styles.button} ${styles.blue}`} onClick={() => setSelectedButton('Culture/Meme')}>Culture/Meme</a>
      <a href="#" className={styles.button} onClick={() => setSelectedButton('Good Causes')}>Good Causes</a>
      <a href="#" className={`${styles.button} ${styles.green}`} onClick={() => setSelectedButton('Creators')}>Creators</a>
      <a href="#" className={`${styles.button} ${styles.purple}`} onClick={() => setSelectedButton('Artists')}>Artists</a>
      <a href="#" className={`${styles.button} ${styles.yellow}`} onClick={() => setSelectedButton('NSFW')}>NSFW</a>
      <a href="#" className={`${styles.button} ${styles.blue}`} onClick={() => setSelectedButton('Longtail')}>Longtail</a>
      <a href="#" className={styles.button} onClick={() => setSelectedButton('Eth Denver')}>Eth Denver</a>
      <a href="#" className={`${styles.button} ${styles.green}`} onClick={() => setSelectedButton('DeScience')}>DeScience</a>
      <a href="#" className={`${styles.button} ${styles.purple}`} onClick={() => setSelectedButton('ReFinance')}>ReFinance</a>
      <a href="#" className={`${styles.button} ${styles.yellow}`} onClick={() => setSelectedButton('Self Growth')}>Self Growth</a>
    </div>
  );
};

export default ButtonRow;
