import { Link } from "react-router-dom";

export default function TagToDoItem({ title, subtitle, id }) {
  return (
    <Link to={`/todo/${id}`}>
      <div className="w-2/3 pr-3">
        <h4 className="text-xl mb-1 font-medium">{title}</h4>
        <p className="pb-2">{subtitle}</p>
        <hr />
      </div>
    </Link>
  );
}
