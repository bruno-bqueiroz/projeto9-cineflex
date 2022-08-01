import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Assento from './Assento'


function Reservar({array}){
    const [nome, setNome] = useState("");
	const [cpf, setCPF] = useState("");
    
    const navigate = useNavigate();
   
    function fazerReserva(event){
        console.log(array)
        event.preventDefault();
        const requisicao = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",{
            ids: array,
            name: nome,
            cpf: cpf
        });
        requisicao.then(tratarSucesso);
        requisicao.catch(tratarErro);
        

        function tratarSucesso(resposta) {
            console.log ("sucesso " + resposta.data)
            navigate('/sucesso');
        }

        function tratarErro(erro) {
            console.log("Status code: " + erro.response.status); // Ex: 404
	        console.log("Mensagem de erro: " + erro.response.data); // Ex: Not Found
}
    }


    return(
        <>
        <form onSubmit={fazerReserva}>
            <p>Nome do comprador:</p>
		        <input type="nome" placeholder='Digite seu nome...' value={nome} onChange={e => setNome(e.target.value)} />
            <p>CPF do comprador:</p>
                <input type="cpf" placeholder='Digite seu CPF...' value={cpf} onChange={e => setCPF(e.target.value)} />
            <button type="submit">Reservar assento(s)</button>
		</form>
        </>
    )
}

export default function Assentos({
    idSessao
}){
     const [rodape, setRodape] = useState([]);
     const [diaRodape, setDiaRodape] = useState([]);
     const [horaRodape, setHoraRodape] = useState([]);
     const [assentos, setAssentos] = useState([]);
     const [array, setArray] = useState([]);
     console.log(array);
     
     
     const {ID} = useParams();
     idSessao (ID);
     useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${ID}/seats`)
        promise.then(resposta =>{
            setRodape(resposta.data.movie)
            setHoraRodape(resposta.data)
            setDiaRodape(resposta.data.day)
            setAssentos(resposta.data.seats)
            
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
                <Assento
                idAssento = {value.id} 
                numero = {value.name}
                index = {index}
                disponibilidade = {value.isAvailable}
                setArray = {setArray}
                array = {array}
                 />
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
                    <div className='input'>
                    <Reservar array = {array}/>
                    </div>
            </div>
            <div className="escolhido">
                <img src={rodape.posterURL} alt = "footer"/>
                <div>
                    <p>{rodape.title}</p>
                     <p>{diaRodape.weekday} {horaRodape.name}</p> 
                </div>
            </div>
        </div>
        </>
    )
}

