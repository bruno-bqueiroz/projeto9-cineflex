import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Sessao from './Sessao';
import Assentos from './Assentos';
import Sucesso from './Sucesso';

export default function App (){
    return (
        <>
            <BrowserRouter>
                <div className="topo">CINEFLEX</div>
                <Routes>
                    <Route path='/' element = {<Home />}/>
                    <Route path='/sessao/:ID' element = {<Sessao />} />
                    <Route path='/assentos/:ID' element = {<Assentos/>} />
                    <Route path='/sucesso' element = {<Sucesso />} />
                </Routes>
            </BrowserRouter>
        </>
        )
}