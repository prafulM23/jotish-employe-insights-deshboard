import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import List from './pages/List/List'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/list' element={
            <ProtectedRoute>
              <List />
            </ProtectedRoute>
          }></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
