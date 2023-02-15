import { useState } from "react";
import Loading from "../components/Loading/Loading";
import Prompt from "../components/Prompt/Prompt";
import RoutineItem from "../components/RoutineItem/RoutineItem";
import SolidButton from "../components/SolidButton/SolidButton";
import CLOSEICON from "../assets/icons/close.png";
import OutlineInput from "../components/OutlineInput/OutlineInput";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../methods/useLocalStorage";
import useFetchRoutines from "../methods/useFetchRoutines";

const ResultPage : React.FC = () => {
  let routineItems = useFetchRoutines();
  let [isPromptVisible, setIsPromptVisible] = useState<boolean>(false);
  let [name, setName] = useState<string>("");
  let localRoutineItems = useLocalStorage();
  const navigate = useNavigate();
  function save() {
    let date = new Date();
    let map;
    if (localRoutineItems !== null) {
      if (!localRoutineItems?.has(name)) {
        map = new Map([...localRoutineItems]);
      } else {
        alert("name already exists");
      }
    } else {
      map = new Map();
    }

    if (map) {
      map?.set(name, {
        data: routineItems,
        date: date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
      });
      let stringifiedData = JSON.stringify([...map]);
      localStorage.setItem("ROUTINE_APP_DATA", stringifiedData);
      const event = new StorageEvent("storage", {
        key: "ROUTINE_APP_DATA",
        newValue: JSON.stringify([...map]),
      });
      window.dispatchEvent(event);
      navigate("/");
    }
  }

  return (
    <div className="flex-1 flex items-center justify-center flex-col gap-4">
      <div className="sticky top-0 bg-white flex h-fit w-full items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Your Routine</h1>
        <SolidButton onclick={() => setIsPromptVisible(true)}>Save</SolidButton>
      </div>
      <div className="flex-1 w-full flex flex-col items-center justify-start gap-2">
        {routineItems?.length > 0 ? (
          <>
            {routineItems.map((item: string, index: number) => (
              <RoutineItem key={index} task={item} />
            ))}
            <div className="flex w-full h-fit items-center justify-center p-4">
              <p className="text-sm">Created by Rishab Raj with OpenAI</p>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
      <Prompt isVisible={isPromptVisible}>
        <div className="flex flex-col items-stretch justify-center bg-white p-4 shadow-lg rounded-sm gap-2">
          <div className="flex items-center justify-end">
            <img
              src={CLOSEICON}
              className="h-[25px] w-[25px] bg-blue-900 p-2 cursor-pointer"
              onClick={() => setIsPromptVisible(false)}
            ></img>
          </div>
          <OutlineInput
            placeholder="routine name"
            value={name}
            onchange={(e) => setName(e.target.value)}
          ></OutlineInput>
          <SolidButton onclick={save}>Save</SolidButton>
        </div>
      </Prompt>
    </div>
  );
}


export default ResultPage;