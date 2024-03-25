import './App.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
function App() {
  return (
    <Provider store={store}>
      <div class="mybox">
          <Counter/>
          <Todolist></Todolist>
      </div>
    </Provider>
)}

export default App;
