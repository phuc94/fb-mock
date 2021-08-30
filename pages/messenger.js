import Nav from '../components/Navbar';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import Image from 'next/image';
import { getBasicUserData, getSuggestFriend, AcceptFriend, friendRequest } from '../services/user';
import { FriendTabLoading } from '../components/Loading/friendTab'
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import SendIcon from '@material-ui/icons/Send';

const MessengerPage = () => {
    const basicUserData = useSelector(state=>state.userData);
    useEffect(()=>{
        
    },[])
    return(
        <div className="bg-gray-900 h-screen flex flex-col">
            {basicUserData &&
            <>
                <div className="fixed top-0 left-0 w-full">
                    <Nav basicUserData={basicUserData}/>
                </div>
                <div className="flex flex-grow pt-[55px] h-full">
                    <LeftSidebar>
                        <ConverseTab isShowing={true}/>
                        <ConverseTab />
                        <ConverseTab />
                        <ConverseTab />
                        <ConverseTab />
                        <ConverseTab />
                        <ConverseTab />
                        <ConverseTab />
                        <ConverseTab />
                        <ConverseTab />
                        <ConverseTab />
                        <ConverseTab />
                        <ConverseTab />
                        <ConverseTab />
                        <ConverseTab />
                    </LeftSidebar>
                    <div className="w-full h-full">
                        <ChatContent />
                    </div>
                </div>
            </>
            }
        </div>
    )
};
export default MessengerPage;



const LeftSidebar = (props) => {
    /**
     * @props Conversations?
     */
    return(
        <div className="flex flex-col h-full">
            <div className="text-white hidden xl:block bg-gray-900 flex flex-col flex-grow
            overflow-hidden w-[360px] border-r-[1px] border-gray-700 h-full" >
                <div className="p-3 max-h-full overflow-y-auto">
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-medium">Chat</p>
                        <div className="flex gap-3">
                            <div className="flex items-center justify-center w-[37px] h-[37px] bg-gray-700
                            hover:bg-gray-600 cursor-pointer rounded-full text-xl">
                                <MoreHorizRoundedIcon fontSize="inherit" />
                            </div>
                            <div className="flex items-center justify-center w-[37px] h-[37px] bg-gray-700
                            hover:bg-gray-600 cursor-pointer rounded-full text-xl">
                                <VideoCallRoundedIcon fontSize="inherit" />
                            </div>
                            <div className="flex items-center justify-center w-[37px] h-[37px] bg-gray-700
                            hover:bg-gray-600 cursor-pointer rounded-full text-xl">
                                <BorderColorRoundedIcon fontSize="inherit" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-full bg-gray-700 my-3">
                        Search
                    </div>
                    <div className="">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
};

const ConverseTab = (props) => {
    /**
     * @props isShowing
     */
    return(
        <div className={`flex items-center gap-5 p-3  rounded-xl cursor-pointer hover:bg-gray-700 hover:bg-opacity-50
            ${props.isShowing == true ? "bg-blue-500 bg-opacity-20" : ""} `}>
            <div className="w-[56px] h-[56px] overflow-hidden rounded-full">
                <img src="https://via.placeholder.com/150" />
            </div>
            <div>
                <p>sdafasdf</p>
                <p>fasfasdfs</p>
            </div>
        </div>
    )
};

const ChatContent = () => {
    /**
     * @props basicUserData
     */
    return (
        <div className="p-2 text-gray-300 max-h-full flex flex-col">
            <div className="flex justify-between items-center w-full px-5 py-3
                border-b-[1px] border-gray-800">
                <div className="flex items-center gap-3">
                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                        <img src="https://via.placeholder.com/150"/>
                    </div>
                    <p>
                        Some one
                    </p>
                </div>
                <div className="flex items-center text-2xl gap-5">
                    <div className="text-blue-500 flex items-center">
                        <CallRoundedIcon fontSize="inherit" />
                    </div>
                    <div className="text-blue-500 flex items-center">
                        <VideocamRoundedIcon fontSize="inherit" />
                    </div>
                    <div className="text-blue-500 flex items-center">
                        <InfoRoundedIcon fontSize="inherit" />
                    </div>
                </div>
            </div>
            <div className="w-full overflow-y-auto ">
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
                <p>Chat content</p>
            </div>
            <div className="pt-3 px-3 flex gap-3 border-t-[1px] border-gray-800">
                {/* commentSection */}
                <input className="bg-gray-700 rounded-2xl outline-none px-5 py-2 w-full"/> 
                <div className="text-blue-500 text-2xl">
                    <SendIcon fontSize="inherit" />
                </div>
            </div>
        </div>
    )
};