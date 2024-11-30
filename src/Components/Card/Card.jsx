import S from "./card.module.scss";

export default function Card({  texto, imagem, alt }) {
  return (

      <section>
        <div className={S.boxCard}>
          <img src={imagem} alt={alt} />
          <p>{texto}</p>
        </div>
      </section>
  );
}
