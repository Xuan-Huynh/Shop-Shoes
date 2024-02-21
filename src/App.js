import './App.css';
import {publicRoutes} from '../src/routes/index'
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom'
import {CartProvider } from '../src/Components/CarContext/CarContext'

function App() {

  return (
    <Router>
    <div className='App'>
      <CartProvider >
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.compontent
          return <Route key={index} path={route.path} element={<Page/>}/>
        })}
      </Routes>
      </CartProvider>
    </div>
    </Router>
    )    
}

export default App;
