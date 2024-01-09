import React from "react";
import Image from "next/image";
import styles from "./Section3.module.css";
import s1 from "../../../public/s1.png";
import s2 from "../../../public/s2.png";
import s3 from "../../../public/s3.png";
import s4 from "../../../public/s4.png";
import s5 from "../../../public/s5.png";
import s6 from "../../../public/s6.png";
import arrow from "../../../public/arrow.png";

const Section3 = () => {
  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.ch1}>
          <h1>Stackkaroo’s Digital Services</h1>
        </div>

        <div className={styles.ch2}>
          <p>
            We excel with reliability, innovation and customer-centric approach
            for our quality products. <br />
            Our dedicated team ensures that the solutions provided are
            dependable and long-term
          </p>
        </div>

        <div className={styles.ch3}>
          <div className={styles.ch31}>
            <button>
              <Image src={s1} alt="hero1" width={40} height={40} />
              <h4>Web development</h4>
            </button>
            <p>
              We specialize in responsive website development, ensuring optimal
              performance across various devices.
            </p>
            <Image src={arrow} alt="hero1" width={20} height={20} />
          </div>
          <div className={styles.ch32}>
            <button>
              <Image src={s2} alt="hero1" width={40} height={40} />
              <h4>App development</h4>
            </button>
            <p>
              We specialize in creating superior apps for diverse sectors such
              as e-commerce, education, and transportation.
            </p>
            <Image src={arrow} alt="hero1" width={20} height={20} />
          </div>
          <div className={styles.ch33}>
            <button>
              <Image src={s3} alt="hero1" width={40} height={40} />
              <h4>Software development</h4>
            </button>
            <p>
              We specialize in tailored solutions ensuring business growth and
              efficiency by providing superior software.
            </p>
            <Image src={arrow} alt="hero1" width={20} height={20} />
          </div>
        </div>

        <div className={styles.ch3}>
          <div className={styles.ch31}>
            <button>
              <Image src={s4} alt="hero1" width={40} height={40} />
              <h4>UI/UX Design</h4>
            </button>
            <p>
              We specialize in responsive website development, ensuring optimal
              performance across various devices.
            </p>
            <Image src={arrow} alt="hero1" width={20} height={20} />
          </div>
          <div className={styles.ch32}>
            <button>
              <Image src={s5} alt="hero1" width={40} height={40} />
              <h4>Digital Marketing</h4>
            </button>
            <p>
              We specialize in creating superior apps for diverse sectors such
              as e-commerce, education, and transportation.
            </p>
            <Image src={arrow} alt="hero1" width={20} height={20} />
          </div>
          <div className={styles.ch33}>
            <button>
              <Image src={s6} alt="hero1" width={40} height={40} />
              <h4>SEO Optimization</h4>
            </button>
            <p>
              We specialize in tailored solutions ensuring business growth and
              efficiency by providing superior software.
            </p>
            <Image src={arrow} alt="hero1" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
