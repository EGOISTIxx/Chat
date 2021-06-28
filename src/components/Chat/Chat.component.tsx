import React from 'react'

import { MessagesForm } from './MessagesForm/MessagesForm'
import { MessagesList } from './MessagesList/MessagesBlock'

import '../../common/styles/chat.css'



export const Chat: React.FC = () => {
  return (
    <div className={'chat'}>
      <MessagesList />
      <MessagesForm />
    </div>
  )
}