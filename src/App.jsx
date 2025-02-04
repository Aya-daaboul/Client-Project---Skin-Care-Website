import { BrowserRouter,Routes,Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'


export default function App() {

  return (
  
    <BrowserRouter>
    <Routes>

          <Route index element={<MainPage/>}/>
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

    </Routes>
    </BrowserRouter>
      
    
  )
}

