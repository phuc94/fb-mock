import React from "react";
import Link from "next/link";
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

const Left =()=>{
    return (
        <div className="py-2 flex items-center">
            <Image width={40} height={40} src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png'/>
            <div className="ml-3 h-10 bg-white rounded-full items-center flex pl-2 bg-gray-500">
                <div className='text-gray-300'>
                    <SearchIcon />
                </div>
                <input className="px-3 rounded-full h-full outline-none bg-gray-500 text-white" placeholder="Search in Facebook"/>
            </div>
        </div>
    )
};

const Mid =()=>{
    return (
        <div className="text-white flex gap-3 items-center">
            <div className="text-3xl py-1 px-10 hover:bg-gray-600 cursor-pointer rounded">
                <HomeIcon fontSize="inherit"/>
            </div>
            <div className="text-3xl py-1 px-10 hover:bg-gray-600 cursor-pointer rounded">
                <OutlinedFlagIcon fontSize="inherit" />
            </div>
            <div className="text-3xl py-1 px-10 hover:bg-gray-600 cursor-pointer rounded">
                <OndemandVideoOutlinedIcon fontSize="inherit" />
            </div>
            <div className="text-3xl py-1 px-10 hover:bg-gray-600 cursor-pointer rounded">
                <StorefrontOutlinedIcon fontSize="inherit" />
            </div>
            <div className="text-3xl py-1 px-10 hover:bg-gray-600 cursor-pointer rounded">
                <GroupRoundedIcon fontSize="inherit" />
            </div>
        </div>
    )
};
const Right =()=>{
    return(
        <div className="flex items-center gap-3">
            <div className="px-3 py-1 flex items-center gap-2 text-white cursor-pointer hover:bg-gray-600 rounded-full">
                <Image className="rounded-full" width={35} height={35} src="https://via.placeholder.com/150" />
                <span>Nguyen</span>
            </div>
            <div className="flex gap-2 text-white">
                <div className="p-2 bg-gray-800 hover:bg-gray-600 cursor-pointer rounded-full">
                    <MenuRoundedIcon />
                </div>
                <div className="p-2 bg-gray-800 hover:bg-gray-600 cursor-pointer rounded-full">
                    <ChatRoundedIcon />
                </div>
                <div className="p-2 bg-gray-800 hover:bg-gray-600 cursor-pointer rounded-full">
                    <NotificationsRoundedIcon />
                </div>
                <div className="p-2 bg-gray-800 hover:bg-gray-600 cursor-pointer rounded-full">
                    <ArrowDropDownRoundedIcon />
                </div>
            </div>
        </div>
    )
}
function Nav (){
    return (
        <div className="flex justify-between px-6 h-14 bg-gray-800 z-50 sticky top-0">
            <Left />
            <Mid />
            <Right />
        </div>
    )
}
export default Nav;
