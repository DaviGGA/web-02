import { Signin } from './pages/Signin'
import { Footer } from './components/Footer'
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

]

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/faq' element={<FAQ/>} /> 
          <Route path='/signin' element={<Signin/>} />  
        </Routes>
      </Router>
    </>
  )
}

export default App
