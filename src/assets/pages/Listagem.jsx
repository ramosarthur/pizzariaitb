import style from "./ListagemStyle.module.css"


import pizza1 from "../Images/atum.png"
import pizza2 from "../Images/calabresa.png"
import pizza3 from "../Images/frango.png"
import pizza4 from "../Images/mussarela.png"
import pizza5 from "../Images/portuguesa.png"



const pizzas = [
    { nome: "atum", imagem: pizza1 },
    { nome: "calabresa", imagem: pizza2 },
    { nome: "frango", imagem: pizza3 },
    { nome: "mussarela", imagem: pizza4 },
    { nome: "portuguesa", imagem: pizza5 },
    // Adicione mais pizzas conforme necessário
];

const Listagem = () => {
    const ItensLista = () => (
        pizzas.map((pizza, index) => (
          <div key={index} className={style.container}>
           <li style={{ listStyle: 'none' }}>
                <img 
                    src={pizza.imagem} 
                    alt={pizza.nome} 
                    style={{
                        width: "150px", 
                        height: "100px", 
                        borderRadius: "8px", 
                        margin: "0px"
                    }} 
                    
                />
                
            </li>
            </div>
           
        ))
        
    );

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>
                Pizzas ITB
            </h2>
            <ul>
                <ItensLista />
            </ul>
        </>
    );
};

export default Listagem;
