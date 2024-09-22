import { Link } from "react-router-dom";

export default function ToDoItem(props) {
  return (
    <Link
      to={`/todo/${
        typeof props.toDoId === "undefined" ? 'tag/'+props.tagSlug : props.toDoId
      }`}
      className="w-full"
    >
      <div dir="ltr" className=" ml-4">
        -{props.title}
      </div>
    </Link>
  );
}
