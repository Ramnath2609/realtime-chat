import {
    ChatContainer, ChatHeader, ChatMain,
    SideBar, ChatMessages, Message, Meta, FormContainer
} from './styles'
import { Button } from '../home/styles'

export function Chat() {
    return (
        <ChatContainer>
            <ChatHeader>
                <h1><i className="fas fa-smile"></i> ChatCord</h1>
                <a id="leave-btn" className="btn">Leave Room</a>
            </ChatHeader>
            <ChatMain>
                <SideBar>
                    <h3><i className="fas fa-comments"></i> Room Name:</h3>
                    <h2 id="room-name"></h2>
                    <h3><i className="fas fa-users"></i> Users</h3>
                    <ul id="users"></ul>
                </SideBar>
                <ChatMessages>
                    <Message>
                        <Meta>Brad <span>9:12pm</span></Meta>
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                            repudiandae.
                        </p>
                    </Message>
                </ChatMessages>
            </ChatMain>
            <FormContainer>
                <form id="chat-form">
                    <input
                        id="msg"
                        type="text"
                        placeholder="Enter Message"
                        required
                        autoComplete="off"
                    />
                    <Button><i className="fas fa-paper-plane"></i> Send</Button>
                </form>
            </FormContainer>
        </ChatContainer>
    )
}