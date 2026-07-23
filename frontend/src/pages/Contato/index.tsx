import { FaWhatsapp } from "react-icons/fa";
import styles from "./style.module.css"
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import FastBanner from "../../components/FastBanner";
import Cards from "../../components/ContactCards";
import Footer from "../../components/Footer";


function App() {
  return (
    <>
      <a
        href="https://wa.me/5511999447775"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        <FaWhatsapp />
      </a>
       <TopBar />
      <Header />
      <Hero />
      <Cards/>
      <FastBanner/>
      <Footer/>
      
    </>
  );
}

export default App;