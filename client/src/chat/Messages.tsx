import * as React from 'react'
import { IMessage } from '../types'
import { ChatMessages, Message, Meta } from './styles'

interface IMessagesProps {
  messages: IMessage[];
}

export function Messages(props: IMessagesProps) {
  const { messages } = props
  const messagesRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    messagesRef && messagesRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <ChatMessages>
      {
        messages.map((message, i) => {
          return (
            <Message key={i}>
              <Meta>{message.username} <span>{message.time}</span></Meta>
              <p className="text">{message.text}</p>
            </Message>
          )
        })
      }
      <div ref={messagesRef} />
    </ChatMessages >
  )
}
