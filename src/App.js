import { useEffect, useState } from "react";
import axios from "axios";

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input.js';
import './assets/all.scss';


function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    (async () => {
      const path = process.env.REACT_APP_PATH;
      const result = await axios.get(path);
      console.log(result);
    })()
  }, [])

  const onChangeHandler = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>{text}
        <Input id='sampleText' labelText="這是一個input" value={text} onChangeHandler={onChangeHandler} />
        <button type="button" className="btn btn-primary">Primary</button>
      </header>
    </div>
  );
}

export default App;
