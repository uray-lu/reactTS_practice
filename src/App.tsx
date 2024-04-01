import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Counter count={count} setCount={setCount} title="Counter App"/>
    </div>
  );
}

export default App;
