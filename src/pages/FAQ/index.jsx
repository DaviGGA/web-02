import './style.css'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Banner } from '../../components/Banner'

export function FAQ() {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='faq-items'>
                <h2>Perguntas Frequentes</h2>

                <h4>Nosso site é bom?</h4>
                <p>Sim, é ótimo.</p>
                
                <h4>Como faço o cadastro?</h4>
                <p>
                    Basta clicar no nome cadastrar-se no topo da página,
                    coloque as informações que pedir e depois conclua clicando em Finalizar.
                </p>
                
                <h4>Como acho os cursos que eu quero?</h4>
                <p>
                    Clique na barra de busca e escreva o nome do curso ou procure pelo conteúdo do curso em questão.
                </p>
            </div>
            <Footer></Footer>
        </div>


    )
}