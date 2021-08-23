import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';
import SearchResult from './SearchResult';

function App() {
  const [searchString, setSearchString] = useState("");
const [finalTodoList, setFinalTodoList] = useState([])

  const searchHandler = (event) => {
    setSearchString(event.target.value);
  };



  return (
    <div className="App">
      <input value={searchString} onChange={searchHandler} />
      <TodoList finalToDoListHandler={setFinalTodoList} searchfor={searchString}/>
      <SearchResult searchfor={searchString}/>
    </div>
  );
}

export default App;
