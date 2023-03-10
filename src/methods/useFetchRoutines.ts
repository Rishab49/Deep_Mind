import { useEffect, useState } from "react";
import { paramsToObject } from "./helper";

let regex = /\d+:\d+\s\w+\s+\-\s+[\w+,+\'+\-+\s+]+\./gm;
export default function useFetchRoutines(): string[] {
  const [routineItems, setRoutineItems] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching data");
    let url = new URLSearchParams(location.search);
    let entries = url.entries();
    let tasks = paramsToObject(entries);

    //@ts-ignore
    console.log(import.meta.env["VITE_API_ENDPOINT"]);
    fetch(import.meta.env["VITE_API_ENDPOINT"],{
      method: "POST",
      body: JSON.stringify(tasks),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      data.json().then((d) => {
        let arr = d[0].text.match(regex);
        setRoutineItems(arr);
      });
    });
  }, []);

  return routineItems;
}
