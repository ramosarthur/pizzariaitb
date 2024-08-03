import margherita from "../assets/imagens/margherita.png"
import pepperoni from "../assets/imagens/pepperoni.png"
import quattroformaggi from "../assets/imagens/quattroformaggi.png"
import hawaiana from "../assets/imagens/hawaiana.png"
import calabresa from "../assets/imagens/calabresa.png"

const Pizzas = [ 
    {
    "id": 1,
    "nome":"atum",
    "descrição":
    "Pizza clássica com molho de tomate, mozzarella e manjericão.",
    "imagem": margherita
    },
    {
    "id": 2,
    "nome":"calabresa",
    "descrição":"Pizza com molho de tomate, mozzarella e fatias de pepperoni.",
    "imagem": pepperoni
    },
    {
    "id": 3,
    "nome" : "frango",
    "descrição":"Pizza com uma mistura de quatro queijos: mozzarella, gorgonzola, parmesão e fontina",
    "imagem": quattroformaggi
    },
    {
    "id": 4,
    "nome":"mussarela",
    "descrição":
    "Pizza com molho de tomate, mozzarella, presunto e abacaxi.",
    "imagem": hawaiana
    },
    {
    "id": 5,
    "nome": "portuguesa",
    "descrição":"Pizza com molho de tomate, mozzarella e linguiça calabresa.",
    "imagem": calabresa
    },

]

export default Pizzas;