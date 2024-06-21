import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import RootLayout from './components/WadInternal/RootLayout'
import Home from "./components/WadInternal/Home";
import SignIn from "./components/WadInternal/SignIn";
import SignUp from "./components/WadInternal/SignUp";
import Product from "./components/WadInternal/Product";

function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'signin',
          element:<SignIn/>
        },
        {
          path:'signup',
          element:<SignUp/>
        },
        {
          path:'product/:title',
          element:<Product/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;