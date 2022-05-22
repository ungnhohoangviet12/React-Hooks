import { useState } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
    const [todoList, setTodoList] = useState([
      {id: 1, title: 'ung nho hoang viet🤣🤣🤣'},
      {id: 2, title: 'ung nho hoang chung🤣🤣🤣'},
      {id: 3, title: 'ung nho hoang teo🤣🤣🤣'},
    ]);

    function handleTodoClick(todo) {
      console.log(todo)
      const index = todoList.findIndex(x => x.id === todo.id);
      if (index < 0) return;
      
      const newTodoList = [...todoList];
      newTodoList.splice(index,  1);
      setTodoList(newTodoList);
    } 
  return (
    <div className="app">
     <h1>React hooks - To do list</h1>
     <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
     <TodoForm/>
    </div>
  );
}

export default App;
