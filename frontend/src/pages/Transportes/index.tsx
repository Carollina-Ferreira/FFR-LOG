import { FaWhatsapp } from "react-icons/fa";

import styles from "./style.module.css"

import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BannerTransportes from "../../components/TransportesBanner";
import CardsTransporte from "../../components/CardsTransporte";
import TiposCarga from "../../components/TiposCargas";
import OndeAtuamos from "../../components/OndeAtuamos";
import InfosTransporte from "../../components/InfosTransporte";

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
       <BannerTransportes/>
       <CardsTransporte/>
       <TiposCarga/>
       <OndeAtuamos/>
       <InfosTransporte/>
      <Footer/>
      
    </>
  );
}

export default App;