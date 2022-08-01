import {useState} from 'react';


export default function Assento ({
    idAssento,
    numero,
    index,
    disponibilidade,
    setArray,
    array = {array}
}){

    const [id, setId] = useState(idAssento);
    function click({idAssento}){
        setId(idAssento)

        if (id !== "" && !array.includes(id) && id && disponibilidade){
            console.log("entrou");
            const transfer = [...array, id];
            setArray (transfer);
            
        }else if (!disponibilidade) {
            alert("Esse assento não está disponível");
        }
    }
    return (
    
        <div className={disponibilidade  ? "bolinha " : "bolinha indisponivel"} key={index}
            onClick = {()=> {disponibilidade ? click(idAssento) : click("")}}>
            <p>{numero}</p>
        </div> 
    )}
