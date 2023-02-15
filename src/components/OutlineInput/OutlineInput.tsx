interface OutlineInputProps{
    placeholder:any,
    value:any,
    onchange:(e:any) => void,
    onkeydown?:(e:any) => void
}

export default function OutlineInput({placeholder,value,onchange,onkeydown}:OutlineInputProps){

    return <input className="w-full p-[0.75rem] h-full outline-none" type="text" value={value} placeholder={placeholder} onChange={onchange} onKeyDown={onkeydown}></input>

}