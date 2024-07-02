import React from 'react'
// import Sidebar from './Sidebar'
// import MessageContainer from './MessageContainer'
import MessageContainer from '../../component/messages/MessageContainer'
import Sidebar from '../../component/sidebar/sidebar'
import Messages from '../../component/messages/Messages';
import MessageInput from '../../component/messages/MessageInput';

const Home = () => {
  return (
    <div className='flex sm:h-[450] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    <Sidebar/>

    <MessageContainer/>
    {/* <MessageInput/> */}

    {/* <Messages/> */}

    </div>
  );
};

export default Home