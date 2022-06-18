/* eslint-disable react/react-in-jsx-scope */
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Chat } from './chat'
import { Home } from './home'

function App() {
  const [userName, setUserName] = useState<string>('')
  const [roomName, setRoomName] = useState<string>('Javascript')
  const navigate = useNavigate()

  const onTextChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }, [])

  const onDropdownChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setRoomName(e.target.value)
  }, [])

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/chat')
  }, [navigate])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home onTextChange={onTextChange} onDropdownChange={onDropdownChange} onSubmit={onSubmit} userName={userName} roomName={roomName} />} />
        <Route path='/chat' element={<Chat userName={userName} roomName={roomName} />} />
      </Routes>
    </div>
  )
}

export default App
