import AnnouncementIcon from '@material-ui/icons/Announcement';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import Image from 'next/image';
import * as userService from '../../services/user'
import { useRouter } from 'next/router'

const AccDropdown = (props)=>{
    const router = useRouter();
    return(
        <div className="absolute bg-gray-800 right-0 top-3 rounded-xl w-80 text-white shadow-xl border-[1px] border-gray-700">
            <div onClick={()=>{router.push(`/${props.basicUserData._id}`)}}
                className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={60} height={60}
                    src={props.basicUserData.avatar == '' ? 'https://via.placeholder.com/150' : props.basicUserData.avatar}/>
                <div className="ml-3">
                    <p className="text-white font-medium">{props.basicUserData.lastName +' '+ props.basicUserData.firstName}</p>
                    <p className="text-gray-300">View your profile</p>
                </div>
            </div>
            <div className="border-t-[1px] border-b-[1px] border-gray-700">
                <div className="flex p-2 m-2 hover:bg-gray-600 items-center rounded-lg cursor-pointer" >
                    <div className="bg-gray-700 p-1 rounded-full">
                        <AnnouncementIcon />
                    </div>
                    <div>
                        <p className="font-medium text-white pl-2">Contribute Idea</p>
                        <p className="text-xs pl-2 text-gray-100">Help us improve new Facebook version.</p>
                    </div>
                </div>
            </div>
            <div className="p-2 font-medium">
                <div className="flex p-2 hover:bg-gray-600 rounded-lg cursor-pointer items-center">
                    <div className="bg-gray-700 p-1 rounded-full">
                        <SettingsIcon />
                    </div>
                    <div className="flex justify-between w-full">
                        <p className="text-gray-300 pl-2">Settings & privacy</p>
                        <ChevronRightRoundedIcon />
                    </div>
                </div>
                <div className="flex p-2 hover:bg-gray-600 rounded-lg cursor-pointer items-center">
                    <div  className="bg-gray-700 p-1 rounded-full">
                        <HelpOutlinedIcon />
                    </div>
                    <div className="flex justify-between w-full">
                        <p className="text-gray-300 pl-2">Help & support</p>
                        <ChevronRightRoundedIcon />
                    </div>
                </div>
                <div className="flex p-2 hover:bg-gray-600 rounded-lg cursor-pointer items-center">
                    <div  className="bg-gray-700 p-1 rounded-full">
                        <NightsStayIcon />
                    </div>
                    <div className="flex justify-between w-full">
                        <p className="text-gray-300 pl-2">Screen and Accessibility</p>
                        <ChevronRightRoundedIcon />
                    </div>
                </div>
                <div onClick={()=>{userService.logOut()
                    .then((res)=>{
                        if(res.status == 200){props.removeCookie('user');router.push('/login')}
                    })}}
                    className="flex p-2 hover:bg-gray-600 rounded-lg cursor-pointer items-center">
                    <div  className="bg-gray-700 p-1 rounded-full">
                        <ExitToAppIcon />
                    </div>
                    <p className="text-gray-300 pl-2">Log out</p>
                </div>
            </div>
        </div>
    )
};
export default AccDropdown;