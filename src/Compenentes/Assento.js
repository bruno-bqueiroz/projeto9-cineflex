import {useState} from 'react';


export default function Assento ({
    idAssento,
    numero,
    index,
    disponibilidade,
    setArray,
    array,
    numb, 
    setNumb
}){
    const [clicado, setClicado] = useState(false);
    function click(idAssento, numero){

        if (!clicado && disponibilidade && !array.includes(idAssento)){
            console.log("entrou");
            const transfer = [...array, idAssento];
            setArray (transfer);
            const numeros = [...numb, numero];
            setNumb(numeros);
            setClicado(true);
            
        }else if (!disponibilidade) {
            alert("Esse assento não está disponível");
        }else if(clicado){
            setClicado(false);
        }
    }
    return (
    
        <div className={disponibilidade  ? clicado ? "bolinha selecionado" :  "bolinha " : "bolinha indisponivel"} key={index}
            onClick = {()=> {click(idAssento, numero)}}>
            <p>{numero}</p>
        </div> 
    )}
