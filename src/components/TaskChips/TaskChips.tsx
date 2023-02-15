import CLOSEICON from "../../assets/icons/close.png";


interface TaskProps{
    task:String,
    onClose:() => void
}
export default function TaskChips({task,onClose}:TaskProps){

    return <div className="flex h-[35px] w-fit bg-blue-900 text-white p-2 rounded-md cursor-pointer gap-1 items-center" onClick={onClose}><p>{task} </p><img src={CLOSEICON} className="h-[60%] w-auto aspect-square"></img></div>

}