import S from './queroDoar.module.scss'
import Livro from '../../assets/livro-aberto.png'

export default function QueroDoar(){
    return(
        <section className={S.caixaPrincipal}>
            <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>

            <section className={S.caixaFormulario}>
                <div>
                    <img src={Livro} alt="imagem de um pequeno livro aberto" />
                    <h3>Informações do Livro</h3>
                </div>
                <form action="">
                    <input type="text" placeholder='Título'/>
                    <input type="text" placeholder='Categoria'/>
                    <input type="text" placeholder='Autor'/>
                    <input type="text" placeholder='Link da imagem'/>
                    <input type="submit" value="Doar"/>
                </form>
                
            </section>
        </section>
    )
}