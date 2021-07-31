import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';
import Image from 'next/image';
import StorefrontIcon from '@material-ui/icons/Storefront';

const UserAvatar = (props)=>{
    return(
        <div className="flex items-center ">
            <div className="mr-3 cursor-pointer">
                <Image width='40' height='40' className="rounded-full" src="https://via.placeholder.com/150" />
            </div>
            <h3 className="cursor-pointer font-medium">Phuc</h3>
        </div>
    )
}

const LeftSideBarItem = (props)=>{
    return(
        <div className="px-3 flex py-2 hover:bg-gray-700 cursor-pointer rounded">
            <props.Icon className="mr-3"/>
            <h3 className="font-medium">{props.text}</h3>
        </div>
    )
}


const LeftSideBar = () =>{
    return(
        <div className="text-white hidden lg:block h-screen bg-gray-900 p-6 pl-10 flex flex-col flex-grow-0 overflow-hidden  w-72 sticky top-10" >
            <UserAvatar />
            <LeftSideBarItem Icon={SettingsIcon} text='Setting'/>
            <LeftSideBarItem Icon={NotificationsActiveIcon} text='Notification'/>
            <LeftSideBarItem Icon={StorefrontIcon} text='Your Store'/>
        </div>
    )
}
export default LeftSideBar;