import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import Todolist from './Todolist';


function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Todolist/>
     </div>
    </Provider>
    
  );
}

export default App;
