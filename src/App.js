import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  const [resultMessage, setResultMessage] = useState('Нет результата');
  const [resultColor, setResultColor] = useState('text-warning');
  const [arrLength, setArrLength] = useState('0');

  function generate(max) {
    let resultMessage = 'Неверный размер массива';
    let resultColor = 'text-danger';
    max = parseInt(max);
    if (max > 0) {
      const min = 1;

      resultMessage = Math.floor(Math.random() * (max - min + 1)) + min;

      resultColor = 'text-success';
    }
    setResultColor(resultColor);
    setResultMessage(resultMessage);
  }

  return (
    <div className="App">
      <div className="mainDiv">
        <h1 className="text-info">Введите размер массива</h1>
      </div>
      <div className="mainDiv">
        <input
          type="number"
          id="arrLength"
          defaultValue={arrLength}
          onChange={(e) => {
            setArrLength(e.target.value);
          }}
          min="0"
          className="text-primary"
        />
      </div>

      <div className="mainDiv">
        <Button
          type="button"
          id="randomBtn"
          onClick={generate.bind(this, arrLength)}
          className="btn btn-info text-white"
        >
          Сгенерировать
        </Button>
      </div>

      <div className="mainDiv">
        <h1 id="randomInt" className={resultColor}>
          {resultMessage}
        </h1>
      </div>
    </div>
  );
}

export default App;
