import Image from 'next/image';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import OpenWithRoundedIcon from '@material-ui/icons/OpenWithRounded';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const MessengerDropdown = ()=>{
    return(
        <div className="absolute bg-gray-800 right-0 top-3 rounded-xl w-80 text-white shadow-xl">
            <div className="flex items-center justify-between">
                <p className="pl-3 py-3 text-2xl font-medium">Messenger</p>
                <div className="pr-3 text-gray-400 flex gap-2">
                    <div className="rounded-full hover:bg-gray-700 cursor-pointer p-1">
                        <MoreHorizRoundedIcon />
                    </div>
                    <div className="rounded-full hover:bg-gray-700 cursor-pointer p-1">
                        <OpenWithRoundedIcon />
                    </div>
                    <div className="rounded-full hover:bg-gray-700 cursor-pointer p-1">
                        <VideoCallRoundedIcon />
                    </div>
                    <div className="rounded-full hover:bg-gray-700 cursor-pointer p-1">
                        <LaunchRoundedIcon />
                    </div>
                </div>
            </div>
            <div className="justify-between px-3 w-full">
                <div className="bg-gray-600 items-center px-2 py-1 rounded-full">
                    <div className="w-full text-gray-400 text-2xl flex items-center">
                        <SearchRoundedIcon fontSize="inherit"/>
                    <input type="text" className="w-full text-base bg-gray-600 outline-none" placeholder="Search"/>
                    </div>
                </div>
            </div>
            <div className="overflow-scroll h-screen">
                <MessList />
            </div>
        </div>
    )
};
export default MessengerDropdown;

const MessList = ()=>{
    return(
        <>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={60} height={60}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-base">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-200 text-xs">View your profile</p>
                </div>
            </div>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={60} height={60}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-base">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-200 text-xs">View your profile</p>
                </div>
            </div><div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={60} height={60}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-base">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-200 text-xs">View your profile</p>
                </div>
            </div>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={60} height={60}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-base">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-200 text-xs">View your profile</p>
                </div>
            </div>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={60} height={60}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-base">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-200 text-xs">View your profile</p>
                </div>
            </div>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={60} height={60}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-base">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-200 text-xs">View your profile</p>
                </div>
            </div>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={60} height={60}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-base">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-200 text-xs">View your profile</p>
                </div>
            </div>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={60} height={60}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-base">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-200 text-xs">View your profile</p>
                </div>
            </div>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={60} height={60}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-base">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-200 text-xs">View your profile</p>
                </div>
            </div>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={60} height={60}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-base">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-200 text-xs">View your profile</p>
                </div>
            </div>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={60} height={60}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-base">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-200 text-xs">View your profile</p>
                </div>
            </div>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={60} height={60}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-base">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-200 text-xs">View your profile</p>
                </div>
            </div>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={60} height={60}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-base">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-200 text-xs">View your profile</p>
                </div>
            </div>
        </>
    )
}