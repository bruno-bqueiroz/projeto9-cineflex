import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Home from "./Home";
import Sessao from './Sessao';
import Assentos from './Assentos';
import Sucesso from './Sucesso';

export default function App (){
    const [id, setId] = useState([]);
    return (
        <>
            <BrowserRouter>
                <div className="topo">CINEFLEX</div>
                <Routes>
                    <Route path='/' element = {<Home />}/>
                    <Route path='/sessao/:ID' element = {<Sessao />} />
                    <Route path='/assentos/:ID' element = {<Assentos idSessao = {setId}/>} />
                    <Route path='/sucesso' element = {<Sucesso idsessao = {id}/>} />
                </Routes>
            </BrowserRouter>
        </>
        )
}