import Footer from "./Components/Footer"
import Header from "./Components/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import ColorModeSwitcher from './ColorModeSwitcher';


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/Footer" element={<Footer />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
