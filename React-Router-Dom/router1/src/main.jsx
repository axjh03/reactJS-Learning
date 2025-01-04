import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Header from './pages/Header'
import Footer from './pages/Footer'
import { createRoutesFromElements, Route } from 'react-router'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<App/>}>
      <Route path="" element={<Home />}/>
      <Route path="blog" element={<Blog />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="*" element={<NoPage />}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
