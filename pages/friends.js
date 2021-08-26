import Nav from '../components/Navbar';
import LeftSideBar from '../components/Sidebar/left';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import Image from 'next/image';
import { getBasicUserData } from '../services/user';
import { FriendTabLoading } from '../components/Loading/friendTab'

const FriendsPage = () => {
    const basicUserData = useSelector(state=>state.userData);
    return(
        <div className="bg-gray-900">
            {basicUserData &&
            <>
                <Nav basicUserData={basicUserData}/>
                <div className="flex">
                    <LeftSideBar basicUserData={basicUserData}/>
                    <div className="px-8 pt-8 w-full">
                        <FriendGroup category={"Friend Invitation"} path={""}>
                            {basicUserData.friends.map(friend=>(
                                <FriendTab userId={friend}/>
                            ))}
                        </FriendGroup>
                        <FriendGroup category={"People you may know"} path={""}>
                            {basicUserData.friends.map(friend=>(
                                <FriendTab userId={friend}/>
                            ))}
                        </FriendGroup>
                    </div>
                </div>
            </>
            }
        </div>
    )
};
export default FriendsPage;

const FriendTab = (props) => {
    const [userData,setUserData] = useState(null);
    useEffect(()=>{
        getBasicUserData(props.userId)
            .then(res=>{
                console.log(res.data);
                setUserData(res.data);
            })
    },[])
    return (
        <>
            {userData ?
                <div className="bg-gray-800 min-h-[345px] max-h-[390px] flex-col rounded-xl
                    border-[1px] border-gray-700 overflow-hidden min-w-[190px] max-w-[240px] flex-1">
                    <div className="relative max-w-[240px] max-h-[240px] min-w-[190px] min-h-[190px] flex-grow">
                        <img layout="fill" src={userData.avatar ==''? "https://via.placeholder.com/300" : userData.avatar} />
                    </div>
                    <div className="p-3 flex flex-col gap-3">
                        <p className="text-gray-100 font-medium">{userData.lastName +' '+ userData.firstName}</p>
                        <button className="w-full text-gray-300 bg-blue-500 py-[6px] font-medium rounded-lg
                            hover:brightness-110"
                            >Accept
                        </button>
                        <button className="w-full text-gray-300 bg-gray-700 py-[6px] font-medium rounded-lg
                            hover:brightness-110"
                            >Decline
                        </button>
                    </div>
                </div>
                :
                <FriendTabLoading />
            }
        </>
    )
};

const FriendGroup = (props) => {
    return (
        <div className="w-full border-b-[1px] border-gray-700 mb-8 pb-6">
            <div className="flex justify-between">
                <p className="text-xl text-gray-100 font-medium mb-3">
                    {props.category}
                </p>
                <div>
                    <button className="text-blue-400 px-3 py-1 hover:bg-gray-700">
                        See all
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-3">
                {props.children}
            </div>
        </div>
    )
};