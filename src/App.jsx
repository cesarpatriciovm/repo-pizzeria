
import './App.css'
import Footer from './assets/components/Footer'
import Navbar from './assets/components/Navbar'
// import Login from './assets/pages/Login'
// import Home from './assets/pages/Home'
import Register from './assets/pages/Register'

function App() {

  return (
    <>
      <Navbar />
      <div className='my-20'>
        <Register />
        {/* <Login /> */}
      </div>
      {/* <Home /> */}
      <Footer />
    </>
  )
}

export default App
