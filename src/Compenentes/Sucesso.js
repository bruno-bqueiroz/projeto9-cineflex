import {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom'


export default function Sucesso (){
   
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
           
<div></div>

        </>
    )
}