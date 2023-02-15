import "./App.css";
import { Link, Outlet, } from "react-router-dom";
import SIDEICON from "./assets/icons/sidebar.png";
import { useState } from "react";
import SideBar from "./components/SideBar/SideBar";

function App() {
  let [isSideBarVisible, setIsSideBarVisible] = useState(false);


  return (
    <div className="h-full w-full flex items-stretch justify-items-stretch flex-col">
      <div className="p-4 h-50px w-full flex items-center justify-between">
        <Link to="/"><p className="text-lg font-bold">DailyMind</p></Link>
        <img
          src={SIDEICON}
          className="h-[30px] w-[30px] cursor-pointer"
          onClick={() => setIsSideBarVisible(true)}
        ></img>
      </div>
      <Outlet/>
      <SideBar
        isSideBarVisible={isSideBarVisible}
        setIsSideBarVisible={setIsSideBarVisible}
      />
    </div>
  );
}

export default App;
