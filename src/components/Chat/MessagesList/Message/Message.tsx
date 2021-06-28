import React from 'react'
import { Avatar } from 'antd'

import 'antd/dist/antd.css'

import '../../../../common/styles/message.css'

type PropsType = {
  text: string
  key: number
}


/**
 * Get values and display message
 * @param {string} text message text
 * @param {number} key idintity key
 */
export const Message: React.FC<PropsType> = React.memo(({ text, key }) => {  
  return (
    <>
      <div key={key} className={'message'}>
        <Avatar
          size={30}
          style={{
            color: '#000000',
            background: '#f6b93b',
          }}>
          U
        </Avatar>
        <div className={'message__text'}>
          <span>{text}</span>
        </div>
      </div>
      <hr />
    </>
  )
})
