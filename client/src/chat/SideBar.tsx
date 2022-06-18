import * as React from 'react'
import { ChatSideBar } from './styles'

interface IUser {
  id: string;
  room: string;
  username: string;
}

interface ISideBarProps {
  roomAndUsers: {
    room: string;
    users: IUser[]
  }
}

export function SideBar(props: ISideBarProps) {
  const { room, users } = props.roomAndUsers
  return (
    <ChatSideBar>
      <h3><i className="fas fa-comments"></i> Room Name:</h3>
      <h2 id="room-name">{room}</h2>
      <h3><i className="fas fa-users"></i> Users</h3>
      <ul id="users">
        {users.map((user: IUser) => <li key={user.id}>{user.username}</li>)}
      </ul>
    </ChatSideBar>
  )
}
