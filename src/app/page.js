// import Image from 'next/image'
// import styles from './page.module.css'

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Story from "./Components/Story";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Section1 />
      <Story />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section4 />
    </div>
  );
}
