import Image from 'next/image';
import AddAPhotoRoundedIcon from '@material-ui/icons/AddAPhotoRounded';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import PersonAddDisabledRoundedIcon from '@material-ui/icons/PersonAddDisabledRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import * as userService from '../../services/user'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const Header = (props)=>{
    useEffect(()=>{
        console.log(props.isOwner);
        const stateCleaning = () => {
            setIsOwner(false);
            setAboutForm(false);
            setFriend(false);
            setNoStatus(false);
            setReqPending(false);
            setResPending(false);
        };
        switch (props.isOwner){
            case true:
                stateCleaning();
                setIsOwner(true);
                break;
            case 'reqPending':
                stateCleaning();
                setReqPending(true);
                break;
            case 'resPending':
                stateCleaning();
                setResPending(true);
                break;
            case 'friend':
                stateCleaning();
                setFriend(true);
                break;
            case 'noStatus':
                stateCleaning();
                setNoStatus(true);
                break;
            default:
                break;
        }
    },[props.isOwner])
    const [isOwner, setIsOwner] = useState(false);
    const [aboutForm, setAboutForm] = useState(false);
    const [friend, setFriend] = useState(false);
    const [noStatus, setNoStatus] = useState(false);
    const [reqPending, setReqPending] = useState(false);
    const [resPending, setResPending] = useState(false);
    const router = useRouter();
    const curUser = router.asPath.replace('/','')
    return (
        <section className="bg-gray-800 w-full">
            <div className="w-full">
                <div className="w-[960px] mx-auto">
                    <Image className="rounded-b-xl" width={960} height={350} src="https://via.placeholder.com/1000" />
                    <div className="flex flex-col items-center">
                        <div className="relative w-[170px]">
                            <div className="absolute w-[178px] h-[178px] -top-44 rounded-full border-[6px] border-gray-800 overflow-hidden hover:brightness-110 transition-100 cursor-pointer">
                                <Image className="" width={200} height={200} src="https://via.placeholder.com/500" />
                            </div>
                            <div className="absolute -top-14 right-0">
                                <div className="text-white p-2 rounded-full bg-gray-600 hover:bg-gray-500 transition-100 cursor-pointer">
                                    <AddAPhotoRoundedIcon />
                                </div>
                            </div>
                        </div>
                        <p className="text-white font-bold text-3xl mb-2">Nguyen Truong Trung Phuc</p>
                        {!aboutForm && 
                        <p  
                            onClick= {()=>{setAboutForm(true)}}
                            className="font-medium text-blue-600 cursor-pointer"
                            >Add information</p>}
                        {aboutForm &&
                        <form >
                            <textarea 
                                className="w-[300px] h-[85px] px-3 py-2 rounded-lg bg-gray-600 text-white
                                    text-center resize-none focus:outline-none focus:ring focus:border-blue-900" 
                                placeholder="About you"/>
                            <div className=" flex justify-between">
                                <div></div>
                                <div>
                                    <button onClick={()=>{setAboutForm(false)}}
                                        type="button" 
                                        className="text-white bg-gray-600 p-2 rounded-lg mr-1"
                                        >Close</button>
                                    <button className="text-white bg-blue-500 p-2 rounded-lg">Save</button>
                                </div>
                            </div>
                        </form>}
                    </div>
                    <div className="flex justify-center text-white border-t-[1px] border-gray-700 mt-3">
                        <div className="p-4 hover:bg-gray-700 cursor-pointer rounded-lg duration-200">
                            <p>Status</p>
                        </div>
                        <div className="p-4 hover:bg-gray-700 cursor-pointer rounded-lg duration-200">
                            <p>About</p>
                        </div>
                        <div className="p-4 hover:bg-gray-700 cursor-pointer rounded-lg duration-200">
                            <p>Friends</p>
                        </div>
                        <div className="p-4 hover:bg-gray-700 cursor-pointer rounded-lg duration-200">
                            <p>Photos</p>
                        </div>
                        <div className="flex p-4 hover:bg-gray-700 cursor-pointer rounded-lg duration-200">
                            <p>More</p>
                            <ArrowDropDownRoundedIcon />
                        </div>
                        <div className="flex items-center mx-2">
                            {/**** OWNER OR NOT ****/}
                            { isOwner ?
                                (
                                <div className="bg-blue-500 flex py-1 px-2 rounded cursor-pointer hover:bg-blue-400 duration-200">
                                    <AddCircleIcon />
                                    <p className="font-medium pl-1">Add to story</p>
                                </div>
                                )
                                :
                                (null)
                            }

                            {/**** FRIEND STATUS ****/}
                            {/**** NO STATUS ****/}
                            {noStatus && !isOwner ?
                                (
                                    <div onClick={()=>{userService.friendRequest(curUser)
                                            .then(res=>{if(res.status==200){setReqPending(true)}})}}
                                        className="bg-blue-500 flex py-1 px-2 rounded cursor-pointer hover:bg-blue-400 duration-200">
                                        <PersonAddRoundedIcon />
                                        <p className="font-medium pl-1">Add friend</p>
                                    </div>
                                )
                                :
                                (null)
                            }

                            {/**** FRIEND REQUEST PENDING ****/}
                            {reqPending && !isOwner ?
                                (
                                    <div onClick={()=>{userService.friendCancle(curUser)
                                        .then(res=>{if(res.status==200){setReqPending(false)}})}}
                                        className="bg-blue-500 flex py-1 px-2 rounded cursor-pointer hover:bg-blue-400 duration-200">
                                        <PersonAddDisabledRoundedIcon />
                                        <p className="font-medium pl-1">Cancle request</p>
                                    </div>
                                )
                                :
                                (null)
                            }

                            {/**** ALREADY FRIEND ****/}
                            {friend && !isOwner ?
                                (
                                    <div className="bg-blue-500 flex py-1 px-2 rounded cursor-pointer hover:bg-blue-400 duration-200">
                                        <PeopleAltRoundedIcon />
                                        <p className="font-medium pl-1">Friend</p>
                                    </div>
                                )
                                :
                                (null)
                            }

                        </div>
                        <div className="flex items-center mr-2">
                            {/**** OWNER OR NOT -> EDIT/CHAT ****/}
                            { props.isOwner === true ?
                                (
                                    <div className="bg-gray-700 flex py-1 px-2 rounded cursor-pointer hover:bg-gray-600 duration-200">
                                        <EditRoundedIcon />
                                        <p className="font-medium pl-1">Edit your Profile</p>
                                    </div>
                                )
                                :
                                (
                                    <div className="bg-gray-700 flex py-1 px-2 rounded cursor-pointer hover:bg-gray-600 duration-200">
                                        <ChatRoundedIcon />
                                        <p className="font-medium pl-1">Leave a message</p>
                                    </div>
                                )
                            }

                        </div>
                        <div className="flex items-center">
                            <div className="bg-gray-700 flex py-1 px-2 rounded cursor-pointer hover:bg-gray-600 duration-200">
                                <MoreHorizRoundedIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Header; 