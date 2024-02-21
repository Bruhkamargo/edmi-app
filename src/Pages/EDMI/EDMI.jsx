import React, { useState, useEffect } from "react";
import axios from "axios";

import './EDMI.css'


export default () => {
    const [BoolSexo, SetBoolSexo] = useState(true);
    const [StrName, SetStrName] = useState('');

    return (
        <div id="EDMI">
            <div className="LeftDiv">
                <div className="LeftDivTop">

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
                            <label className='LabelIMC' style={{ margin: "0 20px" }}>
                                <input className='RadioInput' type="radio"
                                    checked={BoolSexo ? true : false} value="Masculino"
                                    onChange={() => { BoolSexo ? SetBoolSexo(false) : SetBoolSexo(true) }} />
                                Masculino
                            </label>
                            <label className='LabelIMC' style={{ margin: "0 20px" }}>
                                <input className='RadioInput' type="radio"
                                    checked={BoolSexo ? false : true} value="Feminino"
                                    onChange={() => { BoolSexo ? SetBoolSexo(false) : SetBoolSexo(true) }} />
                                Feminino
                            </label>
                        </span>
                    </span>

                    {/*Input Data de nascimento*/}
                    <span className='SpanEDMI'>
                        <label className='LabelIMC'>Data de Nascimento: </label>
                        <input type="text" className='InputEDMI'
                            value={StrName} onChange={(e) => { SetStrName(e.target.value) }}
                            placeholder='Data de Nascimento'
                        ></input>
                    </span>

                    {/*Input Idade*/}
                    <span className='SpanEDMI'>
                        <label className='LabelIMC'>Idade: </label>
                        <input type="text" className='InputEDMI'
                            value={StrName} onChange={(e) => { SetStrName(e.target.value) }}
                            placeholder=''
                        ></input>
                    </span>

                    {/*Input Outros Dados*/}
                    <span className='SpanEDMI'>
                        <label className='LabelIMC'>Outros Dados: </label>
                        <input type="text" className='InputEDMI'
                            value={StrName} onChange={(e) => { SetStrName(e.target.value) }}
                            placeholder='Outros Dados'
                        ></input>
                    </span>

                </div>

                <div className="LeftDivBot">
                    <h3>Resultado</h3>
                    <div>Idade ()</div>
                    <div>Idade ()</div>
                    <div>Idade ()</div>
                    <div>Idade ()</div>
                    <div>Idade ()</div>
                    <div>Idade ()</div>
                </div>
            </div>
            <div className="RightDiv">

            </div>
        </div>
    )
}