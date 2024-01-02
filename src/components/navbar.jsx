import React from 'react'
import styles from './navbar.module.css'
import '../global.css'

export default function Navbar() {
  return (
    <div className={styles.navbar} >
        
        <a href='/home'>Home</a>
       
        <a href='/about'>About Us</a>
       
        <a href='/news'>News</a>
        

  
      </div>
  )
}
