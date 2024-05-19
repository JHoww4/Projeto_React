import { Link } from "react-router-dom";
import PackingList from "./functions/Packing";
import {PackingListNull,PackingListDel,PackingListAnd,} from "./functions/Packing";
import Galery from "./functions/Galery";
import {ProfileDefault,Profile,AvatarGregorio,AvatarLin,} from "./functions/Galery";
import List from "./functions/Map";
import { DataList, AllDataList } from "./functions/Map";
import Recipe from "./functions/Recipe";
import { TeaSet } from "./functions/Recipe";

function TodoListName() {
  const name = "Gregorio Y. Zara";
  return <h3>{name}'s To do List</h3>;
}

function TodoListDate() {
  const today = new Date();
  return <h3>To do List for {FormatDate(today)}</h3>;
}

function ToDoListObject() {
  const person = {
    name: "Gregorio Y. Zara",
    theme: {
      backgroundColor: "Black",
      color: "pink",
    },
  };

  return (
    <div style={person.theme}>
      <h3>{person.name}'s To do List</h3>
      <AvatarGregorio />
      <ul>
      <li>Melhore o videofone</li>
      <li>Preparar palestras aeronáuticas</li>
      <li>Trabalhos no motor a álcool</li>
      </ul>
    </div>
  );
}

function TodoListObjectStyle() {
  return (
    <ul
      style={{
        backgroundColor: "black",
        color: "pink",
      }}
    >
      <li>Melhore o videofone</li>
      <li>Preparar palestras aeronáuticas</li>
      <li>Trabalhos no motor a álcool</li>
    </ul>

  );
}

function FormatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function Atividade3() {
  return (
    <>
      <h1>Atividade 3</h1>
      <h2>Praticando REACT</h2>
      <div className="corpo-atividade" style={{ textAlign: "start" }}>
        <article>
        <h1>Meu primeiro componente</h1>
            <ol>
                <li>Componente: Blocos de construção da interface do usuário</li>
                <li>Definindo um componente</li>
                <li>Usando um componente</li>
            </ol>
        </article>
        <hr />
        <h1>- Exportação Padrão</h1>
        <Galery />
        <hr />
        <h1>- Exportação Nomeada</h1>
        <ProfileDefault />
        <hr />
        <h1>- Utilizando variáveis na img/Utilização de chaves</h1>
        <TodoListName />
        <AvatarGregorio />
        <hr />
        <h1>- Formatação de data</h1>
        <TodoListDate />
        <hr />
        <h1>- Passando Objetos no style</h1>
        <TodoListObjectStyle />
        <hr />
        <h1>- Passando Objetos</h1>
        <ToDoListObject />
        <hr />
        <h1>- Passando props para um img</h1>
        <AvatarLin />
        <hr />
        <h1>- Passando props para funções</h1>
        <Profile />
        <hr />
        <h1>- Operador lógico para controlar exibição</h1>
        <PackingList />
        <hr />
        <h1>
          - Operador lógico para controlar exibição, retornando "Null" para todo
          "True"
        </h1>
        <PackingListNull />
        <hr />
        <h1>
          - Operador lógico para controlar exibição, utilizando ternário e
          riscando os concluídos
        </h1>
        <PackingListDel />
        <hr />
        <h1>
          - Operador lógico para controlar exibição, utilizando And como
          condição
        </h1>
        <PackingListAnd />
        <hr />
        <h1>- Mapeando dados armazenados em um vetor/array</h1>
        <List />
        <hr />
        <h1>- Exibindo dados estruturados e filtrando apenas 'chemists'</h1>
        <DataList />
        <hr />
        <h1>- Exibindo dados estruturados sem filtrar</h1>
        <AllDataList />
        <hr />
        <h1>- Conceito de Função pura</h1>
        <br />
        <h1>Spiced Chai Recipe</h1>
        <h2>For two</h2>
        <Recipe drinkers={2} />
        <h2>For a gathering</h2>
        <Recipe drinkers={4} />
        <hr />
        <h1>- Processo de renderização puro</h1>
        <TeaSet />
        <div>
          <Link to="/">Retornar para página inicial</Link>
        </div>
      </div>
    </>
  );
}
