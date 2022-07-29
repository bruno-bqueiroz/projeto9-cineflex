import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios';

export default function Home(){

    const [filmes, setFilmes] = useState([]);
    useEffect (()=>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');
        
        promise.then(resposta => {
            setFilmes(resposta.data);    
        });
    }, []);
    return (
    <>
       <div className="home">
            <div className="cabecalho">
                <p>Selecione o filme</p>
            </div>
            <div className="filmes">
                {filmes.map((value, index) =>
                <Link to={`/sessao/${value.id}`}>
                    <img 
                    src={value.posterURL}key={index}
                    alt="capa do filme" />
                </Link> 
                )}
            </div>
       </div>
    </>
    )
}