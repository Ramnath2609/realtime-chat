import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import { Chat } from './chat';
import { Home } from './home';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
