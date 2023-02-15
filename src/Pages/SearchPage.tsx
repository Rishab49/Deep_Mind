import { useState } from "react";
import React from "react";
import TaskChips from "../components/TaskChips/TaskChips";
import { useNavigate } from "react-router-dom";
import OutlineInput from "../components/OutlineInput/OutlineInput";
import SolidButton from "../components/SolidButton/SolidButton";


const SearchPage: React.FC = () => {
  let [value, setValue] = useState<string>("");
  let [tasks, setTasks] = useState<string[]>([]);
  let navigate = useNavigate();



  function navigateRoute() {
    if (tasks.length > 0) {
      let obj: any = {
        tasks: tasks,
      };
      let searchParam = new URLSearchParams(obj);
      let searchParamString = searchParam.toString();
      navigate(`/routine?${searchParamString}`);
    } else {
      alert("Please enter some tasks");
    }
  }
  function onKeyDown(e: any) {
    if (e.key === "Enter") {
      setTasks((state: string[]) => [...state, value]);
      setValue("");
    }
  }

  function onDelete(index: number) {
    setTasks((state: string[]) => {
      let newState = [...state];
      newState.splice(index, 1);
      return newState;
    });
  }

  return (
    <div className="flex-1 flex items-center justify-center flex-col gap-2">
      <div className="flex max-w-[500px] w-[75vw] h-[50px] border-[2px] border-blue-900 rounded-lg overflow-hidden">
        <OutlineInput
          placeholder="Enter the tasks and press enter to add"
          value={value}
          onchange={(e) => setValue(e.target.value)}
          onkeydown={onKeyDown}
        />
        <SolidButton onclick={navigateRoute}> Create</SolidButton>
      </div>
      <div className="w-[75vw] h-fit flex gap-4 flex-wrap">
        {tasks.map((task, index) => (
          <TaskChips task={task} onClose={() => onDelete(index)} key={index} />
        ))}
      </div>
    </div>
  );
};


export  default SearchPage;