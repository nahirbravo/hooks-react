import { RouterProvider } from "react-router"
import { AppRouter } from "./router/app.router"
import { UserContextProvider } from "./context/UserContext"



export const ProfesionalApp = () => {
  return (
    <UserContextProvider>

    <div className="bg-gradient ">
     <RouterProvider router={AppRouter}/>
    </div>


    </UserContextProvider>
    
  )
}


   