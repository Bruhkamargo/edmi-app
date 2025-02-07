import React, { useState, useEffect } from "react";
import moment from 'moment';
import axios from "axios";

import Relatorio from "../../Functions/Relatorio";

import Cal_DDN from "../../Functions/Age_calc";

import './EDMI.css'
import './Modal.css'


export default () => {

  function CallRelatorio() {
    if (StrName, Age == '' || moment(BirthDate).format('DD/MM/YYYY') == 'Invalid date') {
      ChangerValidadorState(true, "Cadastro")
      return
    } else if (Laterality, Eyes, Hands, Feet == '') {
      ChangerValidadorState(true, "Lateralidades")
      return
    } else {
      let response = confirm('Gostaria de salvar?');
      if (!response) {
        return
      }
    }
    Relatorio(
      {
        Name: StrName,
        Sex: BoolSexo ? "Masculino" : "Feminino",
        Exam: moment().format('DD/MM/YYYY'),
        Bday: moment(BirthDate).format('DD/MM/YYYY'),
        Age: Age,
        OthersData: Others,
        Result: results,
        IMG: IMG,
        IDC: IdC,
        QMG: QMG,
        IDP: IdP,
        IDN: IdN,
        Scale: EsD,
        IMS: [IM1, IM2, IM3, IM4, IM5, IM6],
        QMS: [QM1, QM2, QM3, QM4, QM5, QM6],
        Laterality: Laterality,
        Eyes: Eyes,
        Hands: Hands,
        Feet: Feet,
      }
    )
  }

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "Você realmente deseja sair?";
      event.returnValue = message; // Padrão para alguns navegadores
      return message; // Padrão para outros navegadores
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function para remover o event listener
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const [Start, SetStart] = useState(true);
  const [Validador, SetValidador] = useState(false);
  const [ValidadorVar, SetValidadorVar] = useState('')
  const [ClassSpecial, SetClassSpecial] = useState('');

  const ChangerState = (value) => {
    SetStart(value);
  }

  const ChangerValidadorState = (value, msg) => {
    SetValidador(value);
    SetValidadorVar(msg);
  }

  const ChangerClassSpecial = (value) => {
    SetClassSpecial(value);
  }

  const tests = [
    'Motricidade fina',
    'Motricidade global',
    'Equilíbrio',
    'Esquema corporal/Rapidez',
    'Organização espacial',
    'Linguagem/Organização temporal'
  ];

  const [BoolSexo, SetBoolSexo] = useState(true);
  const [BoolPoints, SetBoolPoints] = useState(true);
  const [StrName, SetStrName] = useState('');
  const [BirthDate, SetBirthDate] = useState('');
  const [Age, SetAge] = useState('');
  const [Others, SetOthers] = useState('');
  const [results, setResults] = useState({
    2: ['0', '0', '0', '0', '0', '0'],
    3: ['0', '0', '0', '0', '0', '0'],
    4: ['0', '0', '0', '0', '0', '0'],
    5: ['0', '0', '0', '0', '0', '0'],
    6: ['0', '0', '0', '0', '0', '0'],
    7: ['0', '0', '0', '0', '0', '0'],
    8: ['0', '0', '0', '0', '0', '0'],
    9: ['0', '0', '0', '0', '0', '0'],
    10: ['0', '0', '0', '0', '0', '0'],
    11: ['0', '0', '0', '0', '0', '0']
  });

  const [IMG, SetIMG] = useState(0);
  const [IdC, SetIdC] = useState(0);
  const [QMG, SetQMG] = useState(0);
  const [IdP, SetIdP] = useState(0);
  const [IdN, SetIdN] = useState(0);
  const [EsD, SetEsD] = useState('');

  const [IM1, SetIM1] = useState(0);
  const [IM2, SetIM2] = useState(0);
  const [IM3, SetIM3] = useState(0);
  const [IM4, SetIM4] = useState(0);
  const [IM5, SetIM5] = useState(0);
  const [IM6, SetIM6] = useState(0);

  const [QM1, SetQM1] = useState(0);
  const [QM2, SetQM2] = useState(0);
  const [QM3, SetQM3] = useState(0);
  const [QM4, SetQM4] = useState(0);
  const [QM5, SetQM5] = useState(0);
  const [QM6, SetQM6] = useState(0);

  const [Laterality, SetLaterality] = useState('');
  const [Eyes, SetEyes] = useState('');
  const [Hands, SetHands] = useState('');
  const [Feet, SetFeet] = useState('');

  const handleChange = async (year, testIndex) => {
    const TesteBilateral = ['0', '½', '1'];
    const TesteUnilateral = ['0', '1'];

    // Verifica se o ano corresponde a um teste bilateral ou unilateral
    const isBilateral =
      (testIndex == 0 && (year == 6 || year == 7 || year == 8 || year == 9 || year == 11)) ||
      (testIndex == 1 && year == 7) ||
      (testIndex == 2 && (year == 3 || year == 6 || year == 7 || year == 11));
    // console.log(isBilateral ? 'TesteBilateral' : 'TesteUnilateral');

    // Atualiza os resultados com base no tipo de teste
    setResults(prevResults => ({
      ...prevResults,
      [year]: prevResults[year].map((result, index) =>
        index === testIndex
          ? (isBilateral
            ? TesteBilateral[(TesteBilateral.indexOf(result) + 1 + TesteBilateral.length) % TesteBilateral.length]
            : TesteUnilateral[(TesteUnilateral.indexOf(result) + 1 + TesteUnilateral.length) % TesteUnilateral.length]
          )
          : result
      )
    }));
  };

  const renderInput = (year, testIndex) => (
    <td key={`${year}-${testIndex}`}>
      <span className="InputSpan">
        <input
          type="text"
          value={results[year][testIndex]}
          readOnly={true}
        />
        <span className="SpanButtons">
          <button title="Mudar o Valor" onClick={async (e) => {
            handleChange(year, testIndex);
          }}>&#8597;</button>
        </span>
      </span>
    </td>
  );

  const renderRow = (testName, testIndex) => (
    <tr key={testIndex}>
      <td><p>{testName}</p></td>
      {Object.keys(results).map((year) => renderInput(year, testIndex))}
    </tr>
  );

  const ChangeIMG1 = () => {
    for (let i = 11; i >= 2; i--) {
      if (results[i][0] != '0') {
        SetIM1(i * 12)
        let calcQM = (i * 12 / IdC) * 100
        if (isNaN(calcQM) || !isFinite(calcQM)) {
          SetQM1(0)
        } else {
          SetQM1(calcQM.toFixed(0))
        }
        break
      } else {
        SetIM1(0);
        SetQM1(0);
      }
    }
  }

  const ChangeIMG2 = () => {
    for (let i = 11; i >= 2; i--) {
      if (results[i][1] != '0') {
        SetIM2(i * 12)
        let calcQM = (i * 12 / IdC) * 100
        if (isNaN(calcQM) || !isFinite(calcQM)) {
          SetQM2(0)
        } else {
          SetQM2(calcQM.toFixed(0))
        }
        break
      } else {
        SetIM2(0);
        SetQM2(0);
      }
    }
  }

  const ChangeIMG3 = () => {
    for (let i = 11; i >= 2; i--) {
      if (results[i][2] != '0') {
        SetIM3(i * 12)
        let calcQM = (i * 12 / IdC) * 100
        if (isNaN(calcQM) || !isFinite(calcQM)) {
          SetQM3(0)
        } else {
          SetQM3(calcQM.toFixed(0))
        }
        break
      } else {
        SetIM3(0);
        SetQM3(0);
      }
    }
  }

  const ChangeIMG4 = () => {
    for (let i = 11; i >= 2; i--) {
      if (results[i][3] != '0') {
        SetIM4(i * 12)
        let calcQM = (i * 12 / IdC) * 100
        if (isNaN(calcQM) || !isFinite(calcQM)) {
          SetQM4(0)
        } else {
          SetQM4(calcQM.toFixed(0))
        }
        break
      } else {
        SetIM4(0);
        SetQM4(0);
      }
    }
  }

  const ChangeIMG5 = () => {
    for (let i = 11; i >= 2; i--) {
      if (results[i][4] != '0') {
        SetIM5(i * 12)
        let calcQM = (i * 12 / IdC) * 100
        if (isNaN(calcQM) || !isFinite(calcQM)) {
          SetQM5(0)
        } else {
          SetQM5(calcQM.toFixed(0))
        }
        break
      } else {
        SetIM5(0);
        SetQM5(0);
      }
    }
  }

  const ChangeIMG6 = () => {
    for (let i = 11; i >= 2; i--) {
      if (results[i][5] != '0') {
        SetIM6(i * 12)
        let calcQM = (i * 12 / IdC) * 100
        if (isNaN(calcQM) || !isFinite(calcQM)) {
          SetQM6(0)
        } else {
          SetQM6(calcQM.toFixed(0))
        }
        break
      } else {
        SetIM6(0);
        SetQM6(0);
      }
    }
  }

  const ChangeIMG = () => {
    SetIMG((IM1 + IM2 + IM3 + IM4 + IM5 + IM6) / 6);
  }

  const ChangeQMG = () => {
    let calcQMG = (IMG / IdC) * 100
    if (isNaN(calcQMG) || !isFinite(calcQMG)) {
      SetQMG(0)
    } else {
      SetQMG(calcQMG.toFixed(0))
    }
  }

  const IdadePositivaNegativa = () => {
    let CalcINIP = IMG - IdC;
    if (CalcINIP < 0) {
      SetIdN(CalcINIP);
      SetIdP(0);
    } else {
      SetIdN(0);
      SetIdP(CalcINIP);
    }
  }

  const Classificar = () => {
    // console.log('Classificar');
    console.log(QMG);
    if (QMG == 0) {
      SetEsD(" ")
    } else if (QMG <= 69) {
      SetEsD("Muito Inferior");
    } else if (QMG <= 79) {
      SetEsD("Inferior");
    } else if (QMG <= 89) {
      SetEsD("Normal Baixo");
    } else if (QMG <= 109) {
      SetEsD("Normal Médio");
    } else if (QMG <= 119) {
      SetEsD("Normal Alto");
    } else if (QMG <= 129) {
      SetEsD("Superior");
    } else if (QMG >= 130) {
      SetEsD("Muito Superior");
    }
  }

  useEffect(() => { StartCalculadora(Start, ChangerState) }, [])
  useEffect(() => { ChangeIMG1(); ChangeIMG2(); ChangeIMG3(); ChangeIMG4(); ChangeIMG5(); ChangeIMG6() }, [results])
  useEffect(() => { ChangeIMG() }, [IM1, IM2, IM3, IM4, IM5, IM6])
  useEffect(() => { ChangeQMG(); IdadePositivaNegativa(); }, [IMG])
  useEffect(() => { Classificar(); }, [QMG])

  return (
    <div id="EDMI">
      <div className="LeftDiv">
        <div className={`LeftDivTop ${ClassSpecial}`}>
          <h2>Cadastro</h2>
          {/*Input Nome*/}
          <span className='SpanEDMI'>
            <label className='LabelIMC'>Nome: </label>
            <input type="text" className='InputEDMI'
              value={StrName} onChange={(e) => { SetStrName(e.target.value) }}
              placeholder='Nome Completo'
            ></input>
          </span>

          {/*Input Sexo*/}
          <span className='SpanEDMI'>
            <label className='LabelIMC'>Sexo: </label>
            <span>
              <label className='LabelSex' style={{ margin: "0 20px" }}>
                <input className='RadioInput' type="radio"
                  checked={BoolSexo ? true : false} value="Masculino"
                  onChange={() => { BoolSexo ? SetBoolSexo(false) : SetBoolSexo(true) }} />
                &#10240;Masculino
              </label>
              <label className='LabelSex' style={{ margin: "0 20px" }}>
                <input className='RadioInput' type="radio"
                  checked={BoolSexo ? false : true} value="Feminino"
                  onChange={() => { BoolSexo ? SetBoolSexo(false) : SetBoolSexo(true) }} />
                &#10240;Feminino
              </label>
            </span>
          </span>

          {/*Input Data de nascimento*/}
          <span className='SpanEDMI'>
            <label className='LabelIMC'>Data de Nascimento: </label>
            <input type="date" className='InputEDMI'
              value={BirthDate} onChange={(e) => { SetBirthDate(e.target.value) }} onBlur={(e) => { SetAge(Cal_DDN(e.target.value)[0]); SetIdC(Cal_DDN(e.target.value)[1]) }}
              placeholder='Data de Nascimento'
            ></input>
          </span>

          {/*Input Idade*/}
          <span className='SpanEDMI'>
            <label className='LabelIMC'>Idade: </label>
            <input type="text" className='InputEDMI'
              value={Age} readOnly={true}
            ></input>
          </span>

          {/*Input Outros Dados*/}
          <span className='SpanEDMI'>
            <label className='LabelIMC'>Outros Dados: </label>
            <input type="text" className='InputEDMI'
              value={Others} onChange={(e) => { SetOthers(e.target.value) }}
              placeholder='Outros Dados'
            ></input>
          </span>
          <span className="SpanButton">
            <button onClick={() => {
              SetBoolPoints(!BoolPoints);
              if (StrName == 'Manual') {
                // alert('Download do manual!');
                const fileURL = '../../../public/vite.svg'
                const fileName = 'vite.svg'; // Nome do arquivo que será baixado

                // Cria um link temporário para o arquivo
                const link = document.createElement('a');
                link.href = fileURL;
                link.download = fileName;

                // Dispara o clique no link para iniciar o download
                link.click();
              }
            }}>&#8596;</button>
          </span>
        </div>

        {BoolPoints ?
          <div className="LeftDivBot">
            <h2>Resumo de Pontos</h2>
            <span className="SpanResults">
              <div className="DivResults">
                <label>Idade Motora Geral (IMG)</label><input type="text" value={IMG} readOnly={true}></input>
              </div>
              <div className="DivResults">
                <label>Idade Cronológica (IC)</label><input type="text" value={IdC} readOnly={true}></input>
              </div>
              <div className="DivResults">
                <label>Quociente Motor Geral (QMG)</label><input type="text" value={QMG} readOnly={true}></input>
              </div>
              <div className="DivResults">
                <label>Idade Positiva (+)</label><input type="text" value={IdP} readOnly={true}></input>
              </div>
              <div className="DivResults">
                <label>Idade Negativa (-)</label><input type="text" value={IdN} readOnly={true}></input>
              </div>
              <div className="DivResults">
                <span className="SpanED">
                  <label>Escala de Desenvolvimento (ED)</label><input type="text" value={EsD} readOnly={true}></input>
                </span>
              </div>
            </span>
          </div>
          :
          <div className="LeftDivBot">
            <h2>Idades Motoras</h2>
            <span className="SpanResults">
              <div className="DivResults">
                <label title="Idade Motora 1">IM - 1 </label><input type="text" value={IM1} readOnly={true}></input>
                <label title="Quociente Motor 1">QM - 1 </label><input type="text" value={QM1} readOnly={true}></input>
              </div>
              <div className="DivResults">
                <label title="Idade Motora 2">IM - 2 </label><input type="text" value={IM2} readOnly={true}></input>
                <label title="Quociente Motor 2">QM - 2 </label><input type="text" value={QM2} readOnly={true}></input>
              </div>
              <div className="DivResults">
                <label title="Idade Motora 3">IM - 3 </label><input type="text" value={IM3} readOnly={true}></input>
                <label title="Quociente Motor 3">QM - 3 </label><input type="text" value={QM3} readOnly={true}></input>
              </div>
              <div className="DivResults">
                <label title="Idade Motora 4">IM - 4 </label><input type="text" value={IM4} readOnly={true}></input>
                <label title="Quociente Motor 4">QM - 4 </label><input type="text" value={QM4} readOnly={true}></input>
              </div>
              <div className="DivResults">
                <label title="Idade Motora 5">IM - 5 </label><input type="text" value={IM5} readOnly={true}></input>
                <label title="Quociente Motor 5">QM - 5 </label><input type="text" value={QM5} readOnly={true}></input>
              </div>
              <div className="DivResults">
                <label title="Idade Motora 6">IM - 6 </label><input type="text" value={IM6} readOnly={true}></input>
                <label title="Quociente Motor 6">QM - 6 </label><input type="text" value={QM6} readOnly={true}></input>
              </div>
            </span>
          </div>
        }
      </div>
      <div className="RightDiv">
        <div className="RightDivHead">
          <h1>Escala de Desenvolvimento Motor</h1>
        </div>

        <table className="results-table">
          <thead>
            <tr>
              <th>TESTES | ANOS</th>
              {Object.keys(results).map((year) => (
                <th key={year}>{year}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tests.map((testName, index) => renderRow(testName, index))}
          </tbody>
        </table>

        <div className="RightDivFoot">
          <h2>Lateralidades</h2>
          <span>
            <div className="DivLateralidades">
              <span>
                <div>
                  <label> Lateralidade</label>
                  <select onChange={(e) => { SetLaterality(e.target.value) }}>
                    <option value=""></option>
                    <option value="Completo">Completo</option>
                    <option value="Cruzado">Cruzado</option>
                    <option value="Indefinido">Indefinido</option>
                  </select>
                </div>
                <div>
                  <label> Olhos</label>
                  <select onChange={(e) => { SetEyes(e.target.value) }}>
                    <option value=""></option>
                    <option value="Direito">Direito</option>
                    <option value="Esquerdo">Esquerdo</option>
                    <option value="Indefinido">Indefinido</option>
                  </select>
                </div>
              </span>
              <span>
                <div>
                  <label> Mãos</label>
                  <select onChange={(e) => { SetHands(e.target.value) }}>
                    <option value=""></option>
                    <option value="Direito">Direito</option>
                    <option value="Esquerdo">Esquerdo</option>
                    <option value="Indefinido">Indefinido</option>
                  </select>
                </div>
                <div>
                  <label> Pés</label>
                  <select onChange={(e) => { SetFeet(e.target.value) }}>
                    <option value=""></option>
                    <option value="Direito">Direito</option>
                    <option value="Esquerdo">Esquerdo</option>
                    <option value="Indefinido">Indefinido</option>
                  </select>
                </div>
              </span>
            </div>
            <button onClick={() => { CallRelatorio() }}>Salvar</button>
          </span>
        </div>
      </div>
      {Start ?
        <TutorialSpan
          ChangerState={ChangerState}
          ChangerClassSpecial={ChangerClassSpecial}
        />
        : <></>}
      {Validador ?
        <ValidadorSpan
          ChangerValidadorState={ChangerValidadorState}
          ValidadorVar={ValidadorVar} />
        : <></>}
    </div>
  )
}

/**
 * StartCalculadora
 */

function StartCalculadora(State, ChangerState) {
  console.log(State);
  if (!State) {
    console.log("Falso");
  } else {
    console.log("Verdadeiro");
  }
}

const TutorialSpan = ({ ChangerState, ChangerClassSpecial }) => {
  const [CtrlSpan, SetCtrlSpan] = useState(false);

  return (
    <div className="Div-Janela">
      <div className="Modal Welcome">
        <div className="ModalHead">
          <h2>Bem-Vindos!</h2>
        </div>
        <div className="ModalBody">
          {CtrlSpan ?
            <>
              <div className="DivBody">
                <p>Inicie preenchendo o cadastro da criança no formulário no canto superior esquerdo.</p>
              </div>
              <button onClick={() => { ChangerState(false); ChangerClassSpecial('') }}>Ok!</button>
            </>
            :
            <>
              <div className="DivBody">
                <p>Bem vindo a calculadora EDMI, você está utilizando uma versão de teste em acesso Beta. Por favor, qualquer erro encontrado notificar.</p>
              </div>
              <button onClick={() => { SetCtrlSpan(true); ChangerClassSpecial('CadastroDestaque') }}>Ok!</button>
            </>
          }
        </div>
      </div>
    </div>
  )
}

const ValidadorSpan = ({ ChangerValidadorState, ValidadorVar }) => {

  return (
    <div className="Div-Janela">
      <div className="Modal Welcome">
        <div className="ModalHead">
          <h2>Atenção!</h2>
        </div>
        <div className="ModalBody">
          <div className="DivBody">
            <p>Preencha corretamente os informações necessárias! </p>
            <p>Ver: {ValidadorVar} </p>
          </div>
          <button onClick={() => { ChangerValidadorState(false) }}>Ok!</button>
        </div>
      </div>
    </div>
  )
}