import "./App.css";
// import ToDo from "./components/ToDo";
import ToDoListItem from "./components/ToDoListItem";

function App() {
  return (
    <>
      {/* <ToDo /> */}
      <ToDoListItem id="text" title="Todo One" isCompleted={true} />
      <ToDoListItem id="text" title="Todo Two" isCompleted={false} />
    </>
  );
}

export default App;
