import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { InstagromApp } from './07-useOptimistic/InstagromApp'
import { Toaster } from 'sonner'
// import { ClientInforation } from './08-use-suspense/ClientInforation'
// import { getUserAction } from './08-use-suspense/api/get-user-action'
import { ProfesionalApp } from './09-useContext/ProfesionalApp'
// import { MemoCounter } from './06-memos/memoCounter'
// import { MemoHook } from './06-memos/MemoHook'
// import { ScrambleWords } from './05-useReducer/reducer/ScrambleWords'
//import { TrafficLightWithHook } from './02-useEffect/TrafficLigthWithHooks'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { TasksApp } from './05-useReducer/TaskApp'
//import { TrafficLightWithEffect } from './02-useEffect/TrafficLigthWithEffect'
//import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLigth'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
    
    {/* <InstagromApp/> */}
    {/* <MemoCounter/> */}
    {/* <MemoHook/> */}
    {/* <ScrambleWords/> */}
    {/* <TasksApp/> */}
    {/* <FocusScreen/> */}
    {/* <PokemonPage/> */}
    {/* <TrafficLightWithHook/> */}
    {/* <TrafficLightWithEffect/> */}
    {/* <TrafficLight/> */} 
    {/* //<HooksApp/> */}
    {/* <Suspense fallback={
      <div className='bg-gradient flex flex-col'>
        <h1 className='text-2xl'>Cargando...</h1>
      </div>
    }>
      <ClientInforation getUser={getUserAction(1000)}/>
    </Suspense> */}
    <ProfesionalApp/>
  </StrictMode>,
)
