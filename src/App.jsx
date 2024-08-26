import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'
import Aboutus from './Pages/Aboutus'
import Contact from './Pages/Contact'
import Blogpostpage from './Pages/Blogpostpage'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog/:id' element = {<Blogpostpage />} />
        </Routes>
      </Router>
        
    </>
  )
}

export default App
