import React from 'react';
import styles from './Produtos.module.css';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then(r => r.json())
      .then(json => setProdutos(json));
  }, []);

  if (!produtos) return null;
  return (
    <section className={styles.produtos + ' animaLeft'}>
      {produtos.map((produto) => (
        <Link to={`/produto/${produto.id}`} key={produto.id} className={styles.produto}>
          <img className={styles.img} src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
}

export default Produtos;