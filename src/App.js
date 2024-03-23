import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
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
