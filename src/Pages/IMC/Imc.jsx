import React, { useState, useEffect } from "react";
import axios from "axios";

import './Imc.css'


export default () => {
    const [BoolSexo, SetBoolSexo] = useState(true);
    const [NumbWeight, SetNumbWeight] = useState();
    const [NumbHeight, SetNumbHeight] = useState();
    const [AxiosTeste, SetAxiosTeste] = useState();
    const baseUrl = 'https://teste-backend-psi.vercel.app';
    // const baseUrl = 'http://localhost:3001/'

    const getUsers = async () => {
        const { data } = await axios.get(`${baseUrl}/users`);
    };

    useEffect(() => {
        getUsers()
    }, []);

    const CalcIMC = async () => {
        if (!NumbWeight || !NumbHeight) {
            return alert('Preencha os campos!')
        }

        let data = { Peso: Number(NumbWeight), Altura: Number(NumbHeight) };
        let { data: NewUser } = await axios.post(`${baseUrl}/users`, data);
        SetAxiosTeste(NewUser.Result);

        SetNumbHeight(0);
        SetNumbWeight(0);
    }

    return (
        <div id="IMC">
            <h1>Calculadora de IMC</h1>
            {/*Input Sexo*/}
            <div className="ImcCalc">
                <span className='SpanIMC'>
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

                {/*Input Peso*/}
                <span className='SpanIMC'>
                    <label className='LabelIMC'>Peso: </label>
                    <input type="number" className='InputIMC' min={0}
                        value={NumbWeight} onChange={(e) => { SetNumbWeight(e.target.value) }}
                        placeholder='Peso em Kg'
                    ></input>
                </span>

                {/*Input Altura*/}
                <span className='SpanIMC'>
                    <label className='LabelIMC'>Altura: </label>
                    <input type="number" className='InputIMC' min={0}
                        value={NumbHeight} onChange={(e) => { SetNumbHeight(e.target.value) }}
                        placeholder='Altura em cm'
                    ></input>
                </span>
                <button className="IMCButton" onClick={() => { CalcIMC() }}>Calcular</button>

            </div>
            <div className="ImcResult">
                <span>
                    {AxiosTeste ? AxiosTeste : <></>}
                </span>
            </div>


        </div>
    )
}