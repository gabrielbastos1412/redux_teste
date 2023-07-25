import './App.css';
import AddTodo from './components/addtodo';
import ListTodo from './components/listtodo';
import VisibilityFilters from './components/visibilitytodo';
function App() {
  return (
    <div className="App">
      <AddTodo />
      <ListTodo />
    </div>
  );
}
export default App;