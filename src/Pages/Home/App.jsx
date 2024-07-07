import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios";

import './App.css'
import './AppResponsive.css'

function HomePage() {
  const [count, setCount] = useState(0)
  const baseUrl = 'https://teste-backend-psi.vercel.app';

  const getTeste = async () => {
      const { data } = await axios.get(`${baseUrl}/users`);
      console.log(data);
  };

  useEffect(() => {
    getTeste()
  }, []);

  return (
    <>
      <header id='Home'>
        <nav>
          <h1>Calculadora de Desenvolvimento Motor Infatil</h1>
          <ul className='TopMenu'>
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
        </div>
      </header>

      {/*Sobre */}
      <div id='About'>
        <button id='meuBotao' onClick={() => {console.log("Teste");}}> Teste </button>
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
        <div className='LoginComponent'>
          <form action="" className='FormEntrada'>
            <span className='FormSpan'>
              <label>Nome Completo:</label>
              <input type='text' className='FormInput'></input>
            </span>
            <span className='FormSpan'>
              <label>Email:</label>
              <input type='email' className='FormInput'></input>
            </span>
            <span className='FormSpan'>
              <label>Telefone:</label>
              <input type='tel' className='FormInput'></input>
            </span>
            <span className='CheckSpan'>
              <span>
                <label>Concordo com os termos:</label>
                <input type='checkbox'></input>
              </span>
              <span>
                <label>Receber emails:</label>
                <input type='checkbox'></input>
              </span>
            </span>
            <Link to="/edmi" className='LinkSubmitButton'>
              <button className='SubmitButton'>Entrar</button>
            </Link>
          </form>
          <span className='LoginText'>
            <h3>Titulo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt similique at provident voluptates atque maiores nihil laboriosam illo assumenda. Minima natus eius facere laboriosam ipsam? Placeat voluptas non fuga?</p>
          </span>
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

export default HomePage
