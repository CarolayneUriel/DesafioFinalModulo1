import S from './inicio.module.scss'
import Card from '../../Components/Card/Card'
import Community from '../../assets/community.png' 
import Reading from '../../assets/reading.png'
import Tranform from '../../assets/transform.png'
import Balanca from '../../assets/balanca.png'

export default function Inicio(){
    const cardsData = [
        {
          
          texto: " Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.",
          imagem: Community,
          alt:"Imagem de um circulo com quatro bonecos, simbolizando uma comunidade"
        },
        {
          
          texto: "Estimula o hábito da leitura e o aprendizado contínuo.",
          imagem: Reading,
          alt:"Imagem de um boneco lendo"
        },
        {
          
          texto: "Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.",
          imagem: Tranform,
          alt:"Imagem de uma mão conectando alguns bonecos, simbolizando a transformação"
        },
        {
          
            texto: "Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.",
            imagem: Balanca,
            alt:"imagem de uma balança"
        }
    ]

    return(
        <section>

            <section className={S.boxImagem}>
                <p>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</p>
            </section>

            <section className={S.sectionPrincipal}>
                <section className={S.boxConteudo}>
                    <h3>Por que devo doar?</h3>
                    <div className={S.conteiner}>
                        {cardsData.map((card) => (
                        <Card
                            texto={card.texto}
                            imagem={card.imagem}
                            alt={card.alt}
                        />
                        ))}
                    </div>
                </section>
                
            </section>
        </section>
    )
}