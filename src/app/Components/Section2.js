import React from "react";
import e1 from "../../../public/e1.png";
import e2 from "../../../public/e2.png";
import e3 from "../../../public/e3.png";
import e4 from "../../../public/e4.png";
import e5 from "../../../public/e5.png";
import Image from "next/image";
import styles from "./Section2.module.css";

const Section2 = () => {
  return (
    <div className={styles.parent}>

      <div className={styles.ch1}>
        <h1>Why Choose Us?</h1>
      </div>

      <div className={styles.ch2}>
        <p>
          We excel with reliability, innovation and customer-centric approach
          for our quality products. <br />Our dedicated team ensures that the
          solutions provided are dependable and long-term
        </p>
      </div>

      <div className={styles.ch3}>
        <button className={styles.b1}>
          <Image src={e1} alt="hero1" width={40} height={40} />
          <h4>User-Centric Approach</h4>
        </button>
        <button className={styles.b2}>
          <Image src={e2} alt="hero1" width={40} height={40} />
          <h4>Customer Satisfaction</h4>
        </button>
        <button className={styles.b3}>
          <Image src={e3} alt="hero1" width={40} height={40} />
          <h4>Integrating Feedback</h4>
        </button>

        
          <button className={styles.b4}>
            <Image src={e4} alt="hero1" width={40} height={40} />
            <h4>High Quality Products</h4>
          </button>
          <button className={styles.b5}>
            <Image src={e5} alt="hero1" width={40} height={40} />
            <h4>On-Time Product Delivery</h4>
          </button>
        
      </div>
    </div>
  );
};

export default Section2;
