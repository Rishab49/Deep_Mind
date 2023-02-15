import { useNavigate } from "react-router-dom";
import CLOSEICON from "../../assets/icons/close.png";
import useLocalStorage from "../../methods/useLocalStorage";
import Routine from "../Routine/Routine";


let sideBarStyle = {
    none: {
      right: "-300px",
    },
    visible: {
      right: "0",
    },
  };


export default function SideBar({
  isSideBarVisible,
  setIsSideBarVisible
}: {
  isSideBarVisible: boolean;
  setIsSideBarVisible: React.Dispatch<React.SetStateAction<boolean>>,
}){
  let localRoutineItems = useLocalStorage();
  // const navigate = useNavigate();
    return (
    <div
      className="fixed top-0 h-screen w-[300px] flex flex-col items-stretch justify-start gap-2 p-2 bg-white shadow-lg transition-all"
      style={isSideBarVisible ? sideBarStyle["visible"] : sideBarStyle["none"]}
    >
      <img
        src={CLOSEICON}
        className="h-[25px] w-[25px] bg-blue-900 p-2 cursor-pointer"
        onClick={() => setIsSideBarVisible(false)}
      ></img>
      {localRoutineItems !== null ? (
        [...localRoutineItems].map((routine,index) => <Routine routine={routine} key={index}/>)
      ) : (
        <div className="h-full w-full flex items-center justify-center">
        <p>No routines found</p>
          </div>
      )}
    </div>
  );
}
