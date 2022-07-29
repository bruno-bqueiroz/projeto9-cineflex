import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Assentos(){
     const [rodape, setRodape] = useState([]);
     const [horaRodape, setHoraRodape] = useState([]);
     const [assentos, setAssentos] = useState([]);
    
     const {ID} = useParams();

     useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${ID}/seats`)
        promise.then(resposta =>{
            setRodape(resposta.data.movie)
            setHoraRodape(resposta.data)
            setAssentos(resposta.data.seats);
        })
    },[]);


    return(
        <>
        <div className="home">
            <div className="cabecalho">
                <p>Selecione o(s) assento(s)</p>
            </div>
            <div className="assento">
                {assentos.map ((value, index)=>
                     <div className="bolinha" key={index}>
                     <p>{value.name}</p>
                     </div>
                )}
                <div className='exemplo'>
                    <div className='caixas'>
                        <div className="bolinha selecionado"></div>
                        <p>selecionado</p>
                    </div>
                    <div className='caixas'>
                        <div className="bolinha"></div>
                        <p>disponivel</p>
                    </div>
                    <div className='caixas'>
                        <div className="bolinha indisponivel"></div>
                          <p>indisponivel</p>
                    </div>
                    </div>
            </div>
            <div className="escolhido">
                <img src={rodape.posterURL} alt = "footer"/>
                <div>
                    <p>{rodape.title}</p>
                     <p>{/*{horaRodape.day.weekday} */} {horaRodape.name}</p> 
                </div>
            </div>
        </div>
        </>
    )
}