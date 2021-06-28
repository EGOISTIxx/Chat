import React, { useContext, useState } from 'react'
import { Button, Input } from 'antd'
import firebase from 'firebase'

import { Context } from '../../../common/context/context'

const { TextArea } = Input

/**
 * Return random number
 * @param {number} min lower limit
 * @param {number} max upper limit
 */
const getRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

export const MessagesForm: React.FC = () => {
  const { store } = useContext(Context)
  const [message, setMessage] = useState<string>('')

  const sendMessageHandler = async () => {
    store.collection('userMessages').add({
      id: `user#${getRandom(1, 100000000)}`,
      text: message,
      createdAt:
        firebase.firestore.FieldValue.serverTimestamp(),
    })
    setMessage('')
  }

  return (
    <div>
      <TextArea
        autoSize={{ minRows: 4, maxRows: 4 }}
        style={{width:'100%'}}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type={'primary'} onClick={sendMessageHandler} disabled={message === ''}>
        Отправить
      </Button>
    </div>
  )
}
