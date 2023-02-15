import { useEffect, useState } from "react";

type RoutineItems = Map<string, { data: string[]; date: string }>;

export default function useLocalStorage(): RoutineItems | null {
  let [routineItems, setRoutineItems] = useState<RoutineItems | null>(null);

  function calculateRoutineItems() {
    try {
      let data: string | null = localStorage.getItem("ROUTINE_APP_DATA");
      if (data) {
        let parsedData = JSON.parse(data);
        setRoutineItems(new Map([...parsedData]));
      } else {
        setRoutineItems(null);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    calculateRoutineItems();
    window.addEventListener("storage", calculateRoutineItems);

    return () => window.removeEventListener("storage", calculateRoutineItems);
  }, []);

  return routineItems;
}
