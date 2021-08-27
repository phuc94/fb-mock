import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';
import Image from 'next/image';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import { useRouter } from 'next/router';

const UserAvatar = (props)=>{
    return(
        <div className="flex items-center ">
            <div className="mr-3 cursor-pointer">
                <Image width='40' height='40' className="rounded-full" 
                src={props.basicUserData.avatar == '' ? "https://via.placeholder.com/150" : props.basicUserData.avatar} />
            </div>
            <h3 className="cursor-pointer font-medium">{props.basicUserData.lastName +' '+ props.basicUserData.firstName}</h3>
        </div>
    )
}

const LeftSideBarItem = (props)=>{
    const router = useRouter();
    return(
        <div onClick={()=>{router.push(`/${props.path}`)}}
            className="px-3 flex py-2 hover:bg-gray-700 duration-500 cursor-pointer rounded">
            <props.Icon className="mr-3"/>
            <h3 className="font-medium">{props.text}</h3>
        </div>
    )
}


const LeftSideBar = (props) =>{
    const router = useRouter();
    return(
        <div className={`text-white hidden xl:block h-screen bg-gray-900 p-6 pl-10 flex flex-col 
        overflow-hidden w-72 min-w-[18rem] sticky top-10 ${router.pathname == '/' ? '' : 'border-r-[1px] border-gray-700'}`} >
            <UserAvatar basicUserData={props.basicUserData}/>
            <LeftSideBarItem Icon={GroupRoundedIcon} text='Friends' path={"friends"}/>
            <LeftSideBarItem Icon={BookmarkRoundedIcon} text='Bookmark'/>
            <LeftSideBarItem Icon={ChatRoundedIcon} text='Messenger'/>
        </div>
    )
}
export default LeftSideBar;