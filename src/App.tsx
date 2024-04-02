import React, {useState} from 'react';
import './App.css'
import './App.css'
import Form fom '/components/Form.tsx';

const App = () => {
  const  [formDone, setFormDone] = useState<boolean>(false);

  return(
    <div>
      <Form setFormDone = {setFormDone}/>
      {formDone && <h1>表單已完成</h1>}
    </div>
  )

}

export default App;
