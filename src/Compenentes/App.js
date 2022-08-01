import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Home from "./Home";
import Sessao from './Sessao';
import Assentos from './Assentos';
import Sucesso from './Sucesso';

export default function App (){
    
    const [titulo, setTitulo] = useState("");
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [numero, setNumero] = useState([]);
    
    return (
        <>transfer
            <BrowserRouter>
                <div className="topo">CINEFLEX</div>
                <Routes>
                    <Route path='/' element = {<Home />}/>
                    <Route path='/sessao/:ID' element = {<Sessao />} />
                    <Route path='/assentos/:ID' element =
                    {<Assentos
                        setTitulo = {setTitulo}
                        setData = {setData}
                        setHora = {setHora}
                        setNumero = {setNumero}
                        

                    />}
                    />
                    <Route path='/sucesso' element = 
                    {<Sucesso
                        titulo = {titulo}
                        data = {data}
                        hora = {hora}
                        numero = {numero}
                        
                    />}
                    />
                </Routes>
            </BrowserRouter>
        </>
        )
}