import { useState, useEffect } from 'react';

/***** Material Icon *****/
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';
import Image from 'next/image';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import MinimizeRoundedIcon from '@material-ui/icons/MinimizeRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GifRoundedIcon from '@material-ui/icons/GifRounded';
import SendIcon from '@material-ui/icons/Send';

import { getChatData, chatClose } from '../../redux/actionCreator'
import store from '../../redux/store'
import { useSelector } from 'react-redux'

import { Formik, Field, Form, ErrorMessage  } from 'formik';
import * as yup from 'yup';

import { io } from "socket.io-client";


const AddNewConvers =()=>{
    return (
        <div className="pb-3 pr-3">
            <div className="p-3 bg-gray-700 hover:bg-gray-600 cursor-pointer duration-300 flex items-center justify-center rounded-full text-gray-100">
                <OpenInNewOutlinedIcon />
            </div>
        </div>
    )
}

const Head = (props)=>{
    return(
        <div className="flex w-80 flex justify-between shadow">
            <div className=" cursor-pointer my-1 ml-1 px-3 flex items-center gap-2 text-white hover:bg-gray-700 cursor-poniter duration-100 rounded-lg">
                <div className="min-w-[32px] w-[32px] h-[32px] rounded-full overflow-hidden">
                    <Image width={32} height={32}
                        src={props.basicTargetData.avatar == ''? "https://via.placeholder.com/150" : props.basicTargetData.avatar} />
                </div>
                <div className="flex flex-col">
                    <p className="text-base font-medium">
                        {props.basicTargetData.lastName +' '+ props.basicTargetData.firstName}
                    </p>
                    {/* <p className="text-xs text-gray-400 font-medium">Online</p> */}
                </div>
                <div className="pb-3">
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="pr-3 flex gap-2 text-gray-300 items-center">
                <div className="rounded-full hover:bg-gray-600 cursor-pointer">
                    <VideocamRoundedIcon />
                </div>
                <div className="rounded-full hover:bg-gray-600 cursor-pointer">
                    <PhoneRoundedIcon />
                </div>
                <div className="rounded-full hover:bg-gray-600 cursor-pointer">
                    <MinimizeRoundedIcon />
                </div>
                <div onClick={()=>{
                        store.dispatch(chatClose(props.roomId))
                    }}
                    className="rounded-full hover:bg-gray-600 cursor-pointer">
                    <CloseRoundedIcon />
                </div>
            </div>
        </div>
    )
};

const Body = (props)=> {
    const userId = useSelector(state=>state.userData._id)
    return(
        <div className="h-80 shadow-inner overflow-y-scroll text-gray-100 px-2 flex flex-col gap-[2px]">
            {props.chatContent.map(mess=>{
                switch (mess.userId){
                    case 'broadcast':
                        return(
                            <div className="flex justify-center py-2">
                                <p className="max-w-[80%] break-words text-sm text-gray-400">
                                    {mess.message}
                                </p>
                            </div>
                        )
                    case userId:
                        return (
                            <div className="flex flex-row-reverse">
                                <p className="bg-blue-500 max-w-[70%] break-words rounded-2xl px-[13px] py-1">
                                    {mess.message}
                                </p>
                                <div></div>
                            </div>
                        )
                    default:
                        return(
                            <div className="flex">
                                <p className="bg-gray-500 max-w-[70%] break-words rounded-2xl px-[13px] py-1">
                                    {mess.message}
                                </p>
                                <div className="w-[10px]"></div>
                            </div>
                        )
                }
            })}
        </div>
    )
};
const Footer = ()=> {
    return (
        <div className="flex pb-2 pt-1 shadow  items-center">
            <div className="flex items-center gap-2 px-2 text-gray-500 flex-grow-0">
                <div className="rounded-full hover:bg-gray-600 hover:bg-opacity-50 cursor-pointer text-xl">
                    <AddCircleIcon fontSize="inherit"/>
                </div>
                
            </div>
            <div className="flex items-center flex-grow-1 w-full">
                <Form className="flex items-center w-full">
                    <Field type="text" name="message" autoComplete="off" 
                    className="outline-none w-full px-3 py-2 mr-2 rounded-full bg-gray-500 text-gray-100 w-full" placeholder="Aa"/>
                </Form>
            </div>
            <div className="text-blue-500">
                <SendIcon />
            </div>
        </div>
    )
}
const Converse = (props)=>{
    /**
     * @prop chatContent, basicTargetData, roomId
     */
    return (
        <div className="shadow-2xl bg-gray-800 rounded-t-lg border-[1px] border-gray-700 max-w-[320px]">
            <Head basicTargetData={props.basicTargetData} roomId={props.roomId}/>
            <Body chatContent={props.chatContent}/>
            <Footer />
        </div>
    )
}

const socket= io();
const Messenger = (props)=>{
    /**
     * @props roomId, basicTargetData
     */
    const [chatContent,setChatContent] = useState([]);
    const userId = useSelector(state => state.userData._id)
    useEffect(()=>{
        socket.emit('joinRoom',{roomId:props.roomId});
        socket.on('init', message=>{
            if(message.roomId !== props.roomId){
                return
            }
            console.log(message)
            // let mess=[];
            // for (let i of message.message){
            //     mess.push(i.message);
            // }
            setChatContent(message.message);
        });
        socket.on('message', message=>{
            if(message.roomId == props.roomId){
                setChatContent(prev => [...prev,message]);
            }
        });
        return ()=>{
            socket.off();
        }
    },[])
    return(   
        <Formik
            initialValues ={{
                message:'',
            }}
            validationSchema={yup.object({
                message:yup.string().required('Email is required'),
            })}
            onSubmit={(data, actions) => {
                data.userId=userId;
                data.roomId=props.roomId;
                socket.emit('chatMessage',data);
                actions.resetForm();
            }}
            >
            <Converse chatContent={chatContent} basicTargetData={props.basicTargetData}
                roomId={props.roomId}/>
        </Formik>
    )
};

const MessengenWrapper = () => {
    const messenger = useSelector(state => state.messenger)
    return (
        <>  
            <div className="fixed z-10 bottom-0 right-6 bg-opacity-0">
                <AddNewConvers />
            </div>
            <div className="fixed z-10 bottom-0 right-28 bg-opacity-0 overflow-hidden flex flex-row-reverse gap-3">
                {messenger.map(mess=>{
                    if(mess.isShow){
                        return(
                            <Messenger roomId={mess.roomId} basicTargetData={mess.basicTargetData} 
                                key={mess.roomId}/>
                        )
                    }
                })}
            </div>
        </>
    )
}
export default MessengenWrapper;