// "use client";

import "./App.css";
import ToDoList from "./components/ToDoList";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

function App() {
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "to-do"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };
  getData();

  return (
    <>
      <ToDoList />
    </>
  );
}

export default App;
