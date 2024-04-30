import { Signin } from './pages/Signin'
import { Footer } from './components/Footer'
import { CoursePage } from './pages/CoursePage'
import { CreateCourse } from './pages/CreateCourse'
import { FAQ } from './pages/FAQ'
import { Homepage } from './pages/Homepage'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const routes = [
  {
    path:'/',
    element: <Homepage/>
  },
  {
    path:'/faq',
    element: <FAQ/>
  },
  {
    path:'/signin',
    element: <Signin/>
  },
  {
    path:'/course',
    element: <CoursePage/>
  },
  {
    path:'/create-course',
    element: <CreateCourse/>
  }

]

function App() {

  return (
    <>
      <Router>
        <Routes>
          {routes.map( (r, i) => <Route key={i} path={r.path} element={r.element}/>)}
        </Routes>
      </Router>
    </>
  )
}

export default App
