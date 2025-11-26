import {  useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubtitle"

const handleMyApiCall = (myValue: string) => {
  console.log('llamara mi API ' + myValue)
}

export const MemoHook = () => {
    const [title, setTitle] = useState('hola')
    const [subtitle, setSubtitle] = useState('mundo')
    // const handleMyAPICall = useCallback (() => {
    //   console.log('LLamar a la API', subtitle)
    // },[subtitle])
  return (
   <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">Memo App</h1> 
        <MyTitle title={title}/>
        <MySubTitle subtitle={subtitle} 
        callMyAPI={handleMyApiCall}/> 

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle('hello ' + new Date().getTime())}
        >Cambiar titulo</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={( ) => setSubtitle('world ')}
        >Cambiar subtitulo</button>
   </div>
  )
}
 