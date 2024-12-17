import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./home.module.css";
import img from "../../Assets/images/homepage.jpg";
import one from "../../Assets/images/one.pnj.png";

const Home = () => {
    return (
        <div>

            <div>
                <div>The Most Sought-After Product Management and Product Marketing Certifications In The World</div>
                <div className={styles.cardcontainer}>
                   <div className={styles.card}>
                      <span className={styles.carttext}>Product Manager</span>
                      <span>Learn More </span>
                      <div><img className={styles.imageone} src={one} alt="" /></div>
                   </div>
                   <div className={styles.card}>
                      <span>Product Manager</span>
                      <span>Learn More </span>
                      <div><img className={styles.imageone} src={one} alt="" /></div>
                   </div>
                   <div className={styles.card}>
                      <span>Product Manager</span>
                      <span>Learn More </span>
                      <div><img className={styles.imageone} src={one} alt="" /></div>
                   </div>

                 
                </div>
                <div  className={styles.cardcontainer}>
                <div className={styles.card}>
                      <span>Product Manager</span>
                      <span>Learn More </span>
                      <div><img className={styles.imageone} src={one} alt="" /></div>
                   </div>
                   <div className={styles.card}>
                      <span>Product Manager</span>
                      <span>Learn More </span>
                      <div><img className={styles.imageone} src={one} alt="" /></div>
                   </div>
                  
                </div>
            </div>

        </div>
    );
}

export default Home;



// cardtext
// className={styles.carttext} 