import { useEffect, useState } from 'react';
import './App.css';
import Cat from './components/Cat';

function App() {
  // ! Hook 需要在我们组件的最顶层调用
  // 如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的内部
  const [salt, setSalt] = useState(0);

  const handleNextCatClick = () => {
    setSalt(Number.parseInt(Math.random() * 10));
  };

  useEffect(() => {
    //当 React 渲染组件时，会保存已使用的 effect，并在更新完 DOM 后执行它。

    // 通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。React 会保存你传递的函数

    // 每次渲染后都执行 默认情况下，它在第一次渲染之后和每次更新之后都会执行
    console.log(salt);

    // 每个 effect 都可以返回一个清除函数
    // React 会在组件卸载的时候执行清除操作
    // React 会在执行当前 effect 之前对上一个 effect 进行清除
  }); // 如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用
  // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）

  // 作为 componentDidMount 使用，第二个参数为空数组 []
  // 作为 componentDidUpdate 使用，第二个参数为指定依赖
  // 作为 componentWillUnmount 使用，通过 return

  return (
    <div className="App">
      <header className="App-header">
        <h1>HELLO DECAT</h1>
      </header>
      <Cat salt={salt} />
      <button onClick={handleNextCatClick}>NEXT CAT</button>
    </div>
  );
}

export default App;
