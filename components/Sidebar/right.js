import Image from "next/image";
import { useEffect, useState } from 'react';
import { getBasicUserData } from '../../services/user'
import { ContactLoading } from "../Loading";

const Contact = (props)=>{
    const [friendData,setFriendData] = useState(null);
    useEffect(()=>{
        getBasicUserData(props.userId)
        .then(res=>{setFriendData(res.data);console.log('FRIEND');console.log(res.data)})
    },[])
    console.log(props.userId);
    return (
        <>  
            {friendData == null ? (<ContactLoading />) :
                (<div className="flex items-center gap-3 py-2 pl-3 hover:bg-gray-700 duration-500 rounded cursor-pointer">
                    <Image src={friendData.avatar == '' ? "https://via.placeholder.com/150" : friendData.avatar} 
                        width='40' height='40' className="rounded-full" />
                    <p className="font-medium">{friendData.lastName +' '+ friendData.firstName}</p>
                </div>)
            }
            
        </>
    )
}

const RightSideBar = (props)=>{
    /**
     * @prop: friends
     */
    return (
        <div className="text-white hidden lg:block h-[90vh] bg-gray-900 py-6 px-3 flex flex-col flex-grow-0 w-72 overflow-y-auto sticky top-10">
            <h3>Your contacts</h3>
            {props.friends.map(friend=>(
                <Contact userId={friend}/>
            ))}
        </div>
    )
};
export default RightSideBar;