import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import productimage from "../../Assets/images/product_icon.png";
import one from "../../Assets/images/one.pnj.png";

const Home = () => {
  return (
    <div>
      <div>
        <div className={styles.textline} >
          The Most Sought-After Product Management and Product Marketing
          Certifications In The World
        </div>
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            {" "}
            <div>
              <img className={styles.imageone} src={one} alt="" />
            </div>
            <div className={styles.carttext}>
              <span>Product Manager</span>
              <span>Learn More </span>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <img className={styles.imageone} src={one} alt="" />
            </div>
            <div className={styles.carttext}>
              <span>Product Manager</span>
              <span>Learn More </span>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <img className={styles.imageone} src={one} alt="" />
            </div>
            <div className={styles.carttext}>
              <span>Product Manager</span>
              <span>Learn More </span>
            </div>
          </div>
        </div>
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <div>
              <img className={styles.imageone} src={one} alt="" />
            </div>
            <div className={styles.carttext}>
              <span>Product Manager</span>
              <span>Learn More </span>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <img className={styles.imageone} src={one} alt="" />
            </div>
            <div className={styles.carttext}>
              <span>Product Manager</span>
              <span>Learn More </span>
            </div>
          </div>
        </div>
        <div className={styles.boxline} >
         <div className={styles.box}>View Certifications</div>
         <div className={styles.box}>Viey Courses</div>
        </div>
      </div>
      <div>
        {/* <div>
          <img className={styles.cartboximage} src={productimage} alt="" />
          <h1>Product</h1>
          <span>Equip your team to create outstanding product</span>
          <span>Learn More</span>
        </div> */}
      </div>
    </div>
  );
};

export default Home;

// className={styles.carttext}
