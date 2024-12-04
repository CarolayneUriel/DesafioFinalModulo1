import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../Pages/Inicio/Inicio'
import Doados from '../../Pages/Doados/Doados'
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'

import S from './header.module.scss'

import logo from '../../assets/logo.png'
import lupa from '../../assets/pesquisa.png'



export default function Header(){
    return(
        <BrowserRouter>
            
            <header>
                <section className={S.boxlogo}>
                    <img src={logo} alt="logo é uma imagem de um livro aberto" />
                    <h1>Livros Vai Na Web</h1>
                </section>

                <nav>
                    <ul className={S.boxMenu}>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/doados'>Livros Doados</Link></li>
                        <li><Link to='/queroDoar'>Quero Doar</Link></li>
                    </ul>
                </nav>

                <section className={S.barraDeBusca}>
                    <input
                        type="search"
                        name=""
                        id=""
                        placeholder="O que você procura?"
                    />
                    <button>
                        <img src={lupa} alt="Icone de lupa branca" />
                    </button>
                </section>
            </header>

            <Routes>
                <Route path='/' element={<Inicio/>} />
                <Route path='/doados' element={<Doados/>} />
                <Route path='/queroDoar' element={<QueroDoar/>} />
            </Routes>
        </BrowserRouter>
        
    )
}