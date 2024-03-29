import './App.css'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.css';
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';

function App() {
  return <div>
    <Header />
    <TodoForm />
    <Todos />
  </div>
}

export default App
