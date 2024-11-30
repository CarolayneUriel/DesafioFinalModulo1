import S from './doados.module.scss'
import LivroVermelho from '../../assets/livro-vermelho.png'

export default function Doados(){
    return(
        <section className={S.caixaDoados}>
            <h2>Livros Doados</h2>
            <section className={S.cardLivros}>
                <article >
                    <img src={LivroVermelho} alt="imagem do livro o protagonista" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
            </section>
        </section>
    )
}