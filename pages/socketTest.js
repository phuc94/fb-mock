import { io } from "socket.io-client";
import { useState, useEffect } from 'react';

const socket= io();
const Test1 = ()=>{
    const [chatContent,setChatContent] = useState(['test']);
    const [chatbox,setChatbox] = useState('');

    useEffect(()=>{
        socket.emit('joinRoom',{username:'admin',room:'testRoom'});
        socket.on('message', message=>{
            console.log(chatContent);
            setChatContent(prev =>[...prev,message.message]);
        }); 
        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }
    },[])

    


    const onChat = ()=>{
        console.log("🚀 ~ file: socketTest.js ~ line 9 ~ Test1 ~ chatbox", chatbox)
        socket.emit('chatMessage',{message:chatbox})
    }

    return(
        <div className="w-full flex-col items-center">
            <div className="flex justify-center">
                <div>
                    <input className="border-black border-2"
                        onChange={(e)=>{setChatbox(e.target.value)}}/>
                    <button onClick={onChat}>Chat</button>
                </div>
                
            </div>
            <div className="bg-blue-500 text-center">
                {chatContent.map(mess=>(
                        <div>{mess}</div>
                    ))}
            </div>
        </div>
    )
};
export default Test1;