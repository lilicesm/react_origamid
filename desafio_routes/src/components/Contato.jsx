import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato + " animaLeft"}>
      <Head title="Alice | Contato" description="Entre em contato!" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>alice@alice.com</li>
          <li>99999-9999</li>
          <li>Aquela Rua, 111</li>
        </ul>
      </div>
    </section>
  );
}

export default Contato;