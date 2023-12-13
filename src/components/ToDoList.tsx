import ToDoListItem from "./ToDoListItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";

const ToDoList = () => {
  interface TodoListItemProps {
    title: string;
    isCompleted: boolean;
    id: string;
  }
  const [array, setArray] = useState<TodoListItemProps[]>([]);
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "to-do"));
      const newArray: TodoListItemProps[] = [];
      querySnapshot.forEach((doc) => {
        newArray.push({ ...doc.data(), id: doc.id } as TodoListItemProps);
      });
      setArray(newArray);
    };

    getData();
  }, []);
  return (
    <>
      <div className="min-h-screen flex justify-center items-center mx-5 sm:mx-0">
        <div className="w-full sm:w-[479px] border border-slate-200 rounded-lg p-4 sm:p-7">
          <h3 className="ff_inter text-2xl font-semibold text-center">Todos</h3>
          <p className="ff_inter text-xs font-medium text-slate-600 pt-4">
            Enter Todo
          </p>
          <div className="border border-slate-200 rounded-lg flex justify-between items-center h-[49px] ps-4 mt-2">
            <input
              className="ff_inter text-sm text-slate-500 pb-1 w-full pe-3 focus:outline-none"
              placeholder="Learn html css"
              type="text"
            />
            <div className="me-1">
              <button className="ff_inter text-sm font-semibold text-white w-[80px] h-[41px] bg-blue-600 rounded-lg hover:bg-slate-500 transition duration-400 ease-in-out">
                Add
              </button>
            </div>
          </div>
          <div className="border rounded-lg mt-4">
            {array.map((obj, i) => (
              <div key={i}>
                <ToDoListItem
                  title={obj.title}
                  isCompleted={obj.isCompleted}
                  id={obj.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
