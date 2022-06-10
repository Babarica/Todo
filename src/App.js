import './App.css';
import './null/css_null.css'
import Todo from './components/todo';
import Side from './components/side';
import {useState, useEffect} from 'react'

function App() {
  const [
    list,
    setList
  ] = useState([{id: 213321}])

  const [
    array,
    setArray
  ] = useState([])

  const [
    todo,
    setTodo 
  ] = useState([213321])
  
  const [
    title,
    setTitle
  ] = useState(String)

  function getFlags(){
    const lists = JSON.parse(localStorage.getItem('globalArr'))
    const listArray = [{id: 213321}]
    if(lists === null){
      setList(listArray);
      setTodo(213321)
    }
    else {
      setList(lists)
    }
  }

  function getPosts(){
    const users = JSON.parse(localStorage.getItem(todo))
    const litArray = []
    if(users !== null){
      for(let i = 0; i<users.length; i++){
        if(users[i].title && users[i].title !== null){
          setTitle(users[i].title)
        }
      }
    }
    else {
      setTitle(null)
    }
    
    users === null ? setArray(litArray) : setArray(users)
  }
  useEffect(()=>{
    getFlags();
  },
  [],

  )
  return (
    <>
      <Side setList={setList} todo={todo} getFlags={getFlags} getPosts={getPosts} setTodo={setTodo} list={list}/>
      <Todo title={title} array={array} setArray={setArray} getPosts={getPosts} todo={todo}/>
    </>
    
  )
}

export default App;
