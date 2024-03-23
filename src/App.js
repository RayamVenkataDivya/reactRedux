import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import Counter from './Counter';
import Todolist from './Todolist';
function App() {
  return (
    <Provider store={store}>
      <Counter/>
      <Todolist/>
    </Provider>
  )
}

export default App;
