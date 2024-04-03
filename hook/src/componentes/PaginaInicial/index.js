import { React,  useState } from 'react';
import './estilo.css';

export default function PaginaInicial (){
   
        const [numRandom, setRandom] = useState(5);

        function gerarNum(){
            const numNovo = Math.floor(Math.random() * (100-1) + 5); //o random começa em zero, então colocamos o mais um para que comece a partir do 1
            setRandom(numNovo);
        
        }
        return( //a partir daqui vemos o jxs que é o html dentro do js
            <div className='container'>
                <h1>Número aleatório</h1>
                <h2>{numRandom}</h2>
                <div className='area-botao'>
                    <label>
                        Clique no botão abaixo para gerar um novo número.
                    </label>
                    <button onClick={gerarNum}>Gerar</button>
                </div>
            </div>

        );
}