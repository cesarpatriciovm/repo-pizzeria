
import './App.css'
import Footer from './assets/components/Footer'
import Navbar from './assets/components/Navbar'
import Cart from './assets/pages/Cart'
// import Login from './assets/pages/Login'
// import Home from './assets/pages/Home'
// import Register from './assets/pages/Register'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex flex-col items-center justify-center flex-1'>
        {/* <Register /> */}
        {/* <Login />         */}
        {/* <Home /> */}
        <Cart />   
      </div>         
      <Footer />
    </div>
  )
}

export default App
