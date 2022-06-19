import * as React from 'react'
import { io, Socket } from 'socket.io-client'
import { ChatContainer, ChatHeader, ChatMain, FormContainer } from './styles'
import { Button } from '../home/styles'
import { Messages } from './Messages'
import { SideBar } from './SideBar'
import { IMessage } from '../types'
import { useNavigate } from 'react-router-dom'

interface IChatProps {
  userName: string;
  roomName: string;
}

export function Chat(props: IChatProps) {
  const { userName, roomName } = props
  const navigate = useNavigate()
  const [socket, setSocket] = React.useState({} as Socket<any>)
  const [messages, setMessages] = React.useState<IMessage[]>([])
  const [roomAndUsers, setRoomAndUsers] = React.useState({ room: '', users: [] })
  const [text, setText] = React.useState<string>('')

  React.useEffect(() => {
    const newSocket = io('/', { transports: ['websockets', 'polling', 'flashsocket'] })
    setSocket(newSocket)
  }, [])

  React.useEffect(() => {
    if (socket.emit) {
      socket.emit('joinRoom', { username: userName, room: roomName })
      const messageListener = (message: IMessage) => {
        setMessages((prevMessages) => {
          const newMessages = [...prevMessages]
          newMessages.push(message)
          return newMessages
        })
      }
      socket.on('message', messageListener)
      socket.on('roomUsers', setRoomAndUsers)
      socket.emit('getMessages')
    }
  }, [roomName, socket, userName])

  const onType = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const message = e.target.value
    setText(message)
  }, [])

  const onSend = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    socket.emit('chatMessage', text)
    setText('')
  }, [socket, text])

  const onLeaveRoom = React.useCallback(() => {
    socket.close()
    navigate('/')
  }, [navigate, socket])

  return (
    <ChatContainer>
      <ChatHeader>
        <h1><i className="fas fa-solid fa-comments"></i> ChatCord</h1>
        <Button onClick={onLeaveRoom}>Leave Room</Button>
      </ChatHeader>
      <ChatMain>
        <SideBar roomAndUsers={roomAndUsers} />
        <Messages messages={messages} />
      </ChatMain>
      <FormContainer>
        <form id="chat-form" onSubmit={onSend}>
          <input
            id="msg"
            type="text"
            value={text}
            placeholder="Enter Message"
            required
            autoComplete="off"
            onChange={onType}
          />
          <Button type="submit"><i className="fas fa-paper-plane"></i> Send</Button>
        </form>
      </FormContainer>
    </ChatContainer>
  )
}
