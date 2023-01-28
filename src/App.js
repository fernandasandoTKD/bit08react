import logo from './logo.svg';
import './App.css';
import { List } from './components/List';
import { TodoAdd } from './components/TodoAdd';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='card-to-do'>
        <h1>Lista de participación de deportistas</h1>
        <div className='counter-todos'>
          <h3>N° de inscritos :4 </h3>
          <h3>Pendientes : 3 </h3>
        </div>

        <div className='add-todo'>
          <h3>Agregar Tarea</h3>
          <TodoAdd/>
         
        </div>
        <List/>
      </div>
      
      
    </div>
  );
}

export default App;
