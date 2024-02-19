import { useState } from 'react'


import Imc from '../IMC/Imc'

import './App.css'
import './AppResponsive.css'

const electron = window.require('electron');
const { ipcRenderer } = electron || {};

if (ipcRenderer) {
  ipcRenderer.send('mensagem-do-front', 'Olá, processo principal!');
  
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header id='Home'>
        <nav>
          <h1>Calculadora de Desenvolvimento Motor Infatil</h1>
          <ul className='TopMenu'>
            <li><a href='#Home' onClick={() => {
              ipcRenderer.send('Teste', 'Hello Word')
            }}> Início </a></li>
            <li><a href='#About'> Sobre Nós </a></li>
            <li><a href='#Login'> Calculadora </a></li>
            <li><a href='#Contato'> Contato </a></li>
          </ul>
        </nav>
        <div className='HomeTextDiv'>
          <p>
            O desenvolvimento motor é o processo de mudança no comportamento, relacionado com a idade, tanto na postura quanto no movimento da criança.
            É um processo de alterações complexas e interligadas das quais participam todos os aspectos de crescimento e maturação dos aparelhos e sistemas do organismo.
            É importante realizar um acompanhamento do desenvolvimento motor da criança, principalmente nos primeiros anos de vida.
            Sendo assim essa calculadora irá le ajudar a compreender o processos de desenvolvimento
          </p>
        </div>
      </header>

      {/*Sobre */}
      <div id='About'>
        <div className='HomeComponent'>
          <div className='HomeHead'>
            <h2>Quem Somos</h2>
          </div>
          <div className='HomeBody'>
            <p>
              Somos a [Nome da Sua Empresa], uma empresa especializada em soluções de tecnologia e software dedicadas ao setor da saúde.
              Nosso foco é impulsionar a eficiência operacional e a qualidade dos serviços, oferecendo plataformas inovadoras, seguras e integradas.
              Comprometemo-nos a fornecer soluções personalizadas que atendam às necessidades específicas de nossos clientes, capacitando profissionais de saúde a oferecer cuidados excepcionais.
              Conduzimos nossos esforços com um compromisso contínuo com a inovação, visando contribuir para o avanço do setor e melhorar a experiência do paciente.</p>
          </div>
        </div>
      </div>

      {/*Calculadora */}
      <div id='Login'>
        <div className='HomeComponent'>
          <Imc />
        </div>

      </div>

      {/*Contato*/}
      <div id="Contato">
        <div className="form-contato">
          <h3>Contato</h3>
          <p>Duvidas<span>?</span> Entre em contato<span>!</span></p>
          <form>
            <input className="form-input" type="text" placeholder="Nome" name="Name" ></input>
            <input className="form-input" type="text" placeholder="Email" name="Email" ></input>
            <input className="form-input" type="text" placeholder="Assunto" name="Subject" ></input>
            <input className="form-input" type="text" placeholder="Messagem" name="Message" ></input>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <footer>

        <div className="social">
          {/* <a href="#"> <i className="fab fa-instagram"></i> </a> */}
          <a href="https://github.com/Bruhkamargo"> <i className="fab fa-github"></i> </a>
          <a href="https://wa.me/5549998193608"> <i className="fab fa-whatsapp"></i> </a>
        </div>
        <p>Copyright By <a href='https://bruhkamargo.github.io/HealthTec'><span className='Health'>Health</span>&<span className='Tec'>Tec</span></a></p>
      </footer>

    </>
  )
}

export default App
