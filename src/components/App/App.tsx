import React, { Suspense } from 'react'

import '../../common/styles/main.css'

const ChatPage = React.lazy(() =>
  import('../../pages/Chat.page').then((module) => ({
    default: module.ChatPage,
  }))
)



const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='App'>
        <ChatPage />
      </div>
    </Suspense>
  )
}

export default App
