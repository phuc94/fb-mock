import MainColumn from '../EachPost/main-column'
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import HouseRoundedIcon from '@material-ui/icons/HouseRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getUserPhotos, getBasicUserData } from '../../services/user'

const Body = (props)=>{
    return (
        <div className="bg-gray-900 w-full">
            <div className="flex flex-col gap-6 w-full lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto lg:flex-row">
                <div className="w-full lg:w-auto max-w-[630px] mx-auto">
                    <LeftSidebar userData={props.userData}/>
                </div>
                <div className="w-full max-w-[630px] mx-auto">
                    <MainColumn setIsFormShow={props.setIsFormShow} posts={props.posts} userData={props.userData}
                        statusRender={(props.isOwner === true) ? true : false } storyRender={false} cookie={props.cookie}/>
                </div>
            </div>
        </div>
    )
};
export default Body;
const LeftSidebar = (props) =>{
    return(
        <div className="flex flex-col w-full lg:w-auto items-center">
            <About />
            <Photos userData={props.userData}/>
            <Friends userData={props.userData}/>
        </div>
    )
}
const About = ()=> {
    return(
        <div className="text-gray-100 bg-gray-800 mt-4 pt-2 rounded-lg w-full lg:w-[350px] shadow-lg">
            <div className="px-3 py-2">
                <p className="font-bold text-xl">About</p>
            </div>
            <div className="flex px-3 py-2 gap-2">
                <div className="text-gray-400">
                    <WorkRoundedIcon />
                </div>
                <p>Work at <span className="font-medium">Student</span></p>
            </div>
            <div className="flex px-3 py-2 gap-2">
                <div className="text-gray-400">
                    <ImportContactsRoundedIcon />
                </div>
                <p>Studied at <span className="font-medium">THPT Tran Quoc Tuan</span></p>
            </div>
            <div className="flex px-3 py-2 gap-2">
                <div className="text-gray-400">
                    <HouseRoundedIcon />
                </div>
                <p>Lived at <span className="font-medium">Nagasaki</span></p>
            </div>
            <div className="flex px-3 py-2 gap-2">
                <div className="text-gray-400">
                    <RoomRoundedIcon />
                </div>
                <p>From <span className="font-medium">Kquang Ngai, Quang Ngai, Vietnam</span></p>
            </div>
            <div className="flex justify-center bg-gray-700 hover:bg-gray-600 cursor-pointer mx-3 py-1 rounded-lg mb-4">
                <p className="font-medium">Edit</p>
            </div>
            <div className="flex justify-center bg-gray-700 hover:bg-gray-600 cursor-pointer mx-3 py-1 rounded-lg mb-4">
                <p className="font-medium">Add hobby</p>
            </div>
            <div className="flex justify-center bg-gray-700 hover:bg-gray-600 cursor-pointer mx-3 py-1 rounded-lg mb-4">
                <p className="font-medium">Add more information</p>
            </div>
        </div>
    )
}

const Photos = (props)=> {
    const [photos, setPhotos] = useState([]);
    useEffect(()=>{
        getUserPhotos(props.userData._id)
            .then(res=>{
            if(res.data.length > 9){
                res.data.splice(0,8);
            }
            setPhotos(res.data);
        });
    },[])
    return(
        <div className="text-gray-100 bg-gray-800 mt-4 pt-2 rounded-lg w-full lg:w-[350px] shadow-lg">
            <div className="px-3 py-2 flex justify-between">
                <p className="font-bold text-xl">Photos</p>
                <div className="hover:bg-gray-700 cursor-pointer p-1 rounded text-blue-500">
                    <a href="#">View all Photos</a>
                </div>
            </div>
            <div className="flex flex-wrap justify-start items-start gap-[5.455px] overflow-hidden rounded-xl mx-3 mb-6">
                {photos.map(item=>(
                    <div className="hover:brightness-110 cursor-pointer relative w-[105px] h-[105px] overflow-hidden" key={item._id}>
                        <Image className="" layout="fill" objectFit='contain' src={item.img} />
                    </div>
                ))}
            </div>
        </div>
    )
}

const Friends = (props)=> {
    const [friends,setFriends] = useState([]);
    useEffect(()=>{
        getBasicUserData(props.userData.friends)
            .then(res=>{
                if(typeof res.data == 'object'){
                    setFriends([res.data]);
                }else {
                    if(res.data.length > 9){
                        res.data.splice(0,8);
                    }
                    setFriends(res.data)
                }
            });
    },[])
    return(
        <div className="text-gray-100 bg-gray-800 mt-4 pt-2 rounded-lg w-full lg:w-[350px] shadow-lg">
            <div className="px-3 pt-2 flex justify-between">
                <p className="font-bold text-xl">Friends</p>
                <div className="hover:bg-gray-700 cursor-pointer p-1 rounded text-blue-500">
                    <a href="">View all Friend</a>
                </div>
            </div>
            <div className="px-3 pb-4">
                <p className="text-gray-300">445 friends</p>
            </div>
            <div className="flex flex-wrap justify-start items-start mx-3 mb-6 gap-[13px]">
                {friends.map(friend=>(
                    <div key={friend._id}>
                        <div className="overflow-hidden rounded-lg w-[100px] h-[100px] hover:brightness-110 cursor-pointer">
                            <Image src={friend.avatar == '' ? "https://via.placeholder.com/150" : friend.avatar}
                                className="" width={100} height={100} />
                        </div>
                        <div className="font-medium cursor-pointer w-[100px] flex">
                            <span className="text-sm max-w-full">{friend.lastName + ' ' + friend.firstName}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

const array12= [1,2,3,4];