import ToDoItem from "./ToDoItem";

export default function ToDoListContainer(props) {
  return (
    <div dir="ltr" className="mx-2">
      <h3>{props?.title}</h3>
      {props.todos.map((item,index)=><ToDoItem key={index} title={item}/>)}
    </div>
  );
}
