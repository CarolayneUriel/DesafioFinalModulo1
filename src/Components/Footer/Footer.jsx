import Facebook from '../../assets/facebook-icon.png'
import Twitter from '../../assets/twitter-icon.png'
import YouTube from '../../assets/youtube-icon.png'
import Linkedin from '../../assets/linkedin-icon.png'
import Instagram from '../../assets/instagram-icon.png'

import S from './footer.module.scss'

export default function footer(){
    return(
        <footer>
           
            <section className={S.boxContatos}>
                    <p>4002-8922</p>
                    <nav>
                    <a href="https://www.facebook.com/login/?locale=pt_BR" target="_blank"><img src={Facebook} alt="logo do facebook" /></a>
                    <a href="https://x.com/?lang=pt-br" target="_blank"><img src={Twitter} alt="logo do twitter" /></a>
                    <a href="https://www.youtube.com/" target="_blank"><img src={YouTube} alt="logo do youtube" /></a>
                    <a href="https://www.linkedin.com/" target="_blank"><img src={Linkedin} alt="logo do linkedin" /></a>
                    <a href="https://www.instagram.com/accounts/login/" target="_blank"><img src={Instagram} alt="logo do instagram" /></a>
                    </nav>
            </section>

            <section className={S.boxCreditos}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}