import Nav from '../components/Navbar';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { getBasicUserData, getSuggestFriend, AcceptFriend, friendRequest } from '../services/user';
import { getChatData } from '../services/chat';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import SendIcon from '@material-ui/icons/Send';
import produce from "immer";

const MessengerPage = () => {
    const basicUserData = useSelector(state=>state.userData);
    const [friends,setFriends] = useState([]);
    const [currentChat,setCurrentChat] = useState(null);
    const [chatData,setChatData] = useState([]);
    const [targetData,setTargetData] = useState(null);
    useEffect(()=>{
        if(basicUserData){
            let friendsData = basicUserData.friends;
            for (let friend of friendsData){
                if(friendsData.indexOf(friend)==0){
                    friend.isSelected = true;
                }else {friend.isSelected = false;}
            }
            setFriends(friendsData);
            setCurrentChat(basicUserData.friends[0]);
        }
    },[basicUserData])
    useEffect(()=>{
        if (currentChat){
            getChatData(currentChat.chatRoom,currentChat.userId)
            .then(data=>{
                setChatData(data.data.roomData);
                setTargetData(data.data.basicTargetData)
            })
        }
        
    },[currentChat])
    const handleConverseClick = (friend)=> {
        setCurrentChat(friend);
        setFriends(prev=>produce(prev,draft=>{
            for (let i of draft){
                i.isSelected=false;
            }
            const friendIndex = friends.findIndex(friends=>friends.userId==friend.userId);
            draft[friendIndex].isSelected = true;
        }))
    }
    return(
        <div className="bg-gray-900 h-screen flex flex-col">
            {basicUserData &&
            <>
                <div className="fixed top-0 left-0 w-full">
                    <Nav basicUserData={basicUserData}/>
                </div>
                <div className="flex flex-grow pt-[55px] h-full">
                    <LeftSidebar>
                        {friends.map(friend=>
                            <ConverseTab friend={friend} handleConverseClick={handleConverseClick}/>
                        )}
                    </LeftSidebar>
                    <div className="w-full h-full">
                        { (targetData && chatData && basicUserData) &&
                            <ChatContent chatData={chatData} targetData={targetData} basicUserData={basicUserData}/>
                        }
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
     * @props handleConverseClick
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
     * @props friend
     */
    const [userData,setUserData] = useState();
    useEffect(()=>{
        getBasicUserData(props.friend.userId)
            .then(res=>{
                setUserData(res.data);
            })
    },[])
    return(
        <div onClick={()=>{props.handleConverseClick(props.friend)}}
            className={`flex items-center gap-5 p-3  rounded-xl cursor-pointer hover:bg-gray-700 hover:bg-opacity-50
            ${props.friend.isSelected == true ? "bg-blue-500 bg-opacity-20" : ""} `}>
            {userData &&
            <>
                <div className="w-[56px] h-[56px] overflow-hidden rounded-full">
                    <img src={userData.avatar == '' ? "https://via.placeholder.com/150" : userData.avatar} />
                </div>
                <div>
                    <p>{userData.lastName +' '+ userData.firstName}</p>
                </div>
            </>
            }
        </div>
    )
};

const ChatContent = (props) => {
    /**
     * @props basicUserData, chatData, targetData
     */
    return (
        <div className="p-2 text-gray-300 max-h-full h-full flex flex-col">
            <div className="flex justify-between items-center w-full px-5 py-3
                border-b-[1px] border-gray-800">
                {props.targetData && 
                    <div className="flex items-center gap-3">
                        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                            <img src={props.targetData.avatar == '' ? "https://via.placeholder.com/150" : props.targetData.avatar}/>
                        </div>
                        <p>{props.targetData.lastName +' '+ props.targetData.firstName}</p>
                    </div>
                }
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
            <div className="w-full overflow-y-auto text-gray-100 px-2 flex flex-col gap-[2px] flex-grow">
                {props.chatData.map(message=>{
                    switch (message.userId){
                        case 'broadcast':
                        return(
                            <div className="flex justify-center py-2">
                                <p className="max-w-[80%] break-words text-sm text-gray-400">
                                    {message.message}
                                </p>
                            </div>
                        )
                        case props.basicUserData._id:
                            return(
                                <div className="flex flex-row-reverse">
                                    <div className="bg-blue-500 max-w-[70%] break-words rounded-2xl px-[13px] py-1">
                                        {message.message}
                                    </div>
                                    <div></div>
                                </div>
                            )
                        case props.targetData._id:
                            return(
                                <div className="flex">
                                    <div className="bg-gray-500 max-w-[70%] break-words rounded-2xl px-[13px] py-1">
                                        {message.message}
                                    </div>
                                    <div></div>
                                </div>
                            )
                        default:
                            break;
                    }
                })

                }
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