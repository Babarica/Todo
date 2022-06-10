
function Task({user, todo, array, getPosts}){
    function deletePost(){
      array = array.filter(p => p.id !== user.id)
      localStorage.setItem(todo, JSON.stringify(array));
      getPosts();
    }
    
    return (
      user.title == null ? <div className='task'><p className="task-title">{user.name}</p><p className="task-descr">{user.description}</p><button onClick={deletePost} className="task-btn">remove</button></div> : null
      
    )
}
export default Task