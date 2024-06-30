

import Layout from "./routes/Layout/Layout";
import {
  createBrowserRouter,
  RouterProvider,
         
} from "react-router-dom"
import ListPage from "./routes/ListPage/ListPage";
import HomePage from "./routes/HomePage/HomePage";
import SinglePage from "./routes/SinglePage/SinglePage";
import ProfilePage from "./routes/ProfilePage/Profile" ;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        },
        {
          path: "/profile",
          element: <ProfilePage/>
        },
      ]
      
    },
    
  ]);

 
  return (
  
  <RouterProvider router={router}/>
  )
}

export default App
