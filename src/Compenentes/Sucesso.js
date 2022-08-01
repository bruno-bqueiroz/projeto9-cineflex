import {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';



export default function Sucesso (
    titulo,
    dado1
){
    const navigate = useNavigate();
    
    console.log(titulo);
    

    function home(){
        navigate('/');
    }

    
   
    return (
        <>
            <div className='sucesso'>
                <b>Pedido feito</b>
                <b>com sucesso!</b>
                <div className='ticket'>
                <b>Filme e sessão</b>
                <p>{titulo.titulo}</p>
                <p>{titulo.data}   {titulo.hora}</p>

                </div>
                <div className='ticket'>
                <b>Ingressos</b>
                {titulo.numero.map ((value)=>
                <p>Assento {value}</p>
                )}
                </div>
                <div className='ticket'>
                <b>Comprador</b>
                <p>Nome: {titulo.dado1}</p>
                <p>CPF: {titulo.dado2}</p>
                </div>
                <div className='botao'>
                <button onClick={home}>Voltar pra Home</button>
                </div>
            </div>

        </>
    )
}