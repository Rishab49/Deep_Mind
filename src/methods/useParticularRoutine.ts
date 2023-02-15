import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
export default function useParticularRoutine():
  | {
      name: string;
      data: string[];
      date: string;
    }
  | undefined {
  const [routineItems, setRoutineItems] = useState<
    | {
        name: string;
        data: string[];
        date: string;
      }
    | undefined
  >(undefined);
  const { routineName } = useParams();
  const allRoutineItems= useLocalStorage();
  const navigate = useNavigate();
  useEffect(() => {
    if (routineName && allRoutineItems) {
      let data = allRoutineItems?.get(routineName);
      if (data) {
        setRoutineItems({ name: routineName, ...data });
      }
      else{
       navigate("/not-found");
      }
    }
  }, [allRoutineItems,routineName]);

  return routineItems;
}
