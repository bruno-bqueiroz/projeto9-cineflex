import { Link } from "react-router-dom";
import {useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Sessao (){
    const [horario, setHorario] = useState([]);
    const [rodape, setRodape] = useState([]);
   
    const {ID} = useParams();

    useEffect (()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${ID}/showtimes`);

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
                            {value.showtimes.map((value, index)=>(
                                <Link to={`/assentos/${value.id}`}>
                                <div className="hora" key={index}>{value.name}</div>
                                </Link>
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
