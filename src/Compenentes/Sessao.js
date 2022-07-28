import React from "react";
import {useState, useEffect } from "react";
import axios from "axios";

export default function Sessao (){
    const [horario, setHorario] = useState([]);
    const [rodape, setRodape] = useState([]);
    useEffect (()=>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies/3/showtimes');

        promise.then(resposta=>{
            setRodape(resposta.data)
            setHorario (resposta.data.days);
        });
    },[])
    
    
    return (
        <>
        <div className="home">
            <div className="cabecalho">
                <p>Selecione o horário</p>
            </div>
            <div className="horarios">
                 {horario.map ((value)=>
                    <div className="caixa">
                        <p>{value.weekday}</p>
                        <div className="horas">
                            {value.showtimes.map((value)=>(
                            <div className="hora">{value.name}</div>
                            ))}
                        </div>
                    </div>
                )} 
            </div>
            <div className="escolhido">
                <img src={rodape.posterURL} alt = "footer"/>
                <p>{rodape.title}</p>
            </div>
       </div>
        </>
    )
}
