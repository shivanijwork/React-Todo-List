import './CSS/TodoItems.css';
import tick from './Assets/tick.png';
import cross from './Assets/cross.png';
import not_tick from './Assets/not_tick.png';

const TodoItems = ({no, display, text, setTodos}) => {

    const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no != no);
    setTodos(data);
    }

  const toggle = () => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i=0; i<data.length; i++){
        if(data[i].no === no){
            if(data[i].display === ""){
                data[i].display = "line-through";
            }
            else{
                data[i].display = "";
            }
            break;
        }
    }
    setTodos(data)
  }

  return (
    <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={() => {toggle(no)}}>
            {display===""?<img src={not_tick} alt="" />:<img src={tick} alt="" />}
            <div className='todoitems-text'>{text}</div>
        </div>
        <img onClick={() => {deleteTodo(no)}} className='todoitems-cross-icon' src={cross} alt="" />
    </div>
  )
}

export default TodoItems
