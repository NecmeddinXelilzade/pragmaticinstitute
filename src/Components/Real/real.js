import React from 'react';
import styles from "./real.module.css";
import img from "../../Assets/images/homepage.jpg";

const Real = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div  className={styles.contextone}>Turn Ambition <br />
                    Into Achievement</div>
                    <div className={styles.contexttwo}>Transformative training for tomorrow’s product, data, and design leaders </div>
                    <div className={styles.rightitem} >
                        <button className={styles.btnone}>Train Myself</button>
                        <button className={styles.btntwo}>Train My Team</button>
                    </div>
                </div>
                <div className={styles.right}>
                    <div><img style={{width:"100%"}} src={img} alt="" /></div>
                    {/* <div>25%</div> */}
                </div>
            </div>
            <div className={styles.realfooter}>
                <div className={styles.text}>250,000+ <br /> <span> Total Alumni</span></div>
                <div className={styles.text}>10,000+ <br /><span>Companies</span></div>
                <div className={styles.text}>50+ <br /><span>Countries</span></div>
            </div>
        </div>
    );
}

export default Real;
