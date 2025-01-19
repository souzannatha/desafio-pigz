import Logo from "../../assets/Logo.svg";
import styles from "./Header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerMenu}>
        <img src={Logo} alt="" />
        <button className={styles.button}>Já sou parceiro</button>
      </div>
    </header>
  );
}
