import './App.css';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  return (
      <div className='mybox'>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>

)}

export default App;
