import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.mobileMenuButton}>
        {/* Add a button for the mobile menu */}
        <button>☰</button>
      </div>
      <div className={styles.logo}>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="75" height="75" fill="#121212" />
        </svg>
      </div>
      <div className={styles.navLinks}>
        <div className={styles.links}>
        <button><Link href="/">Home</Link></button>
        <Link href="/about">About Us</Link>
        <Link href="/blog">Our Blog</Link>
        <Link href="/support">Support</Link>
        <Link href="/affiliate">Affiliate</Link>
        <Link href="/programs">Programs</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
