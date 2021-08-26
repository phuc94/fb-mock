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
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import * as userService from '../../services/user'
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';

import ImgUploadModal from '../../components/Form/imgUpload'

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
    const [isImgUploadShow, setIsImgUploadShow] = useState(false);
    const [isCoverConfirm, setIsCoverConfirm] = useState(false);
    const [aboutForm, setAboutForm] = useState(false);
    const [friend, setFriend] = useState(false);
    const [noStatus, setNoStatus] = useState(false);
    const [reqPending, setReqPending] = useState(false);
    const [resPending, setResPending] = useState(false);
    const [newCover, setNewCover] = useState(null);
    const router = useRouter();
    const curUser = router.asPath.replace('/','')
    const coverInput = useRef();
    const encodeImageFileAsURL= (element) => {
        let file = element.target.files[0];
        let reader = new FileReader();
        reader.addEventListener("load", function () {
            // convert image file to base64 string
            setNewCover(reader.result);
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        };
        setIsCoverConfirm(true);
    };
    const handleUpdateCover = () =>{
        userService.UpdateCover(newCover)
        .then(res=>{props.fetchUserData();setNewCover(null);setIsCoverConfirm(false);});
    };

    return (
        <section className="bg-gray-800 w-full border-b-[1px] border-gray-700">
            <div className="w-full relative">
                {isCoverConfirm &&
                    <div className="h-[55px] w-full bg-gray-500 bg-opacity-30 absolute flex justify-between z-20">
                        <div></div>
                        <div className="py-[10px] px-[20px] flex gap-3">
                            <button onClick={()=>{setNewCover(null);setIsCoverConfirm(false)}}
                                className="py-[5px] px-10 bg-gray-500 font-medium text-gray-100 bg-opacity-40 rounded hover:brightness-110">
                                Cancle
                            </button>
                            <button onClick={handleUpdateCover}
                                className="py-[5px] px-10 bg-blue-500 font-medium text-gray-100 rounded hover:brightness-110">
                                Save
                            </button>
                        </div>
                    </div> 
                }
                <div className="max-w-[960px] mx-auto">
                    <div className="relative">

                        {newCover === null ?
                            (
                                <Image className="rounded-b-xl" width={960} height={350}
                                src={props.userData.userData.cover === '' ? "https://via.placeholder.com/1000" : props.userData.userData.cover} />
                            ) :
                            (
                                <Image className="rounded-b-xl" width={960} height={350}
                                src={newCover} />
                            )
                        }

                        {(isOwner === true) && 
                            <div onClick={()=>{coverInput.current.click()}}
                                className="bg-gray-100 absolute bottom-[25px] right-[40px] flex items-center gap-2
                                rounded-lg px-2 py-1 cursor-pointer">
                                <CameraAltRoundedIcon />
                                <p className="font-medium">Edit cover</p>
                                <input onChange={encodeImageFileAsURL}
                                    ref={coverInput} type="file" className="hidden"/>
                            </div>
                        }
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative w-[170px]">
                            <div className="absolute w-[178px] h-[178px] -top-44 rounded-full border-[6px] border-gray-800 overflow-hidden hover:brightness-110 transition-100 cursor-pointer">
                                <Image src={ props.userData.userData.avatar === '' ? "https://via.placeholder.com/500" : props.userData.userData.avatar }
                                    className="" width={200} height={200} />
                            </div>
                            <div className="absolute -top-14 right-0">
                                {(isOwner === true) && 
                                    <div onClick={()=>{setIsImgUploadShow(true);document.body.classList.add('overflow-hidden')}}
                                        className="text-white p-2 rounded-full bg-gray-600 hover:bg-gray-500 transition-100 cursor-pointer">
                                        <AddAPhotoRoundedIcon />
                                    </div>
                                }
                            </div>
                        </div>
                        <p className="text-white font-bold text-3xl mb-2 mt-3">
                            {props.userData.lastName +' '+ props.userData.firstName}
                        </p>

                        {!aboutForm && 
                        <p  
                            onClick= {()=>{setAboutForm(true);}}
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
                        <div className="p-4 hover:bg-gray-700 cursor-pointer rounded-lg duration-200 hidden mg:block">
                            <p>Status</p>
                        </div>
                        <div className="p-4 hover:bg-gray-700 cursor-pointer rounded-lg duration-200 hidden mg:block">
                            <p>About</p>
                        </div>
                        <div className="p-4 hover:bg-gray-700 cursor-pointer rounded-lg duration-200 hidden mg:block">
                            <p>Friends</p>
                        </div>
                        <div className="p-4 hover:bg-gray-700 cursor-pointer rounded-lg duration-200 hidden lg:block">
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
                                            .then(res=>{if(res.status==200){setReqPending(true)};setNoStatus(false)})}}
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
                                    <div className="bg-gray-700 flex py-1 px-2 rounded cursor-pointer hover:bg-gray-600 duration-200">
                                        <PeopleAltRoundedIcon />
                                        <p className="font-medium pl-1">Friend</p>
                                    </div>
                                )
                                :
                                (null)
                            }
                            {/**** RECEIVING REQUEST ****/}
                            {resPending && !isOwner ?
                                (
                                    <div onClick={()=>{userService.acceptFriend(curUser)
                                        .then(res=>{if(res.status==200){setResPending(false);setFriend(true)}})}}
                                        className="bg-green-500 flex py-1 px-2 rounded cursor-pointer hover:bg-green-400 duration-200">
                                        <GroupAddIcon />
                                        <p className="font-medium pl-1">Accept</p>
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
            {/**** AVATAR UPLOAD FORM ****/}
            {isImgUploadShow && <ImgUploadModal setIsImgUploadShow={setIsImgUploadShow} fetchUserData={props.fetchUserData}/>}
        </section>
    )
};
export default Header;
