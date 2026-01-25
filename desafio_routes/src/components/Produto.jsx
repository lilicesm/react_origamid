import React from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';
import Head from './Head';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);
  const [erro, setErro] = React.useState(null);
  const {id} = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setCarregando(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        console.log(erro);
        setErro('Um erro ocorreu ao carregar o produto.');
      } finally {
        setCarregando(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  const numFotos = produto && produto.fotos ? produto.fotos.length : 0;

  if(carregando) return <div className="carregando"></div>;
  if(erro) return <p>{erro}</p>;
  if(!produto) return null;
  return (
    <section className={`${styles.produto} ${numFotos === 1 ? styles.umaFoto : styles.duasFotos} animaLeft`}>
      <Head 
        title={`Alice | ${produto.nome}`} 
        description={`Esse é o produto ${produto.descricao}`}
      />
      <div className={styles.fotos}>
        {produto.fotos.map((foto) => (
        <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div className={styles.info}>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
}

export default Produto;