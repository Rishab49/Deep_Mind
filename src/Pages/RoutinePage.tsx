import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import RoutineItem from "../components/RoutineItem/RoutineItem";
import SolidButton from "../components/SolidButton/SolidButton";
import useLocalStorage from "../methods/useLocalStorage";
import useParticularRoutine from "../methods/useParticularRoutine";

const RoutinePage: React.FC = () => {
  const routineItems = useParticularRoutine();
  const navigate = useNavigate();
  const localRoutineItems = useLocalStorage();
  console.log("changed", routineItems);
  function deleteRoutine(name: string | undefined) {
    if (name && localRoutineItems) {
      localRoutineItems?.delete(name);
      let newMap = new Map([...localRoutineItems]);
      let stringifiedMap = JSON.stringify([...newMap]);
      localStorage.setItem("ROUTINE_APP_DATA", stringifiedMap);
      const event = new StorageEvent("storage", {
        key: "ROUTINE_APP_DATA",
        newValue: stringifiedMap,
      });
      window.dispatchEvent(event);
      navigate("/");
    }
  }
  return (
    <>
      <div className="sticky top-0 bg-white h-fit w-full flex items-center justify-between py-2 px-4">
        <p className="text-2xl font-semibold">
          {routineItems ? routineItems.name : null}
        </p>
        <SolidButton onclick={() => deleteRoutine(routineItems?.name)}>
          Delete
        </SolidButton>
      </div>
      <div className="flex-1 w-full flex flex-col items-center justify-start gap-2">
        {routineItems && routineItems?.data.length > 0 ? (
          <>
            {routineItems.data.map((item: string, index: number) => (
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
    </>
  );
};

export default RoutinePage;
