import {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';



export default function Sucesso (
    idsessao
){
    const navigate = useNavigate();
    console.log(idsessao)
    function home(){
        navigate('/');
    }

    const ID = 100;
    const [filme, setFilme] = useState({});
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${ID}/seats`)
        promise.then(resposta =>{
          setFilme(resposta.data);  
        })
    },[]);
    
   
    return (
        <>
            <div className='sucesso'>
                <b>Pedido feito</b>
                <b>com sucesso!</b>
                <div className='ticket'>
                <b>Filme e sessão</b>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>

                </div>
                <div className='ticket'>
                <b>Ingressos</b>
                <p>Assento 15</p>
                
                </div>
                <div className='ticket'>
                <b>Comprador</b>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
                </div>
                <div className='botao'>
                <button onClick={home}>Voltar pra Home</button>
                </div>
            </div>

        </>
    )
}