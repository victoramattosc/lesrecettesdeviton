import styles from "./cardapio.module.scss";
import logo from "assets/header.png";
import icon from "assets/my-icon.png"
import Buscador from "./Buscador";
import Filtros from "./Filtros";
import { useState, useEffect } from "react";

export function Cardapio() {
  const [busca, setBusca] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <div className={`${styles.top} ${scrolled ? styles.scrolled : ""}`}>
        <img src={icon} alt="icon" className={styles.icon}/>
        <div className={styles.pages}>
          <h3>Home</h3>
        </div>
        <div className={styles.pages}>
          <h3>About</h3>
        </div>
      </div>
      <nav className={styles.menu}>
        <img src={logo} alt="Logo" />
      </nav>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardapio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros />
        </div>
      </section>
    </main>
  );
}
