import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import About from './About'
import HeadAndTail from './Tail'
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <div>

      <h1 className=' flex justify-center my-6 font-extrabold text-4xl'>HEAD AND TAIL</h1>
     <h1 className='text-center font-semibold text-3xl'>Lets Play</h1>
      <div className='flex justify-evenly my-8'>
      <Link to="/about" className='border-2 rounded-md px-4 py-2 border-sky-500 text-xl font-medium'>About</Link>
      <Link to="/tail" className='border-2 rounded-md px-4 py-2 border-sky-500 text-xl font-medium'>Play Here</Link>
      </div>
    </div>
  )
}
const appRouter = createBrowserRouter([
  { path:"/",
  element:<Header/>,
},
{
  path:"/about",
  element:<About/>,
},
{
  path:"/tail",
  element:<HeadAndTail/>,
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
