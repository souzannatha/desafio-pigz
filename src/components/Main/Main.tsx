import Burguer from "../../assets/burguer_2.png";
import { Form } from "../Form/Form";
import styles from "./Main.module.css";

export function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.mainTitleAndImage}>
        <h1>Pigz: tudo que você precisa para vender ainda mais!</h1>
        <img src={Burguer} width={250} height={250} />
      </div>
      <p>
        Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
        Marketplace e deixar sua loja prontinha para iniciar as vendas.
      </p>

      <Form />
    </main>
  );
}
