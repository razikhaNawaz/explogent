import React from "react";
import Image from "next/image";
import styles from "./Section4.module.css";
import r1 from "../../../public/r1.png";
import r2 from "../../../public/r2.png";
import r3 from "../../../public/r3.png";
import r4 from "../../../public/r4.png";
import r5 from "../../../public/r5.png";
import r6 from "../../../public/r6.png";


const Section4 = () => {
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
            <Image src={r1} alt="hero1" width={60} height={60} />
            <h4>Unleashing Top Talent Globally</h4>
            <p>
              We offer 5% top talents and supports companies hiring from various
              time zones.
            </p>
          </div>
          <div className={styles.ch32}>
            <Image src={r2} alt="hero1" width={60} height={60} />
            <h4>Securing Success</h4>
            <p>
              The company has a 30-day replacement policy and high retention
              rate due to competitive payouts and strong brand reputation.
            </p>
          </div>
          <div className={styles.ch33}>
            <Image src={r3} alt="hero1" width={40} height={40} />
            <h4>Beyond Borders</h4>
            <p>
            We provide both, flexible full-time and part-time jobs
            </p>
            
          </div>
        </div>

        <div className={styles.ch3}>
          <div className={styles.ch31}>
            <Image src={r4} alt="hero1" width={60} height={60} />
            <h4>End-to-End Excellence</h4>
            <p>
            In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us
            </p>
            
          </div>
          <div className={styles.ch32}>
            <Image src={r5} alt="hero1" width={60} height={60} />
            <h4>Efficiency Redefined</h4>
            <p>
            The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent.
            </p>
            
          </div>
          <div className={styles.ch33}>
            <Image src={r6} alt="hero1" width={60} height={60} />
            <h4>Simplified Contracts
Satisfied Partnerships</h4>
            <p>
            The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
