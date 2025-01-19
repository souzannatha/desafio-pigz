import styles from "./Form.module.css";

export function Form() {
  return (
    <div className={styles.form}>
      <div className={styles.formContainer}>
        <h2>Quero vender no Pigz</h2>
        <p>Dê o primeiro passo para aumentar suas vendas</p>
      </div>
      <form>
        <div>
          <label htmlFor="">Nome</label>
          <input type="text" placeholder="Leonercio Goesfeeld" />
        </div>
        <div>
          <label htmlFor="">E-mail</label>
          <input type="email" placeholder="leonercio.goesfeeld@email.com" />
        </div>
        <div>
          <label htmlFor="">Número</label>
          <input type="email" placeholder="(95) 99876-5432" />
        </div>
        <p>
          Ao continuar, aceito que a Pigz entre em contato comigo por telefone,
          e-mail ou WhatsApp.
        </p>
        <button>Continuar</button>
      </form>
    </div>
  );
}
