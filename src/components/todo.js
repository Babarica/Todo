import {useState, useEffect} from 'react'
import Task from './task'
const Todo = ({todo,array, getPosts, title}) => {
    const [
        value,
        setValue
      ] = useState(String)
      const [
        description,  
        setDescription
      ] = useState(String)
      const [
        name,  
        setName
      ] = useState(String)
      useEffect(()=>{
        getPosts();
      },
      []
      )
      
      function sendPosts(){
        const user = {id: Date.now(), name: value, description: description}
        array.push(user)
        localStorage.setItem(todo, JSON.stringify(array));
        setValue('')
        setDescription('')
      }
      function changeName(event){
        if(event.key === "Enter"){
          var nameLabel = document.querySelector(".main-text");
          var nameInput = document.querySelector(".main-input");
          var nameTitle = document.querySelector(".main-title");
          nameLabel.classList.add("hide")
          nameInput.classList.add("hide")
          nameTitle.classList.add("unhide")
          const title = {title: name}
          array.push(title)
          localStorage.setItem(todo, JSON.stringify(array));
        }
      }
      return (
        <>
          <div className='header'>
                <div className='form'>
                <h2 className='header-title'>Add Task</h2>
                <input className='form-text' placeholder='name...' type="text" value={value} onChange={({target})=> {setValue(target.value)}}></input>
                <input className='form-text' placeholder='description...' type="text" value={description} onChange={({target})=> {setDescription(target.value)}}></input>
                <button className='form-btn' onClick={sendPosts}>Add</button> 
          </div>
          </div>
          <div className='main'>
            {title ? <div className='title'>{title}</div> : <div className='main-name'>
              <label htmlFor='name' className='main-text'>Add name to list:</label>
              <input className='main-input' id="name" type="text" placeholder='Food list...' value={name} onKeyPress={changeName}  onChange={({target})=> {setName(target.value)}}></input>
              <p className='main-title'>{name}</p>
            </div>
            }
            <div className='main-tasks'>
            {array.length === 0 || (array[0].title && array.length ===1) ? <p>the list is empty</p> : array.map((user, id) =><Task user={user} todo={todo} array={array} getPosts={getPosts} key={id} /> ) }
            </div>
          </div>
        </>
      )
}

export default Todo