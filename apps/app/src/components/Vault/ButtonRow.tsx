import React from 'react';
import styles from './ButtonRow.module.css';

const ButtonRow = () => {
  return (
    <div className={styles.wrap}>
      <a href="#" className={`${styles.button} ${styles.blue}`}>Yield Lotto</a>
      <a href="#" className={styles.button}>Open Source</a>
      <a href="#" className={`${styles.button} ${styles.green}`}>Projects</a>
      <a href="#" className={`${styles.button} ${styles.purple}`}>Research</a>
      <a href="#" className={`${styles.button} ${styles.yellow}`}>NFTs</a>
      <a href="#" className={`${styles.button} ${styles.blue}`}>Culture/Meme</a>
      <a href="#" className={styles.button}>Good Causes</a>
      <a href="#" className={`${styles.button} ${styles.green}`}>Creators</a>
      <a href="#" className={`${styles.button} ${styles.purple}`}>Artists</a>
      <a href="#" className={`${styles.button} ${styles.yellow}`}>NSFW</a>
      <a href="#" className={`${styles.button} ${styles.blue}`}>Longtail</a>
      <a href="#" className={styles.button}>Eth Denver</a>
      <a href="#" className={`${styles.button} ${styles.green}`}>DeScience</a>
      <a href="#" className={`${styles.button} ${styles.purple}`}>ReFinance</a>
      <a href="#" className={`${styles.button} ${styles.yellow}`}>Self Growth</a>
    </div>
  );
};

export default ButtonRow;
