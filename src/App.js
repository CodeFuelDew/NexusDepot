import Checkout from './Checkout';
import Home from './Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/checkout" element={<Checkout/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App;