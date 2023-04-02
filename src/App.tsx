import React,{useState} from "react";
import { Todo } from './components/todo';
import Counter from "./components/counter";
import List from "./components/list";

const App:React.FC  = () => {
  const [count,setCount] = useState<number>(1)
  return (
    <div className="App">
      <Todo title="This is title">
        hello
      </Todo>
      <Counter setCount={setCount}> This is the Count: {count}</Counter>
      <List items={['cofee','tea','beer']} render={(item:string) => <span className="gold">{item}</span>} />
    </div>
  )
}

export default App;


