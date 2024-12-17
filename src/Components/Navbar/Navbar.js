import React from "react";
import Logo from "../../Assets/images/Logo.jpg";
import arw from "../../Assets/icons/arrow.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  const initialData = [
    "Trainings ",
    "Certifications",
    "Why Pragmatic",
    "Resources",
    "Contact Us",
  ];

  return (
    <div className={styles.container}>
      <div  className={styles.leftitem}>
        <img className={styles.Logo} src={Logo} alt="" />
        <div className={styles.contendline}>
          {initialData.map((item) => (
            <div className={styles.contend} key={item}>
              {item}
              <img src={arw} className={styles.arrow} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rightitem}>
        <input className={styles.inp} placeholder="search..." type="text" name="" id="" />
        <button className={styles.loginbtn}>Login</button>
        <button className={styles.registerbtn}>Register Now</button>
      </div>
    </div>
  );
};

export default Navbar;
