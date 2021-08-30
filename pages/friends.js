import Nav from '../components/Navbar';
import LeftSideBar from '../components/Sidebar/left';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import Image from 'next/image';
import { getBasicUserData, getSuggestFriend, AcceptFriend, friendRequest } from '../services/user';
import { FriendTabLoading } from '../components/Loading/friendTab'

const FriendsPage = () => {
    const basicUserData = useSelector(state=>state.userData);
    const [suggestFriend,setSuggestFriend] = useState([]);
    const [resPending,setRespending] = useState([]);
    const [page,setPage] = useState(1);
    const size = 20;
    console.log(basicUserData);
    useEffect(()=>{
        if(basicUserData){
            setRespending(basicUserData.resPending);
        }
        getSuggestFriend(size,page).then(res=>{
            console.log(res);
            setSuggestFriend(res.data.data);
            if(res.status == 200){
                setPage(res.page + 1);
            }
        })
    },[basicUserData])
    return(
        <div className="bg-gray-900 flex flex-fol h-screen">
            {basicUserData &&
            <>
                <div className="fixed top-0 left-0 w-full z-50">
                    <Nav basicUserData={basicUserData}/>
                </div>
                <div className="flex pt-[55px]">
                    <LeftSideBar basicUserData={basicUserData}/>
                    <div className="px-8 pt-8 w-full h-full overflow-y-auto">
                        {resPending.length > 0 ?
                            <FriendGroup category={"Friend Invitation"} path={""}>
                                {resPending.map(user=>(
                                    <FriendTab user={user} topBtn={"Accept"} botBtn={"Decline"}/>
                                ))}
                            </FriendGroup>
                            :
                            null
                        }
                        <FriendGroup category={"People you may know"} path={""}>
                            {suggestFriend.map(friend=>(
                                <FriendTab user={friend} topBtn={"Add friend"} botBtn={"Delete"}/>
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
    /**
     * @props user:{userId}
     */
    const [userData,setUserData] = useState(null);
    const [isShow,setIsShow] = useState(true);
    useEffect(()=>{
        console.log(props.user.userId)
        getBasicUserData(props.user.userId)
            .then(res=>{
                console.log(res.data);
                setUserData(res.data);
            })
    },[])
    const handleTopBtn = () => {
        switch(props.topBtn){
            case "Accept":
                AcceptFriend(props.user.userId).then(res=>{
                    if(res.status == 200) {
                        setIsShow(false);
                    }
                });
            break;
            case "Add friend":
                friendRequest(props.user.userId).then(res=>{
                    if(res.status == 200) {
                        setIsShow(false);
                    }
                });
                break;
            default:
                break;
        }
    }
    const handleBotBtn = () => {
        setIsShow(false);
    }
    return (
        <>
            {isShow &&
                <>
                    {userData ?
                        <div className="bg-gray-800 min-h-[345px] max-h-[390px] flex-col rounded-xl
                            border-[1px] border-gray-700 overflow-hidden min-w-[190px] max-w-[240px] flex-1">
                            <div className="relative max-w-[240px] max-h-[240px] min-w-[190px] min-h-[190px] flex-grow">
                                <img layout="fill" className="w-full"
                                    src={userData.avatar ==''? "https://via.placeholder.com/300" : userData.avatar} />
                            </div>
                            <div className="p-3 flex flex-col gap-3">
                                <p className="text-gray-100 font-medium">{userData.lastName +' '+ userData.firstName}</p>
                                <button onClick={handleTopBtn}
                                    className="w-full text-gray-300 bg-blue-500 py-[6px] font-medium rounded-lg hover:brightness-110"
                                    >{props.topBtn}
                                </button>
                                <button onClick={handleBotBtn}
                                    className="w-full text-gray-300 bg-gray-700 py-[6px] font-medium rounded-lg hover:brightness-110"
                                    >{props.botBtn}
                                </button>
                            </div>
                        </div>
                        :
                        <FriendTabLoading />
                    }
                </>
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