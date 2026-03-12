import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import List from './pages/List/List'

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/list' element={<List />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
