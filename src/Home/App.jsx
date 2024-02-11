import { useState } from 'react'
import KidGirl from '../assets/KidGirl.png'
import Autism from '../assets/Autism.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header id='Home'>
        <nav>
          <h1>Calculadora de Desenvolvimento Motor Infatil</h1>
          <ul>
            <li><a href='#Home'> Início </a></li>
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
          <img src={Autism} alt="" />
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
          <div className='HomeBody'>
            <h2>Login</h2>
          </div>
        </div>

      </div>

      {/*Contato*/}
      <div id='Contato'>
        <div className='HomeComponent'>
          <div className='HomeHead'>
            <h2>Head</h2>
          </div>
          <div className='HomeBody'>
            <h2>Body</h2>
          </div>
          <div className='HomeFoot'>
            <h2>Footer</h2>
          </div>
        </div>

        <footer>
          <div>
            <p>O essencial é invisível aos olhos.</p>
            <p>Antoine de Saint-Exupéry</p>

          </div>

          <div class="social">
            <a href="https://github.com/Bruhkamargo"> <i class="fab fa-github"></i> </a>
            <p class="end">Copyright By Bruno Camargo</p>
          </div>
        </footer>

      </div>
    </>
  )
}

export default App
