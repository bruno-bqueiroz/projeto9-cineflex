import {useState} from 'react';


export default function Assento ({
    idAssento,
    numero,
    index,
    disponibilidade,
    setArray,
    array 
}){
    const [clicado, setClicado] = useState(false);
    function click(idAssento){

        if (!clicado && disponibilidade){
            console.log("entrou");
            const transfer = [...array, idAssento];
            setArray (transfer);
            setClicado(true);
            
        }else if (!disponibilidade) {
            alert("Esse assento não está disponível");
        }else if(clicado){
            setClicado(false);
        }
    }
    return (
    
        <div className={disponibilidade  ? clicado ? "bolinha selecionado" :  "bolinha " : "bolinha indisponivel"} key={index}
            onClick = {()=> {click(idAssento)}}>
            <p>{numero}</p>
        </div> 
    )}
