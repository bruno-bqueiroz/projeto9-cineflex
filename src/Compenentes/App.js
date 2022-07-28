import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Sessao from './Sessao';

export default function App (){
    return (
        <>
            <BrowserRouter>
                <div className="topo">CINEFLEX</div>
                <Routes>
                    <Route path='/' element = {<Home />}/>
                    <Route path='/sessao/:ID' element = {<Sessao />} />
                </Routes>
            </BrowserRouter>
        </>
        )
}