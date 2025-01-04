import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router'
import { Header, Footer, Home, About, Contact } from './components/index.js';
import Layout from './Layout.jsx';
import User from './components/User/User.jsx';
import NotFound from './components/404/404.jsx';



// const router = createBrowserRouter(
//   [
//     {
//       path : '/',
//       element : <Layout />,
//       children : [
//         {
//           path:"",
//           element : <Home />
//         },
//         {
//           path : "about",
//           element : <About />
//         },
//         {
//           path : "contact",
//           element : <Contact />
//         }
//       ]
//     }
//   ]
// )


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="user/:someValueInUrl" element={<User/>} />
      <Route path="*" element={<NotFound />} /> {/* 404 Route */}

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
