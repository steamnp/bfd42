import React from "react";
import topCard from "./assets/topCard.svg";
import styles from './layout.module.css'
import './global.css'
import avatar from './assets/avatar.jpg'

export default function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.card}>
        <div className={styles.top}>
          <img className={styles.img} src={topCard} alt="" />
          <button className={styles.btn}> Learning </button>
          <p className={styles.date}>Published 21 Dec 2023 </p>
        </div>
        <div className={styles.bottom}>
            <h2 className={styles.heading}>HTML & CSS foundations</h2>
            <p className = {styles.para}> These languages are the backbone of every 
            <br/>website, defining structure, content, and 
            <br/>presentation.
            </p>
            <footer className = {styles.cardfooter}>
                <img className={styles.avatar} src={avatar} alt='avatar'/>
                <p className ={styles.personname}>Greg Hooper</p>
            </footer>

        </div>
      </div>
    </div>
  );
}
