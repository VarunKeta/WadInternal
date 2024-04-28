import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import RootLayout from './components/miniProject/RootLayout'
import Home from "./components/miniProject/Home";
import SignIn from "./components/miniProject/SignIn";
import SignUp from "./components/miniProject/SignUp";
import Product from "./components/miniProject/Product";

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