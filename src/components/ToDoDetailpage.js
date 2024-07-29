import Navbar from "./Navbar";
import ToDoDetailContainer from "./ToDoDetailContainer";
import ToDoSideBar from "./ToDoSideBar";

export default function ToDoDetailPage() {
  return (
    <>
      <Navbar />
      <div className="flex h-full" dir="ltr">
        <ToDoSideBar />
        <ToDoDetailContainer />
      </div>
    </>
  );
}
