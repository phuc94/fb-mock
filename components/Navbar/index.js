import React from "react";
import Image from 'next/image';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OutlinedFlagIcon from '@material-ui/icons/OutlinedFlag';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import { useCookies } from 'react-cookie';
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import AccDropdown from './accDropdown'
import NotiDropdown from './notiDropdown'
import MessengerDropdown from './messengerDropdown'

import axios from 'axios'; 

import { userSearchConvert } from '../../utils/helper';

const Left =()=>{
    const [searchResult,setSearchResult] = useState([]);
    const [isSeach,setIsSeach] = useState(false);
    const [user,setUser]= useState('');
    const router = useRouter();
    const findUser = (e)=>{
        e.preventDefault();
        console.log(user);
        return axios('/SearchUser',{
            method:"post",
            data:{
                user:user
            }
        }).then((res)=>{
            if(res.data.length > 0){
                let users = userSearchConvert(res.data);
                console.log("🚀 ~ file: index.js ~ line 41 ~ findUser ~ users", users);                
                setIsSeach(true);
                setSearchResult(users);
            }
        });
    };
    return (
        <div className="py-2 flex items-center ">
            <Image 
                onClick={()=>{router.push('/');}}
                className="cursor-pointer"
                width={40} height={40} 
                src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png'/>
            <div className="ml-3 h-10 bg-gray-500 rounded-full items-center flex pl-2 bg-gray-500 relative">
                <div className='text-gray-300'>
                    <SearchIcon />
                </div>
                <form onSubmit={findUser}>
                    <input onChange={e=>{setUser(e.target.value)}}
                        className="px-3 rounded-full h-full outline-none bg-gray-500 text-white" placeholder="Search in Facebook"/>
                </form>
                
                <div className={` bg-gray-800 top-[45px] left-[0px] p-2 ${ isSeach ? 'absolute': 'hidden' }
                    rounded border-[1px] border-gray-700 text-gray-100`}>
                    <div className="flex justify-between">
                        <div>
                            <p className="ml-2">Search result</p>
                        </div>
                        <div onClick={()=>{setIsSeach(false);setSearchResult([])}}
                            className="flex items-center justify-center p-1 hover:bg-gray-600 cursor-pointer rounded-full">
                            <CloseRoundedIcon />
                        </div>
                    </div>
                    {searchResult.map(item=>(
                    <div onClick={()=>{router.push(`/${item.id}`);setSearchResult([]);setIsSeach(false)}} key={item.id}
                        className=" hover:bg-gray-600 p-1 pl-2 min-w-[250px] rounded-lg flex items-center cursor-pointer gap-2">
                        <div className="mr-3 cursor-pointer w-[40px] flex-shrink-0">
                            <Image width='40' height='40' className="rounded-full" src="https://via.placeholder.com/150" />
                        </div>
                        <p className="cursor-pointer font-medium">{item.email}</p>
                    </div>
                    ))
                    }
                </div>
                
            </div>
        </div>
    )
};

const Mid =()=>{
    return (
        <div className="text-white flex gap-3 items-center">
            <div className="text-3xl py-1 px-10 cursor-pointer border-b-4 text-blue-500 border-blue-500">
                <HomeIcon fontSize="inherit"/>
            </div>
            <div className="text-3xl py-1 px-10 hover:bg-gray-600 duration-500 cursor-pointer rounded">
                <OutlinedFlagIcon fontSize="inherit" />
            </div>
            <div className="text-3xl py-1 px-10 hover:bg-gray-600 duration-500 cursor-pointer rounded">
                <OndemandVideoOutlinedIcon fontSize="inherit" />
            </div>
            <div className="text-3xl py-1 px-10 hover:bg-gray-600 duration-500 cursor-pointer rounded">
                <StorefrontOutlinedIcon fontSize="inherit" />
            </div>
            <div className="text-3xl py-1 px-10 hover:bg-gray-600 duration-500 cursor-pointer rounded">
                <GroupRoundedIcon fontSize="inherit" />
            </div>
        </div>
    )
};
const Right =(props)=>{
    const [accDropdown,setAccDropdown] = useState(false);
    const [notiDropdown,setNotiDropdown] = useState(false);
    const [messDropdown,setMessDropdown] = useState(false);
    const router = useRouter();
    const handleDropdown =(value)=>{
        switch (value){
            case 'accDropdown':
                setMessDropdown(false);
                setNotiDropdown(false);
                setAccDropdown(!accDropdown);
                break;
            case 'notiDropdown':
                setMessDropdown(false);
                setAccDropdown(false);
                setNotiDropdown(!notiDropdown);
                break;
            case 'messDropdown':
                setAccDropdown(false);
                setNotiDropdown(false);
                setMessDropdown(!messDropdown);
                break;
            default:
                break;
        }
    }
    return(
        <div className="pt-2">
            <div className="flex items-center gap-3">
                <div onClick={()=>{router.push(`/${props.cookies.user}`)}}
                    className="px-3 py-1 flex items-center gap-2 text-white cursor-pointer hover:bg-gray-600 rounded-full">
                    <Image className="rounded-full" width={35} height={35} src="https://via.placeholder.com/150" />
                    <span>Nguyen</span>
                </div>
                <div className="flex gap-2 text-white">
                    <div className="p-2 bg-gray-700 hover:bg-gray-500 duration-500 cursor-pointer rounded-full" 
                        onClick={()=>handleDropdown()}>
                        <MenuRoundedIcon />
                    </div>
                    <div className="p-2 bg-gray-700 hover:bg-gray-500 duration-500 cursor-pointer rounded-full" 
                        onClick={()=>handleDropdown('messDropdown')}>
                        <ChatRoundedIcon />
                    </div>
                    <div className="p-2 bg-gray-700 hover:bg-gray-500 duration-500 cursor-pointer rounded-full" 
                        onClick={()=>handleDropdown('notiDropdown')}>
                        <NotificationsRoundedIcon />
                    </div>
                    <div className="p-2 bg-gray-700 hover:bg-gray-500 duration-500 cursor-pointer rounded-full" 
                        onClick={()=>handleDropdown('accDropdown')}>
                        <ArrowDropDownRoundedIcon />
                    </div>
                </div>
            </div>
            <div className="relative z-10">
                {messDropdown && <MessengerDropdown />}
                {notiDropdown && <NotiDropdown />}
                {accDropdown && <AccDropdown removeCookie={props.removeCookie}/>}
            </div>
        </div>
    )
}
function Nav (){
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    return (
        <div className="flex justify-between px-6 h-14 bg-gray-800 z-20 sticky top-0">
            <Left />
            <Mid />
            <Right cookies={cookies} removeCookie={removeCookie}/>
        </div>
    )
}
export default Nav;
