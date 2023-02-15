interface RoutineItemProps {
  task: string;
}

export default function RoutineItem({ task }: RoutineItemProps) {
  let [routineTime, routineText] = task.split(" - ");
  return (
    <div className="flex items-center h-fit w-[80vw] max-w-[650px] shadow-sm hover:shadow-lg p-2 rounded-sm gap-2 transition-all">
      <p className="flex items-start justify-start w-[8ch] break-keep font-medium">{routineTime}</p>
      <p className="w-[calc(100%_-_8ch)]">{routineText}</p>
    </div>
  );
}
