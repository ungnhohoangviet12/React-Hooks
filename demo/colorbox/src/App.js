import { useEffect, useState } from 'react';
import queryString from 'query-string';
import './App.scss';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import PostFiltersForm from './components/PostFiltersForm';
import CLock from './components/Clock';
import BetterClock from './components/BetterClock';

function App() {
    const [todoList, setTodoList] = useState([
      {id: 1, title: 'ung nho hoang viet🤣🤣🤣'},
      {id: 2, title: 'ung nho hoang chung🤣🤣🤣'},
      {id: 3, title: 'ung nho hoang teo🤣🤣🤣'},
    ]);

    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
      _page: 1,
      _limit: 10,
      _totalRows: 1,
    });
    const [filters, setFilters] = useState({
      _limit: 10,
      _page: 1,
    });

    useEffect(() => {
      async function fetchPostList() {
        // ...
        try {
          // _limit=10&_page=1
          const paramsString = queryString.stringify(filters);
          const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`; 
          const reponse = await fetch(requestUrl);
          const reponseJSON = await reponse.json();
          console.log({ reponseJSON });
  
          const { data, pagination } = reponseJSON;
          setPostList(data);
          setPagination(pagination);
        } catch (error) {
          console.log('Failed to fetch post list:', error.message);
        }
       
      }
      console.log('POST list effect');

       fetchPostList();
    }, [filters]);

    useEffect(() => {
      console.log('TODO list effect');
    })

    function handlePageChange(newPage) {
      console.log('New page:', newPage);
      setFilters({
        ...filters,
        _page: newPage,
      });
    }

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

    function handleFiltersChange(newFilters) {
      console.log('new filter', newFilters);
      setFilters({
        ...filters,
        _page: 1,
        title_like: newFilters.searchTerm,
      })
    }

    const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
     <h1>React hooks - Clock</h1>
     {showClock && <CLock/>}
     <BetterClock/>
     <button onClick={() => setShowClock(false)}>Hide clock</button>
     {/* <TodoForm onSubmit={handleTodoFormSubmit}/> */}
     {/* <TodoList todos={todoList} onTodoClick={handleTodoClick}/> */}
     {/* <PostFiltersForm onSubmit={handleFiltersChange}/>
     <PostList posts={postList}/>
     <Pagination
       pagination={pagination}
       onPageChange={handlePageChange}
     /> */}

    </div>
  );
}

export default App;
