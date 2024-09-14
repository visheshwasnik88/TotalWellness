
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkoutSessions from './components/WorkoutSessions'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import BMICalculator from './components/BMICalculator'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    <WorkoutSessions/>
    <Gallery/>
    <Pricing/>
    <Contact/>
    <BMICalculator/>
    <Footer/>
    <ToastContainer theme='dark' position='top-center'/>
    </BrowserRouter>
  )
}

export default App
