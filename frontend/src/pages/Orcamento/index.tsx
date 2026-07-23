import { FaWhatsapp } from "react-icons/fa";

import styles from "./style.module.css"

import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import OrcamentoBanner from "../../components/OrcamentoBanner";
import OrcamentoForm from "../../components/OrcamentoForm/inde";
import ComoFunciona from "../../components/ComoFunciona";
import QualidadeBanner from "../../components/QualidadeBanner";
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
       <Header/>
       <OrcamentoBanner/>
       <OrcamentoForm/>
       <ComoFunciona/>
       <QualidadeBanner/>
      <Footer/>
      
    </>
  );
}

export default App;