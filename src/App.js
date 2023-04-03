import React, { useState } from 'react';
import './App.css';


function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setTodo] =useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..." onChange={(e)=>setTodo(e.target.value)} value={toDo} />

        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj)=>{

         
    return(
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked);
              console.log(obj);
              setToDos(toDos.filter(obj2=>{
                if(obj2.id ===obj.id){
                  obj2.status=e.target.checked

                }
                return obj2

              }))
              return console.log(toDos);


            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i id={obj.id} className="fas fa-times" onClick={(e)=>{
              let index=toDos.findIndex(obj=>{
                return obj.id ===e.target.id
              })
              if(index!==-1){
                toDos.splice(index,1)
                setToDos([...toDos])
              }
            }}>

            </i>
          </div>
        </div>)
        })

        }
        {
          toDos.map((obj)=>{
            if(obj.status){
              return (
                <div>
                  
                  <h2>{obj.text}</h2>
                </div>
                           
              )
            }
            return null
          })
        }
        
      
      </div>
    

    </div>
  );
}

export default App;
