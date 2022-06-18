import * as React from 'react'
import { JoinHeader, JoinMain, JoinContainer, Button, Select, Form } from './styles'

interface IHomeProps {
  onTextChange: (React.ChangeEventHandler<HTMLInputElement>);
  onDropdownChange: (React.ChangeEventHandler<HTMLSelectElement>);
  onSubmit: (React.FormEventHandler);
  userName: string;
  roomName: string;
}

export function Home(props: IHomeProps) {
  const { onDropdownChange, onSubmit, onTextChange, userName, roomName } = props
  return (
    <JoinContainer>
      <JoinHeader>
        <h1><i className="fas fa-smile"></i> ChatCord</h1>
      </JoinHeader>
      <JoinMain>
        <Form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={userName}
              placeholder="Enter username..."
              required
              onChange={onTextChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="room">Room</label>
            <Select name="room" id="room" onChange={onDropdownChange} value={roomName}>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="Ruby">Ruby</option>
              <option value="Java">Java</option>
            </Select>
          </div>
          <Button type="submit" className="btn">Join Chat</Button>
        </Form>
      </JoinMain>
    </JoinContainer>
  )
}
