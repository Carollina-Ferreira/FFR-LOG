import { FaWhatsapp } from "react-icons/fa";

import styles from "./style.module.css"

import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import SobreFFR from "../../components/SobreFFR";
import Footer from "../../components/Footer";
import CardsEmpresa from "../../components/CardsEmpresa";
import Numeros from "../../components/Numeros"
import Frase from "../../components/Frase";


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
       <SobreFFR/>
       <CardsEmpresa/>
       <Numeros/>
       <Frase/>
      <Footer/>
      
    </>
  );
}

export default App;