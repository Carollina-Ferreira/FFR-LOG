import { FaWhatsapp } from "react-icons/fa";

import styles from "./style.module.css"

import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroInicio from "../../components/HeroInicio";
import FleetCarousel from "../../components/FleetCarousel";
import Servicos from "../../components/Servicos";
import InfosEmpresa from "../../components/InfosEmpresa";
import Contato from "../../components/Contato"
import CardsInicio from "../../components/CardsInicio"


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
       <Header/>
       <HeroInicio/>
       <FleetCarousel/>
       <Servicos/>
       <CardsInicio/>
       <InfosEmpresa/>
       <Contato/>
      <Footer/>
      
    </>
  );
}

export default App;