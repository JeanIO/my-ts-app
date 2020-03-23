import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Temp } from './types'

interface numValue {
  label: string;
}
interface Person {
  name: string;
  age?: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
};

function App() {

  let value: number = 10
  function log(num:numValue) {
    console.log('time', num)
  }
  const MM:Temp = {name: 'Jiarui', age: 16}
  const SS:A = { label: 'nihao', value: 1}
  function chongzai(x: number):number;
  function chongzai(x: string):string;
  function chongzai(x: number|string): number | string {
    if(typeof x === 'number') {
      if(module && module.exports){

      }
      return x+1
    } else {
      return `${x}+1`
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={() => log({ label: `time-${value}` })} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <p>重载测试</p>
          <button onClick={() => {console.log(chongzai('字符'))}}>字符</button>|<button onClick={() => {console.log(chongzai(1))}}>数字</button>
        </div>
      </header>
    </div>
  );
}

export default App;
