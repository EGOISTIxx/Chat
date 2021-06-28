/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useRef, useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { Message } from './Message/Message'
import { Context } from '../../../common/context/context'

import '../../../common/styles/messageBlock.css'
import { useEffect } from 'react'

export const MessagesList: React.FC = () => {
  const { store } = useContext(Context)
  const [messages, loading] = useCollectionData(
    store.collection('userMessages').orderBy('createdAt')
  )

  const messagesAnchorRef = useRef<HTMLDivElement>(null)

  const [autoScroll, setAutoScroll] = useState(true)

  /**
   * Set state for autoScroll value
   * @param {UIEvent} e event
   */
  const scrollHandler = (
    e: React.UIEvent<HTMLDivElement>
  ) => {
    const elem = e.currentTarget
    if (
      Math.abs(
        elem.scrollHeight -
          elem.scrollTop -
          elem.clientHeight
      ) < 200
    ) {
      !autoScroll && setAutoScroll(true)
    } else {
      autoScroll && setAutoScroll(false)
    }
  }

  useEffect(() => {
    if (autoScroll) {
      messagesAnchorRef.current?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [messages])

  if (loading) return <p>Loading...</p>

  return (
    <div
      className={'messageBlock'}
      onScroll={scrollHandler}>
      {messages?.map((message: any, index: number) => {
        return <Message text={message.text} key={index} />
      })}
      <div ref={messagesAnchorRef}></div>
    </div>
  )
}
