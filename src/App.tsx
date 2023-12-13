"use client";
import "./App.css";
import ToDoList from "./components/ToDoList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ToDoListItem from "./components/ToDoListItem";
import { useEffect, useState } from "react";

function App() {
  interface TodoListItemProps {
    title: string;
    isCompleted: boolean;
    id: string;
  }
  const [array, setArray] = useState<TodoListItemProps[]>([]);

  // const array: TodoListItemProps[] = [];
  // const getData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "to-do"));
  //   querySnapshot.forEach((doc) => {
  //     array.push({ ...doc.data(), id: doc.id } as TodoListItemProps);
  //   });
  // };
  // getData();
  // console.log("array", array);
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
            <ToDoList />
    </>
  );
}

export default App;
