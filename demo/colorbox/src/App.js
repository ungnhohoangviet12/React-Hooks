import { useEffect, useState } from 'react';
import './App.scss';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
    const [todoList, setTodoList] = useState([
      {id: 1, title: 'ung nho hoang viet🤣🤣🤣'},
      {id: 2, title: 'ung nho hoang chung🤣🤣🤣'},
      {id: 3, title: 'ung nho hoang teo🤣🤣🤣'},
    ]);

    const [postList, setPostList] = useState([]);

    useEffect(() => {
      async function fetchPostList() {
        // ...
        try {
          const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1apps%20/'; 
          const reponse = await fetch(requestUrl);
          const reponseJSON = await reponse.json();
          console.log({ reponseJSON });
  
          const { data } = reponseJSON;
          setPostList(data);
        } catch (error) {
          console.log('Failed to fetch post list:', error.message);
        }
       
      }
      console.log('POST list effect');

       fetchPostList();
    }, []);

    useEffect(() => {
      console.log('TODO list effect');
    })

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
     {/* <TodoForm onSubmit={handleTodoFormSubmit}/> */}
     {/* <TodoList todos={todoList} onTodoClick={handleTodoClick}/> */}
     <PostList posts={postList}/>

    </div>
  );
}

export default App;
