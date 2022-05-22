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

    function handleTodoFormSubmit(formValues) {
      console.log('Form submit', formValues);
      // add new todo to current todo list
      const newTodoList = [...todoList];
      const newTodo = {
        id: todoList.length + 1,
        ...formValues,
      }
      newTodoList.push(newTodo);
      setTodoList(newTodoList);
    }

  return (
    <div className="app">
     <h1>React hooks - To do list</h1>
     <TodoForm onSubmit={handleTodoFormSubmit}/>
     <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default App;
