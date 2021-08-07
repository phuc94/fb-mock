import { useState } from 'react';

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
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';

const AddNewConvers =()=>{
    return (
        <div className="pb-3 pr-3">
            <div className="p-3 bg-gray-700 hover:bg-gray-600 cursor-pointer duration-300 flex items-center justify-center rounded-full text-gray-100">
                <OpenInNewOutlinedIcon />
            </div>
        </div>
    )
}

const Converse = ()=>{
    const Head = ()=>{
        return(
            <div className="flex w-80 flex justify-between shadow">
                <div className=" cursor-pointer px-3 py-1 flex items-center gap-2 text-white hover:bg-gray-700 cursor-poniter duration-100 rounded-lg">
                    <Image className="rounded-full" width={32} height={35} src="https://via.placeholder.com/150" />
                    <div className="flex flex-col">
                        <p className="text-base font-medium">qq</p>
                        <p className="text-xs text-gray-400 font-medium">Online</p>
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
                    <div className="rounded-full hover:bg-gray-600 cursor-pointer">
                        <CloseRoundedIcon />
                    </div>
                </div>
            </div>
        )
    };

    const Body = ()=> {
        return(
            <div className="h-80 shadow-inner">

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
                <div className="flex items-center flex-grow-1">
                    <form className="flex items-center">
                        <input type="text" className="outline-none w-full w-36 px-3 py-2 mr-2 rounded-full bg-gray-500 text-gray-100" placeholder="Aa"/>
                    </form>
                </div>
                <div className="text-blue-500">
                    <ThumbUpAltRoundedIcon />
                </div>
            </div>
        )
    }

    return (
        <div className="shadow bg-gray-800 rounded-t-lg ">
            <Head />
            <Body />
            <Footer />
        </div>
    )
}

const Messenger = ()=>{
    return(
        <>
            <div className="fixed z-10 bottom-0 right-6 bg-opacity-0">
                    <AddNewConvers />
            </div>
            <div className="fixed z-10 bottom-0 right-28 bg-opacity-0 overflow-hidden flex gap-3">
                <Converse />
                <Converse />
            </div>
        </>
    )
};
export default Messenger;