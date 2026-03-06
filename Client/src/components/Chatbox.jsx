import React from 'react'
import { ChatHeader, MessageContainer, MessageSend } from "./index.js"
import { useSelector } from 'react-redux';

const Chatbox = () => {

  const currentChatUser = useSelector((state) => state.chat.currChatUser);
  const currentChatChannel = useSelector((state) => state.chat.currChatChannel);
  const section = useSelector((state) => state.section.section);

  if (section === 'contact') {
    return (currentChatUser) ? <><div className='text-white font-raleway relative
  '>
      <ChatHeader />
      <MessageContainer />
      <MessageSend />
    </div></> : <div className='bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 w-full h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold text-white mb-4'>Welcome to Chattify</h1>
          <p className='text-xl text-gray-100'>Select a contact to start chatting</p>
        </div>
    </div>
  }

  return (currentChatChannel) ? <><div className='text-white font-raleway relative
  '>
    <ChatHeader />
    <MessageContainer />
    <MessageSend />
  </div></> : <div className='bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 w-full h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold text-white mb-4'>Welcome to Chattify</h1>
          <p className='text-xl text-gray-100'>Select a channel to start chatting</p>
        </div>
    </div>

  // return (
  //   <div className='text-white font-raleway relative
  //   '>
  //     <ChatHeader />
  //     <MessageContainer />
  //     <MessageSend />
  //   </div>
  // )
}

export default Chatbox
