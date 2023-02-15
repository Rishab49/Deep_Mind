interface SolidButtonProps{
    children:string,
    onclick:() => void
}

export default function SolidButton({onclick,children}:SolidButtonProps){
    return <button className="h-full w-fit py-[0.75rem] px-[2rem] bg-blue-900 text-white cursor-pointer" type="button" onClick={onclick}>{children}</button>
}