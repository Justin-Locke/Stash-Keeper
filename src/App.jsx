import { Route, Routes } from 'react-router-dom'
import './App.css'
import { UserViews } from './views/UserViews'

function App() {

  return (
    <Routes>
      <Route path='*' element={<UserViews />} />
    

    </Routes>

  )
}

export default App
