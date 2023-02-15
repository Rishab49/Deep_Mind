import { useNavigate } from "react-router-dom";



export default function Routine({
  routine,
}: {
  routine: [
    string,
    {
      data: string[];
      date: string;
    },
  ],
}) {
  const navigate = useNavigate();

  return (



      <div
        className="w-full h-fit flex flex-col items-stretch justify-center shadow-sm p-2 cursor-pointer hover:shadow-lg transition-all"
        onClick={() => navigate(`../routine/${routine[0]}`)}
      >
        <p className="text-lg font-medium">{routine[0]}</p>
        <div className="flex items-center justify-between text-sm">
          <p>{routine[1].data.length} Tasks</p>
          <p>{routine[1].date}</p>
        </div>
      </div>
  
  );
}
