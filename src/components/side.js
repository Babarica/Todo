
function ListArr({cart,list,todo, id,setTodo,getPosts, getFlags}){
    // Удаляю пункт todo
    function deleteList(){
        list = list.filter(p => p.id !== cart.id)
        localStorage.setItem('globalArr', JSON.stringify(list));
        localStorage.removeItem(cart.id)
        getFlags();
    }
    // Меняю пункт
    function changeList(){
        var listDel = document.querySelectorAll(".list-delete");
        var listSel = document.querySelectorAll(".list-block");
        for(let i =0; i<listDel.length; i++){
            listDel[i].classList.remove("active")
            listSel[i].classList.remove("active")
            listSel[i].classList.remove("blue")
        }
        setTodo(cart.id);
        getPosts();
        if(todo === cart.id){
            listSel[id].classList.add("blue")
        }
        listDel[id].classList.add("active")
        listSel[id].classList.add("active")
        

    }
    return (
        <div className="list-inner"><div className="list-block" onClick={changeList}><span>{id+1}</span></div><div className="list-delete" onClick={deleteList}><span>-</span></div></div>
    )
}

function Side({getFlags, todo, getPosts, list, setTodo}){
    function addList(){
        const mas = {id: Date.now()};
        list.push(mas);
        localStorage.setItem('globalArr', JSON.stringify(list));
        getFlags();
        setTodo(mas.id)
    } 
    
    
    return (
        <>
            <aside className="sidebar">
                <button onClick={addList} className="sidebar-plus">
                </button>
                <div className="sidebar-inner">
                {list.length === 0 ? <p>...</p> : list.map((cart, id) =><ListArr cart={cart} todo={todo} list={list} getFlags={getFlags} getPosts={getPosts} setTodo={setTodo} id={id}  key={id}/> )}
                </div>
            </aside>
        </>
    )
}
export default Side