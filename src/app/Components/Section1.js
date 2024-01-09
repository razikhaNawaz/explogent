import React from "react";
import styles from "./Section1.module.css";

const Section1 = () => {
  return (
    <div className={styles.parent}>
      <div>In the realm of digital solutions, we offer expertise in</div>
      <div className={styles.but}>
        <button>Website Development</button>
        <button>App Development</button>
        <button>UI/UX Design</button>
        <button>Digital Marketing</button>
        <button>SEO Optimization</button>
      </div>
      <p>
        showcasing our proficiency across various facets of the digital platform
      </p>
      <div className={styles.heading}>
        <h1>Stay Ahead!</h1>
       
        <h1>Launch Your Next Project with Stackkaroo</h1>
      </div>
    </div>
  );
};

export default Section1;
